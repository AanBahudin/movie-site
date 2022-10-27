import {Navbar, Footer, Sidebar} from '../../components'
import { useUiContext } from '../../context/ui_context'
import axios from 'axios'
import {handleImage} from '../../utils/helper'
import Link from 'next/link'
import moment from 'moment'

export const getServerSideProps = async({params}) => {
    const {collectionId} = params

    const url = `http://localhost:3001/api/v1/movies/search/collection/${collectionId}`
    const response  = await axios.get(url)
    return {
        props: {
            data: response.data
        }
    }
}


const CollectionId = ({data}) => {
    const {backdrop_path, overview, name, parts} = data
    const {openSidebar} = useUiContext()

    return (
        <main className='min-h-screen relative max-h-fit'>
            {openSidebar ? <Sidebar /> : null}
            <Navbar />
            <h1 className='pt-16 pb-5 text-2xl text-center font-roboto'>{name}</h1>
            
            <section className='w-9/12 mx-auto'>
                <img className='w-3/4 mx-auto rounded py-10' src={handleImage(backdrop_path)} />
                <h4 className='text-center italic text-silver'>{overview}</h4>
            </section>

            <section className='w-9/12 mx-auto mt-[6%] flex flex-col gap-y-10 pb-[20%]'>
                {parts.map(item => {
                    const {original_title, poster_path, overview, popularity, release_date, vote_count, vote_average, id} = item
                    return (
                        <article key={id} className='flex justify-around'>
                            <img className='w-52 rounded' src={handleImage(poster_path)} />

                            <div className='p-5'>
                                <Link href={`/single/movie/${id}`}><h1 className='text-2xl cursor-default font-semibold text-crayola py-5'>{original_title}</h1></Link>
                                <h4>{overview}</h4>

                                <article className='text-silver italic pt-10 font-roboto'>
                                    <h5>Released - {moment(release_date, "YYYYMMDD").fromNow()}</h5>
                                    <h5>Popularity - {popularity}</h5>
                                    <h5>Vote Count - {vote_count} votes</h5>
                                    <h5>Vote Average - {vote_average}</h5>
                                </article>
                            </div>
                        </article>
                    )
                })}
            </section>
            <Footer />
        </main>
    )
}

export default CollectionId
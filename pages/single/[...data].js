import {Navbar, Sidebar} from '../../components'
import { useUiContext } from '../../context/ui_context'
import axios from 'axios'

export const getServerSideProps = async({params}) => {
    const baseURL = 'http://localhost:3001/api/v1/movies'
    const {data} = params
    const responses = await axios.get(`${baseURL}/${data[0]}/${data[1]}`)
    return {
        props: {
            singleData: responses.data
        }
    }
}


const SingleById = ({singleData}) => {

    const {poster_path, backdrop_path, title, original_name, tagline, overview, genres} = singleData

    const {openSidebar} = useUiContext()
    return (
        <>
            {openSidebar ? <Sidebar /> : null}
            <Navbar />
            <main className='py-[7%] w-[90%] mx-auto'>

                <img className='w-9/12 mx-auto rounded' src={`https://image.tmdb.org/t/p/original${backdrop_path}`} />

                <section className='grid grid-cols-2 py-[7%]'>
                    <div className='flex justify-center items-center flex-col font-roboto'>
                        <img className='w-72 pb-10' src={`https://image.tmdb.org/t/p/w500${poster_path || backdrop_path}`} />
                        <h1 className='text-2xl text-cultured'>{title || original_name}</h1>
                        <p className='italic text-center text-silver'>" {tagline || '-'} "</p>
                    </div>

                    <div className='flex justify-center items-center flex-col font-roboto'>
                        <h4 className='text-center text-cultured'>{overview}</h4>
                        <article className='flex w-10/12 mx-auto py-[7%] justify-evenly items-center'>
                            {genres.map(item => {
                                return <h1 className='uppercase text-silver cursor-default' key={item.id}>{item.name}</h1>
                            })}
                        </article>
                    </div>
                </section>
            </main>
        </>
    )
}

export default SingleById
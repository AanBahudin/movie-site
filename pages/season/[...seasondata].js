import {Navbar, Footer, Sidebar, NoResult} from '../../components'
import { useUiContext } from '../../context/ui_context'
import axios from 'axios'
import {handleImage, handleTime} from '../../utils/helper'

export const getServerSideProps = async({params}) => {
    const {seasondata} = params
    const tv_id = seasondata[0]
    const season_number = seasondata[1]

    const response = await axios.get(`http://localhost:3001/api/v1/movies/season/${tv_id}/${season_number}`)
    return {
        props: {
            data: response.data
        }
    }
}


const SeasonInformation = ({data}) => {
    const {episodes} = data
    const {openSidebar} = useUiContext()

    return (
        <main className="h-fit min-h-[100vh] relative">
            {openSidebar ? <Sidebar /> : null}
            <Navbar />

            {episodes.length === 0 ? (
                <NoResult message='No Episodes Has Been Posted' />
            ) : (
                <section className='w-9/12 mx-auto py-[10%] gap-y-10 flex flex-col'>
                    {episodes.map(item => {
                        return (
                            <article className='flex w-full justify-between'>
                                <img className='w-2/5 rounded' src={handleImage(item.still_path)} alt={item.name} />

                                <div className='px-7 text-sm'>
                                    <h1 className='text-2xl text-crayola'>Episode {item.episode_number} - {item.name}</h1>
                                    <p>{item.runtime} minutes | {handleTime(item.air_date)}</p>
                                    <p className='text-silver pt-4'>{item.overview}</p>
                                </div>
                            </article>
                        )
                    })}
                </section>
            )}


            <Footer />
        </main>
    )
}

export default SeasonInformation
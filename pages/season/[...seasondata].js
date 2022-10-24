import {Navbar, Footer, Sidebar} from '../../components'
import { useUiContext } from '../../context/ui_context'
import axios from 'axios'
import {handleImage} from '../../utils/helper'

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


            <section>
                {episodes.map(item => {
                    return (
                        <article>
                            <img className='w-52 rounded' src={handleImage(item.still_path)} alt={item.name} />
                        </article>
                    )
                })}
            </section>

            <Footer />
        </main>
    )
}

export default SeasonInformation
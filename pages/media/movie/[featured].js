import {Navbar, Sidebar} from '../../../components'
import { useUiContext } from '../../../context/ui_context';
import {Cards} from '../../../components'
import axios from 'axios'


export const getServerSideProps = async({params}) => {
    const baseURL = `http://localhost:3001/api/v1/movies`
    const response = await axios.get(`${baseURL}/featured/movie/${params.featured}`)


    return {
        props: {
            data: response.data
        }
    }
}

const MovieFeatured = ({data}) => {
    console.log(data);

    if(typeof data === 'undefined') {
        return <h1>Loading ....</h1>
    }
    const {openSidebar} = useUiContext()

    return (
        <main>
            {openSidebar ? <Sidebar /> : null}
            <Navbar />
            
            {/* <section className='py-[10%]'>
                {data.map((item, index) => {
                    return <Cards {...item} key={index} />
                })}
            </section> */}
        </main>
    )
}

export default MovieFeatured
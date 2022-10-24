import {Navbar, Sidebar, Footer, SingleMovie, SingleTv} from '../../components'
import { useUiContext } from '../../context/ui_context'
import axios from 'axios'

export const getServerSideProps = async({params}) => {
    const baseURL = 'http://localhost:3001/api/v1/movies'
    const {data} = params
    const responses = await axios.get(`${baseURL}/${data[0]}/${data[1]}`)
    return {
        props: {
            params: data[0],
            singleData: responses.data
        }
    }
}


const SingleById = ({params, singleData}) => {

    console.log(singleData);
    const {openSidebar} = useUiContext()
    return (
        <main className='h-fit min-h-[100vh] relative'>
            {openSidebar ? <Sidebar /> : null}
            <Navbar />

            <section className='pb-[10%]'>
                {params === 'movie' ? <SingleMovie {...singleData} /> : <SingleTv {...singleData}/>}
            </section>

            <Footer />
        </main>
    )
}

export default SingleById
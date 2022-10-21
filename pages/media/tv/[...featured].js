import {Navbar, Sidebar, TvMovieCards, Footer} from '../../../components'
import { useUiContext } from '../../../context/ui_context';
import axios from 'axios'
import Link from 'next/link';
import {FiArrowLeftCircle, FiArrowRightCircle} from 'react-icons/fi'

export const getServerSideProps = async({params}) => {
    const baseURL = `http://localhost:3001/api/v1/movies`
    const response = await axios.get(`${baseURL}/featured/tv/${params.featured[0]}/${params.featured[1]}`)
    return {
        props: {
            currentPage: params.featured[1],
            currentType: params.featured[0],
            data: response.data
        }
    }
}

const TvFeatured = ({data, currentPage, currentType}) => {

    if(typeof data === 'undefined') {
        return <h1>Loading ....</h1>
    }
    const {openSidebar} = useUiContext()
    const nextPage = String(Number(currentPage) + 1)
    const prevPage = String(Number(currentPage) - 1)

    return (
        <main className='relative h-fit min-h-[100vh]'>
            {openSidebar ? <Sidebar /> : null}
            <Navbar />
            
            <section className='pt-[10%]'>
                <TvMovieCards data={data} urlPath="tv" />
            </section>

            <section className='flex gap-x-10 w-[90%] mx-auto justify-center items-center pt-[3%] pb-[15%]'>
                {Number(currentPage) > 1 ? <Link href={`/media/tv/${currentType}/${prevPage}`}><FiArrowLeftCircle className='stroke-silver hover:stroke-crayola duration-200' size={40} /></Link> : null}
                <Link href={`/media/tv/${currentType}/${nextPage}`}><FiArrowRightCircle className='stroke-silver hover:stroke-crayola duration-200' size={40} /></Link>
            </section>

            <Footer />
        </main>
    )
}

export default TvFeatured
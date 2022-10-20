import axios from 'axios'
import { Navbar, SearchCards, Sidebar, Footer } from '../../components'
import { useUiContext } from '../../context/ui_context'
import Link from 'next/link'
import { FiArrowRightCircle, FiArrowLeftCircle} from 'react-icons/fi'

export const getServerSideProps = async({query}) => {
    const {title, page} = query
    const url = `http://localhost:3001/api/v1/movies/search?title=${title}&page=${page}`
    const response = await axios.get(url)
    return {
        props: {
            data: response.data,
            currentPage: page,
            title
        }
    }
}

const QueryPage = ({data, currentPage, title}) => {

    const {results, total_pages} = data
    console.log(total_pages);
    const {openSidebar} = useUiContext()

    const nextPage = Number(currentPage) + 1
    const prevPage = Number(currentPage) - 1

    return (
        <h1>
            {openSidebar ? <Sidebar /> : null}
            <Navbar />
            
            <SearchCards data={results} />

            <section className='flex gap-x-10 w-[90%] mx-auto justify-center items-center pt-[3%] pb-[5%]'>
                {Number(currentPage) > 1 ? <Link href={`/search/query?title=${title}&page=${prevPage}`}><FiArrowLeftCircle className='stroke-silver hover:stroke-crayola duration-200' size={40} /></Link> : null}
                {Number(currentPage) < total_pages  ? <Link href={`/search/query?title=${title}&page=${nextPage}`}><FiArrowRightCircle className='stroke-silver hover:stroke-crayola duration-200' size={40} /></Link> : null}
            </section>

            <Footer />
        </h1>
    )
}

export default QueryPage
///search/query?title=bulls&page=1
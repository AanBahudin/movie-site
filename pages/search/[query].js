// External Packages
import axios from 'axios'
import { FiArrowRightCircle, FiArrowLeftCircle} from 'react-icons/fi'
// Components
import { Navbar, SearchCards, Sidebar, Footer, NoResult } from '../../components'
// Context
import { useUiContext } from '../../context/ui_context'
// Custom Function
import { pageHandler } from '../../utils/helper'
// Next js build in
import Link from 'next/link'

export const getServerSideProps = async({query}) => {
    const {title, page} = query
    const url = `http://localhost:3001/api/v1/movies/search?title=${title}&page=${page}`      //? DATA FETCHING
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

    const {results, total_pages} = data         //? OBJECT DESTURCTION
    const {openSidebar} = useUiContext()        //? USING GLOBAL CONTEXT

    return (
        <main className='h-fit min-h-[100vh] relative'>
            {openSidebar ? <Sidebar /> : null}
            <Navbar />
            
            {results.length === 0 ? <NoResult message={`No item with name : ${title}`} /> : (
                <>
                    <SearchCards data={results} />

                    <section className='flex gap-x-10 w-[90%] mx-auto justify-center items-center pt-[3%] pb-[15%]'>
                        {Number(currentPage) > 1 ? <Link href={`/search/query?title=${title}&page=${pageHandler('prev', currentPage)}`}><FiArrowLeftCircle className='stroke-silver hover:stroke-crayola duration-200' size={40} /></Link> : null}
                        {Number(currentPage) < total_pages  ? <Link href={`/search/query?title=${title}&page=${pageHandler('next', currentPage)}`}><FiArrowRightCircle className='stroke-silver hover:stroke-crayola duration-200' size={40} /></Link> : null}
                    </section>
                </>
            )}


            <Footer />
        </main>
    )
}

export default QueryPage
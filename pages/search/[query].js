import { Navbar, Sidebar } from '../../components'
import { useUiContext } from '../../context/ui_context'

export const getServerSideProps = async(context) => {
    const {title, page} = context.query
    return {
        props: {
            
        }
    }
}

const QueryPage = ({}) => {

    const {openSidebar} = useUiContext()

    return (
        <h1>
            {openSidebar ? <Sidebar /> : null}
            <Navbar />
            Query Page
        </h1>
    )
}

export default QueryPage
///search/query?title=bulls&page=1
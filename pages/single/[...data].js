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

    const {openSidebar} = useUiContext()
    console.log(singleData);
    return (
        <main>
            {openSidebar ? <Sidebar /> : null}
            <Navbar />
            Single movie / tv shows page
        </main>
    )
}

export default SingleById
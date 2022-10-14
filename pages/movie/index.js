import {Navbar, Sidebar} from '../../components'
import axios from 'axios'
import { useUiContext } from '../../context/ui_context'

export const getServerSideProps = async() => {
    const getAllMovie = axios.get()
}

const Movie = () => {

    const {openSidebar} = useUiContext()

    return (
        <main>
            <Navbar />
            {openSidebar ? <Sidebar /> : null}
            Movie Page
        </main>
    )
}

export default Movie
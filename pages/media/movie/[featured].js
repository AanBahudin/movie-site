import {Navbar, Sidebar} from '../../../components'
import { useUiContext } from '../../../context/ui_context';


export const getServerSideProps = async({params}) => {
    console.log(params);
    return {
        props: {

        }
    }
}

const MovieFeatured = () => {

    const {openSidebar} = useUiContext()

    return (
        <main>
            {openSidebar ? <Sidebar /> : null}
            <Navbar />
            MovieFeatured
        </main>
    )
}

export default MovieFeatured
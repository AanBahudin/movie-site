import {Navbar, Sidebar} from '../../../components'
import { useUiContext } from '../../../context/ui_context';


const TvFeatured = () => {

    const {openSidebar} = useUiContext()

    return (
        <main>
            {openSidebar ? <Sidebar /> : null}
            <Navbar />
            TvFeatured
        </main>
    )
}

export default TvFeatured
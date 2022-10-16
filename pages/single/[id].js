import {Navbar, Sidebar} from '../../components'
import { useUiContext } from '../../context/ui_context'

const SingleById = () => {

    const {openSidebar} = useUiContext()

    return (
        <main>
            {openSidebar ? <Sidebar /> : null}
            <Navbar />
            Single movie / tv shows page
        </main>
    )
}

export default SingleById
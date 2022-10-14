import {MdClose} from 'react-icons/md'
import { useUiContext } from '../context/ui_context'

const Sidebar = () => {

    const {handleSidebar} = useUiContext()

    return (
        <main className="bg-slate-500 w-[35%] h-full fixed p-5 right-0 z-20">
            <section className='flex items-center justify-between px-2'>
                <h1 className='text-xl font-roboto'>Category</h1>
                <MdClose onClick={() => handleSidebar(false)} size={30} className='my-auto' />
            </section>

            <section>
                
            </section>
        </main>
    )
}

export default Sidebar
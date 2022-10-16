import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import { useUiContext } from '../context/ui_context'
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link'

const Navbar = () => {

    const {handleSidebar, openSidebar, searchValue, handleSearchValue} = useUiContext()

    return (
        <>
            <main className="w-full bg-[#1C3144] mx-auto p-6 rounded-b">
                <div className="flex items-center justify-around">

                    <Link href='/'><h1 className='text-3xl font-roboto font-semibold'>Movie API</h1></Link>

                    <section className="w-[30%] flex bg-transparent border-white border-[0.1px] rounded">
                        <input className="px-4 py-2 w-full font-roboto rounded outline-none text-[0.8rem] bg-transparent" type="text" placeholder="search movie .." value={searchValue} onChange={e => handleSearchValue(e.target.value)} />
                        <span onClick={() => handleSearchValue("")} className='my-auto px-3'><AiOutlineClose /></span>
                        <span className='my-auto px-3 border-l-[0.2px]'> <AiOutlineSearch /> </span>
                    </section>

                    <GiHamburgerMenu onClick={() => handleSidebar(!openSidebar)} size={30} className='my-auto' />

                </div>
            </main>
        </>
    )
}

export default Navbar
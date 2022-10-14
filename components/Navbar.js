import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import { useUiContext } from '../context/ui_context'
import { navData } from '../utils/helper'

const Navbar = () => {

    const {searchValue, handleSearchValue} = useUiContext()

    return (
        <>
            <main className="w-full bg-[#1C3144] mx-auto p-6 rounded-b">
                <div className="flex justify-between">
                    <section className="w-[30%] flex bg-transparent border-white border-[0.1px] rounded">
                        <input className="px-4 py-2 w-full font-roboto rounded outline-none text-[0.8rem] bg-transparent" type="text" placeholder="search movie .." value={searchValue} onChange={e => handleSearchValue(e.target.value)} />
                        <span onClick={() => handleSearchValue("")} className='my-auto px-3'><AiOutlineClose /></span>
                        <span className='my-auto px-3 border-l-[0.2px]'> <AiOutlineSearch /> </span>
                    </section>

                    <section className="flex gap-x-5 my-auto font-roboto text-md font-semibold">
                        {navData.map((item, id) => {
                            return <h2 key={id} className="cursor-pointer hover:text-slate-400 duration-150">{item.title}</h2>
                        })}
                    </section>
                </div>
            </main>
        </>
    )
}

export default Navbar
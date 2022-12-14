import {MdClose} from 'react-icons/md'
import { useUiContext } from '../context/ui_context'
import Link from 'next/link'
import { sidebarMoviesDataMenu, sidebarTvDataMenu } from '../utils/helper'
import {AiFillCaretRight} from 'react-icons/ai'

const Sidebar = () => {

    const {sidebarMenuStatus, handleSidebarMenuStatus, handleSidebar} = useUiContext()
    const {id, isCollapse} = sidebarMenuStatus
    return (
        <main className="bg-[#1B1E22] w-[20%] h-full fixed p-5 right-0 z-20">
            <section className='flex items-center justify-end py-[4%] px-2'>
                <MdClose onClick={() => handleSidebar(false)} size={30} className='my-auto' />
            </section>

            <section className='flex flex-col px-2 gap-y-14 my-auto pt-[10%]'>
                <div>
                    <h1 onClick={() => handleSidebarMenuStatus(1, !isCollapse)} className='text-2xl cursor-default hover:text-crayola duration-200 flex gap-x-5 font-roboto uppercase'> <AiFillCaretRight className={`${id === 1 && isCollapse ? 'rotate-90' : null} my-auto duration-200`} /> Movies </h1>
                    <div className={`${id === 1 && isCollapse ? 'flex duration-200' : 'hidden duration-200'} font-roboto flex-col pl-14 py-3 gap-y-2`}>
                        {sidebarMoviesDataMenu.map((item, index) => {
                            return (<Link key={index} href={item.path}><span onClick={() => handleSidebar(false)} className='hover:text-crayola duration-200 text-xl opacity-50 cursor-default'>{item.title}</span></Link>)
                        })}
                    </div>
                </div>

                <div>
                    <h1 onClick={() => handleSidebarMenuStatus(2, !isCollapse)} className='text-2xl cursor-default hover:text-crayola duration-200 flex gap-x-5 font-roboto uppercase'> <AiFillCaretRight className={`${id === 2 && isCollapse ? 'rotate-90' : null} my-auto duration-200`} /> Tv Shows </h1>
                    <div className={`${id === 2 && isCollapse ? 'flex' : 'hidden'} font-roboto flex-col pl-14 py-3 gap-y-2`}>
                        {sidebarTvDataMenu.map((item, index) => {
                            return (<Link  key={index} href={item.path}><span onClick={() => handleSidebar(false)} className='hover:text-crayola duration-200 cursor-default text-lg opacity-50'>{item.title}</span></Link>)
                        })}
                    </div>
                </div>
            
            </section>
        </main>
    )
}

export default Sidebar
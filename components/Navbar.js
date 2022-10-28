
import { useUiContext } from '../context/ui_context'
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link'

const Navbar = () => {

    const {handleSidebar, openSidebar } = useUiContext()


    return (
        <>
            <main className="w-full bg-crayola mx-auto p-6 rounded-b">
                <div className="flex items-center text-cultured justify-between px-10">

                    <Link href='/'><h1 className='text-3xl font-montserrat cursor-default'>Movie API</h1></Link>


                    <section className='flex gap-x-8 text-sm items-center text-gunmetal'>
                        <Link href='/media/tv'><a>Tv Show</a></Link>
                        <Link href='/media/movie'><a>Movies</a></Link>
                        <GiHamburgerMenu onClick={() => handleSidebar(!openSidebar)} size={30} className='my-auto fill-white' />
                    </section>


                </div>
            </main>
        </>
    )
}

export default Navbar
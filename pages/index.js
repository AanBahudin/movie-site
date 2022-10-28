import {Navbar, Sidebar, HomeCardContainer, Footer} from '../components'
import { HomeCardContainerData } from '../utils/helper'
import Head from 'next/head'
import axios from 'axios'
import { useUiContext } from '../context/ui_context'
import { useMovieContext } from '../context/movie_context'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

export const getServerSideProps = async() => {
  
  const baseURL = 'http://localhost:3001/api/v1/movies'

  const trendingMovie = await axios.get(`${baseURL}/featured/movie/trending/1`)
  const trendingTv = await axios.get(`${baseURL}/featured/tv/popular/1`)
  return {
    props: {
      trendingMovie: trendingMovie.data,
      trendingTv: trendingTv.data,
    }
  }
}

export default function Home({trendingMovie, trendingTv}) {

  const {openSidebar, handleSearchValue, searchValue} = useUiContext()
  const {findData} = useMovieContext()

  const results = [trendingMovie, trendingTv]
  const searchPath = ['movie', 'tv']

  return (
      <main className='max-h-fit min-h-[100vh] relative'>
        {openSidebar ? <Sidebar /> : null}
        <Navbar />

        <Head>
          <title>Movie API - Search Every Movie & TV Shows</title>
        </Head>

        <section className='pt-[10%] w-full'>
          <section className="w-[50%] mx-auto flex bg-transparent border-white border-[0.1px] rounded">
              <input onKeyPress={e => {
                {e.key === 'Enter' ? findData() : null}
              }} className="px-4 py-4 w-full font-montserrat tracking-widest rounded placeholder:text-white outline-none text-[0.8rem] bg-transparent" type="text" placeholder="search movie .." value={searchValue} onChange={e => handleSearchValue(e.target.value)} />
              <span onClick={() => handleSearchValue("")} className='my-auto px-3'><AiOutlineClose /></span>
              {searchValue.length <= 3 ? null : <span className='my-auto px-3 border-l-[0.2px]'> <AiOutlineSearch onClick={() => findData()} /> </span>}
          </section>
          </section>

        <section className='pb-[10%]'>
          {HomeCardContainerData.map((item, item_id) => {
              return <HomeCardContainer key={item_id} path={item.path} id_name={item.id_name} title={item.title} result={results[item_id]} urlPath={searchPath[item_id]} page={1} />
          })}
        </section>
        
        <Footer />
      </main>
  )}

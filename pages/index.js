import {Navbar, Sidebar, HomeCardContainer} from '../components'
import { HomeCardContainerData } from '../utils/helper'
import Head from 'next/head'
import axios from 'axios'
import { useUiContext } from '../context/ui_context'
import Link from 'next/link'

export const getServerSideProps = async() => {
  const baseURL = 'http://localhost:3001/api/v1/movies'

  const trendingMovie = await axios.get(`${baseURL}/featured/movie/trending`)
  const trendingTv = await axios.get(`${baseURL}/featured/tv/popular`)
  return {
    props: {
      trendingMovie: trendingMovie.data,
      trendingTv: trendingTv.data,
    }
  }
}

export default function Home({trendingMovie, trendingTv}) {

  const {openSidebar} = useUiContext()

  const results = [trendingMovie, trendingTv]
  const searchPath = ['movie', 'tv']

  return (
      <main className=''>
        {openSidebar ? <Sidebar /> : null}
        <Navbar />

        <Head>
          <title>Movie API - Search Every Movie & TV Shows</title>
        </Head>

        <section className='flex font-roboto uppercase text-xl w-[50%] pt-[10%] mx-auto justify-around items-center'>
          <Link href='/media/tv'><a>Tv Show</a></Link> <Link href='/media/movie'><a>Movies</a></Link>
        </section>

        <>
          {HomeCardContainerData.map((item, item_id) => {
              return <HomeCardContainer key={item_id} path={item.path} id_name={item.id_name} title={item.title} result={results[item_id]} urlPath={searchPath[item_id]}  />
          })}
        </>

      </main>
  )}

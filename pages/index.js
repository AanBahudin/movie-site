import {Navbar, Sidebar, HomeCardContainer} from '../components'
import { HomeCardContainerData } from '../utils/helper'
import Head from 'next/head'
import axios from 'axios'
import { useUiContext } from '../context/ui_context'
import Link from 'next/link'

export const getServerSideProps = async() => {
  const baseURL = 'http://localhost:3001/api/v1/movies'

  const trendingMovie = await axios.get(`${baseURL}/featured/movie/trending`)
  const trendingTv = await axios.get(`${baseURL}/featured/tv/trending`)
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

  return (
      <main className=''>
        {openSidebar ? <Sidebar /> : null}
        <Navbar />

        <Head>
          <title>Movie API - Search Every Movie & TV Shows</title>
        </Head>
    
        <section className='w-[50%] font-roboto text-slate-500 text-xl flex justify-around uppercase items-center mx-auto pt-[10%]'>
          <Link className='hover:text-slate-300 duration-200' href={`/media/movie`}> Movies </Link>
          <Link className='hover:text-slate-300 duration-200' href={`/media/tv`}> TV Shows </Link>
        </section>

        <>
          {HomeCardContainerData.map((item, item_id) => {
              return <HomeCardContainer key={item_id} path={item.path} id_name={item.id_name} title={item.title} result={results[item_id]} />
          })}
        </>

      </main>
  )}

import {Navbar, Cards, Sidebar, HomeCardContainer} from '../components'
import { HomeCardContainerData } from '../utils/helper'
import Head from 'next/head'
import axios from 'axios'
import { useUiContext } from '../context/ui_context'

export const getServerSideProps = async() => {
  const baseURL = 'http://localhost:3001/api/v1/movies'

  const trendingMovie = await axios.get(`${baseURL}/trending/movie`)
  const trendingTv = await axios.get(`${baseURL}/trending/tv`)
  const topRatedMovie = await axios.get(`${baseURL}/top_rated/movie`)
  const topRatedTv = await axios.get(`${baseURL}/top_rated/tv`)
  return {
    props: {
      trendingMovie: trendingMovie.data,
      trendingTv: trendingTv.data,
      topRatedMovie: topRatedMovie.data,
      topRatedTv: topRatedTv.data
    }
  }
}

export default function Home({trendingMovie, trendingTv, topRatedMovie, topRatedTv}) {

  const {openSidebar} = useUiContext()

  const results = [trendingMovie, trendingTv, topRatedMovie, topRatedTv]

  return (
      <main className=''>
        <Navbar />
        {openSidebar ? <Sidebar /> : null}

        <Head>
          <title>Movie API - Search Every Movie & TV Shows</title>
        </Head>

        <>
          {HomeCardContainerData.map((item, item_id) => {
              return <HomeCardContainer key={item_id} path={item.path} id_name={item.id_name} title={item.title} result={results[item_id]} />
          })}
        </>

      </main>
  )}

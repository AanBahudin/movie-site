import {Navbar, Cards} from '../components'
import Head from 'next/head'
import axios from 'axios'

export const getServerSideProps = async() => {
  const url = 'http://localhost:3001/api/v1/movies/trending'
  const trendingMovie = await axios.get(`${url}/movie`)
  const trendingTv = await axios.get(`${url}/tv`)

  return {
    props: {
      trendingMovie: trendingMovie.data,
      trendingTv: trendingTv.data
    }
  }
}

export default function Home({trendingMovie, trendingTv}) {

  return (
      <main className=''>
        <Navbar />

        <Head>
          <title>Movie API - Search Every Movie & TV Shows</title>
        </Head>
        <section id='trending-movies' className='pt-[10%]'>
          <h2 className='text-2xl ml-5 font-semibold font-roboto pl-3 border-l-2 border-slate-500'>Trending Movie</h2>
          <Cards data={trendingMovie} path="trending-movie"/>
        </section>

        <section id='trending-tv' className='pt-[10%]'>
          <h2 className='text-2xl ml-5 font-semibold font-roboto pl-3 border-l-2 border-slate-500'>Trending Tv Show</h2>
          <Cards data={trendingTv} path="trending-tv" />
        </section>


      </main>
  )}

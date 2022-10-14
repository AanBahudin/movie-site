import {Navbar, Cards} from '../components'
import Head from 'next/head'
import axios from 'axios'

export const getServerSideProps = async() => {
  const trendingURL = 'http://localhost:3001/api/v1/movies/trending'
  const top_ratedURL = 'http://localhost:3001/api/v1/movies/top_rated'

  const trendingMovie = await axios.get(`${trendingURL}/movie`)
  const trendingTv = await axios.get(`${trendingURL}/tv`)
  const topRatedMovie = await axios.get(`${top_ratedURL}/movie`)
  const topRatedTv = await axios.get(`${top_ratedURL}/tv`)

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

        <section id='top-rated-movie' className='pt-[10%]'>
          <h2 className='text-2xl ml-5 font-semibold font-roboto pl-3 border-l-2 border-slate-500'>Top Rated Movie</h2>
          <Cards data={topRatedMovie} path="trending-tv" />
        </section>

        <section id='top-rated-tv' className='pt-[10%]'>
          <h2 className='text-2xl ml-5 font-semibold font-roboto pl-3 border-l-2 border-slate-500'>Top Rated Tv</h2>
          <Cards data={topRatedTv} path="trending-tv" />
        </section>

      </main>
  )}

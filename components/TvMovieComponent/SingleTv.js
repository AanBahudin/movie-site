import {Production_Company, Details} from '../../components'
import Link from 'next/link'
import { handleImage, handleTime } from '../../utils/helper'

const SingleTv = ({backdrop_path, created_by, episode_run_time, first_air_date, genres, languages, last_air_date, last_episode_to_air, name, next_episode_to_air, number_of_episodes, number_of_seasons, origin_country, overview, popularity, poster_path, production_companies, seasons, status, tagline, type, vote_average, vote_count, in_production, id}) => {

  const data = {in_production, first_air_date: handleTime(first_air_date), last_air_date: handleTime(last_air_date), origin_country, id, origin_country, episode_run_time, type, status, vote_average: Number(vote_average).toFixed(1), number_of_episodes, popularity, vote_count: Number(vote_count).toFixed(), number_of_seasons, languages}
  

  return (
    <main className="py-[7%] w-[90%] mx-auto">
      <img className='w-9/12 mx-auto rounded' src={handleImage(backdrop_path)} />


      <Details overview={overview} genres={genres} data={data} tagline={tagline} poster={poster_path} title={name} />

      <section className="w-9/12 mx-auto py-[5%]">
        <div className='flex py-[2%] justify-start flex-wrap items-start gap-x-14 w-full'>
          {seasons.map(item => {
              return (
                <Link key={item.season_number} href={`/season/${id}/${item.season_number}`}><article key={item.id} className="w-32"> <img className='w-full my-auto rounded' alt='Failed to Load'  src={handleImage(item.poster_path)} />
                    <h1 className="text-center font-roboto truncate text-silver italic pt-5">{item.name}</h1>
                  </article></Link>
              )
          })}
        </div>
      </section>

      <section className='w-9/12 mx-auto'>
            <article className='grid grid-cols-2 gap-x-10'>
              <img className="my-auto" src={handleImage(last_episode_to_air.still_path)} />

              <div className='font-roboto flex flex-col items-center justify-center'>
                {next_episode_to_air ? <h1 className='text-crayola'>Next episode {handleTime(next_episode_to_air.air_date)}</h1> : null}

                <h1 className='text-center text-3xl'>Last Episode Airing</h1>
                
                <article className='text-center py-5'>
                  <h1 className='text-sm py-4'>{last_episode_to_air.overview}</h1>
                  <h1 className='text-sm text-silver'>Season {last_episode_to_air.season_number} - Episode {last_episode_to_air.episode_number} - {last_episode_to_air.runtime} minutes</h1>
                </article>
              </div>
            </article>
      </section>

      <section className='w-9/12 py-[5%] mx-auto'>
        <h1 className='text-center text-xl font-roboto'>Created By</h1>
        <div className='flex justify-center items-strech flex-wrap'>
          {created_by.map(item => {
            return (
              <article className='w-[12%] mx-auto py-[4%]' key={item.id}>
                <img className="w-full rounded py-4" src={handleImage(item.profile_path)} />
                <h1 className='text-center'>{item.name}</h1>
              </article>
            )
          })}
        </div>
      </section>


      <Production_Company data={production_companies} />
    </main>
  )
}

export default SingleTv
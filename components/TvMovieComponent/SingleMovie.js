import {Belongs_To_Collection, Production_Company, Details} from '../../components'

const SingleMovie = ({poster_path, backdrop_path, title, original_name, tagline, overview, genres=[], release_date, imdb_id, originial_language, belongs_to_collection, id, popularity, production_companies=[], revenue, runtime, vote_average, vote_count, status, budget}) => {

    let dollars = Intl.NumberFormat("en-US", {style: "currency",currency: "USD",});
    const minute = runtime % 60;
    const hour = (runtime - minute) / 60
    const duration = `${hour} ${hour > 1 ? 'hours' : 'hour'} ${minute} minutes`

    const data = {release_date, popularity, status, vote_average:  Number(vote_average).toFixed(1), duration, id, vote_count: Number(vote_count).toFixed() + ' votes', budget: dollars.format(budget), revenue: dollars.format(revenue)}

  return (
    <>
    <main className='py-[7%] w-[90%] mx-auto'>

        <img className='w-9/12 mx-auto rounded' src={`https://image.tmdb.org/t/p/original${backdrop_path}`} />
        <Details overview={overview} poster={poster_path} title={title || original_name} tagline={tagline || '-'} genres={genres} data={data} />

        {typeof belongs_to_collection === 'object' ? <Belongs_To_Collection {...belongs_to_collection} /> : null} 

        <Production_Company data={production_companies}/>
    </main>
</>
  )
}

export default SingleMovie
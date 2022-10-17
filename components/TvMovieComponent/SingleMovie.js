import {Belongs_To_Collection} from '../../components'

const SingleMovie = ({poster_path, backdrop_path, title, original_name, tagline, overview, genres=[], release_date, imdb_id, originial_language, belongs_to_collection, id, popularity, production_companies=[], revenue, runtime, vote_average, vote_count, status, budget}) => {

    let dollars = Intl.NumberFormat("en-US", {style: "currency",currency: "USD",});
    const minute = runtime % 60;
    const hour = (runtime - minute) / 60
    const duration = `${hour} ${hour > 1 ? 'hours' : 'hour'} ${minute} minutes`

  return (
    <>
    <main className='py-[7%] w-[90%] mx-auto'>

        <img className='w-9/12 mx-auto rounded' src={`https://image.tmdb.org/t/p/original${backdrop_path}`} />

        <section className='grid grid-cols-2 py-[7%] w-9/12 mx-auto'>
            <div className='flex justify-center items-center flex-col font-roboto'>
                <img className='w-72 pb-10' src={`https://image.tmdb.org/t/p/w500${poster_path || backdrop_path}`} />
                <h1 className='text-2xl text-cultured'>{title || original_name}</h1>
                <p className='italic text-center text-silver'>" {tagline || '-'} "</p>
            </div>

            <div className='flex items-center flex-col font-roboto'>
                <h4 className='text-justify text-cultured'>{overview}</h4>
                <article className='flex flex-wrap gap-x-7 w-10/12 mx-auto py-[10%] justify-evenly items-center'>
                    {genres.map(item => {
                        return <h1 className='uppercase text-silver hover:text-crayola duration-200 cursor-default' key={item.id}>{item.name}</h1>
                    })}
                </article>

                <article className='flex flex-col gap-y-2'>
                    <h1 className='grid italic grid-cols-2 gap-x-5'>
                        Released Date
                        <span className='text-silver'>:    {release_date}</span>
                    </h1>
                    <h1 className='grid grid-cols-2 gap-x-5'>
                        Popularity
                        <span className='text-silver'>:    {popularity || "-"}</span>
                    </h1>

                    <h1 className='grid grid-cols-2 gap-x-5'>
                        Status
                        <span className='text-silver'>:    {status || "-"}</span>
                    </h1>
                    <h1 className='grid grid-cols-2 gap-x-5'>
                        Vote Average
                        <span className='text-silver'>:    {Number(vote_average).toFixed(1) || "-"}</span>
                    </h1>
                    <h1 className='grid grid-cols-2 gap-x-5'>
                        Duration
                        <span className='text-silver'>:    { duration || "-"}</span>
                    </h1>
                    <h1 className='grid grid-cols-2 gap-x-5'>
                        imdb-id / id
                        <span className='text-silver'>:    {`${imdb_id} / ${id}` || "-"}</span>
                    </h1>
                    <h1 className='grid grid-cols-2 gap-x-5'>
                        Vote Count
                        <span className='text-silver'>:    {Number(vote_count).toFixed() + ' votes' || "-"}</span>
                    </h1>
                    <h1 className='grid grid-cols-2 gap-x-5'>
                        Budget
                        <span className='text-silver'>:    {dollars.format(budget) || "-"}</span>
                    </h1>
                    <h1 className='grid grid-cols-2 gap-x-5'>
                        Revenue
                        <span className='text-silver'>:    {dollars.format(revenue) || "-"}</span>
                    </h1>
                </article>
            </div>
        </section>

        {typeof belongs_to_collection === 'object' ? <Belongs_To_Collection {...belongs_to_collection} /> : null} 

        <section className='w-9/12 mx-auto'>
            <div className='flex py-[2%] justify-center items-center w-full'>
                {production_companies.map(item => {
                    return <article key={item.id} className="w-full "> <img className='w-32 m-auto' alt='Failed to Load'  src={`https://image.tmdb.org/t/p/original${item.logo_path}`} /></article>
                })}
            </div>
        </section>

    </main>
</>
  )
}

export default SingleMovie
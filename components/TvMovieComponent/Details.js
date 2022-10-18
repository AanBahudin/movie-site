

const Details = ({overview, genres, data, title, poster, tagline}) => {
  return (
    <section className='grid grid-cols-2 py-[7%] w-9/12 mx-auto'>
        <div className='flex justify-center items-center flex-col font-roboto'>
                <img className='w-72 pb-10 mx-auto' src={`https://image.tmdb.org/t/p/w500${poster}`} />
                <h1 className='text-2xl text-cultured'>{title}</h1>
                <p className='italic text-center py-5 text-silver'>" {tagline || '-'} "</p>
        </div>

        <div className='flex items-center flex-col font-roboto'>
            <h4 className='text-justify text-cultured'>{overview}</h4>

            <article className='flex flex-wrap gap-x-7 w-10/12 mx-auto py-[10%] justify-evenly items-center'>
                {genres.map(item => {
                    return <h1 className='uppercase text-silver hover:text-crayola duration-200 cursor-default' key={item.id}>{item.name}</h1>
                })}
            </article>

            <article className='flex flex-col gap-y-2'>
                {Object.keys(data).map((item, index) => {
                return (
                    <h1 key={index} className='grid italic grid-cols-2 gap-x-5'>
                        {item.replace(/_/gi, ' ')}
                        {data[item] ? <span className='text-silver'>:    {data[item]}</span> : <span className='text-silver'>:    -</span>}

                    </h1>
                )
                })}
            </article>
        </div>
    </section>
  )
}

export default Details
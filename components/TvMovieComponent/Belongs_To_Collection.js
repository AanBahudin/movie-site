

const Belongs_To_Collection = ({id, name, poster_path, backdrop_path}) => {
  return (
    <main className='w-9/12 mx-auto py-[5%]'>
        <section className="flex w-full justify-around">
            <img className="w-[40%] mx-auto" src={`https://image.tmdb.org/t/p/original${poster_path}`} />
        <img className="w-[70%] mx-auto rounded" src={`https://image.tmdb.org/t/p/original${backdrop_path}`} />
        </section>
    </main>
  )
}

export default Belongs_To_Collection
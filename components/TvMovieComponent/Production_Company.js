

const Production_Company = ({data}) => {
  return (
    <section className='w-9/12 mx-auto'>
        <div className='flex py-[2%] justify-center items-center w-full'>
            {data.map(item => {
                return <article key={item.id} className="w-full "> <img className='w-32 m-auto' alt='Failed to Load'  src={`https://image.tmdb.org/t/p/original${item.logo_path}`} /></article>
            })}
        </div>
    </section>
  )
}

export default Production_Company
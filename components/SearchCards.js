
import {SearchCard} from '../components'

const SearchCards = ({data=[]}) => {
  return (
    <main className='py-4 pt-[10%]'>
        <section className='flex flex-wrap justify-around'>
            {data.map((item, index) => {
                return <SearchCard {...item} />
            })}
        </section>
    </main>
  )
}

export default SearchCards
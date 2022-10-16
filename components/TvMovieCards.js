import {TvMovieCard} from '../components'

const TvMovieCards = ({data=[]}) => {
  return (
    <main className="py-4">
      <section className="flex flex-wrap justify-around">
          {data.results.map((item, id) => {
              return <TvMovieCard key={id} {...item} />
          })
          }
      </section>
    </main>
  )
}

export default TvMovieCards
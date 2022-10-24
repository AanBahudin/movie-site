import { handleImage } from "../../utils/helper"
import Link from 'next/link'

const Belongs_To_Collection = ({id, name, poster_path, backdrop_path}) => {

  return (
      <main className='w-9/12 mx-auto py-[5%]'>
          <section className="flex w-full justify-around">
              <Link href={`/collection/${id}`}><img className="w-[40%] mx-auto" src={handleImage(poster_path)} /></Link>
              <img className="w-[70%] mx-auto rounded" src={handleImage(backdrop_path)} />
          </section>
      </main>
  )
}

export default Belongs_To_Collection
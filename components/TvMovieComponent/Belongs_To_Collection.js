import { handleImage } from "../../utils/helper"

const Belongs_To_Collection = ({id, name, poster_path, backdrop_path}) => {

  return (
    <main className='w-9/12 mx-auto py-[5%]'>
        <section className="flex w-full justify-around">
            <img className="w-[40%] mx-auto" src={handleImage(poster_path)} />
        <img className="w-[70%] mx-auto rounded" src={handleImage(backdrop_path)} />
        </section>
    </main>
  )
}

export default Belongs_To_Collection
import Link from "next/link"
import {handleImage} from '../utils/helper'

const Card = ({title, name, poster_path, id, vote_average, backdrop_path, urlPath}) => {

    return (

        <Link href={`/single/${urlPath}/${id}`}>
            <main className="flex flex-col p-5 group relative hover:scale-105 duration-200 group w-52">
                {/* <div className="absolute hover:absolute z-20 bg-black/20 h-full w-full"></div> */}
                <img className="w-full rounded mx-auto" src={handleImage(poster_path)} />

                <h2 className="flex justify-between gap-x-4 text-sm pt-3 font-roboto">
                    <span className="truncate text-cultured cursor-default group-hover:text-crayola duration-200">{title || name}</span>
                    <span className="text-silver cursor-default group-hover:text-cultured duration-200">{Number(vote_average).toFixed(1)}</span>
                </h2>
            </main>
        </Link>
    )
}

export default Card
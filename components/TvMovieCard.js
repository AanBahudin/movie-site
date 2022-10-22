import Link from "next/link"
import { handleImage } from "../utils/helper"

const TvMovieCard = ({title, name, poster_path, id, vote_average, urlPath}) => {
    return (
        <Link href={`/single/${urlPath}/${id}`}>
            <main className="flex flex-col p-5 group relative w-56">
                {/* <div className="absolute hover:absolute z-20 bg-black/20 h-full w-full"></div> */}
                <img className="w-full rounded mx-auto" src={handleImage(poster_path)} />

                <h2 className="flex justify-between gap-x-4 text-sm pt-3 font-roboto">
                    <span className="truncate">{title || name}</span>
                    <span>{Number(vote_average).toFixed(1)}</span>
                </h2>
            </main>
        </Link>
    )
}

export default TvMovieCard
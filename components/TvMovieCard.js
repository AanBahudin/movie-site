import Link from "next/link"


const TvMovieCard = ({title, name, poster_path, id, vote_average}) => {
    return (
        <Link href={`/movie/${id}`}>
            <main className="flex flex-col p-5 group relative w-56">
                {/* <div className="absolute hover:absolute z-20 bg-black/20 h-full w-full"></div> */}
                <img className="w-full rounded mx-auto" src={`https://image.tmdb.org/t/p/w500${poster_path}`} />

                <h2 className="flex justify-between gap-x-4 text-sm pt-3 font-roboto">
                    <span className="truncate">{title || name}</span>
                    <span>{Number(vote_average).toFixed(1)}</span>
                </h2>
            </main>
        </Link>
    )
}

export default TvMovieCard
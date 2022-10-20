
import Link from "next/link";

const SearchCard = ({poster_path, title, name, vote_average, media_type, id}) => {

  return (
    <Link href={`/single/${media_type}/${id}`}>
        <main className="flex flex-col p-5 group relative hover:scale-105 duration-200 group w-52">
            {/* <div className="absolute hover:absolute z-20 bg-black/20 h-full w-full"></div> */}
            <img className="w-full rounded mx-auto" src={`https://image.tmdb.org/t/p/w500${poster_path}`} />

            <h2 className="flex justify-between gap-x-4 text-sm pt-3 font-roboto">
                <span className="truncate text-cultured cursor-default group-hover:text-crayola duration-200">{title || name}</span>
                <span className="text-silver cursor-default group-hover:text-cultured duration-200">{Number(vote_average).toFixed(1)}</span>
            </h2>
        </main>
    </Link>
  )
}

export default SearchCard
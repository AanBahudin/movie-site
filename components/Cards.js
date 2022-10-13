import Card from "./Card"
import Link from 'next/link'

const Cards = ({data = [], path}) => {
    return (
        <main className="py-4">
            <section className="flex flex-wrap justify-around">
                {typeof data === 'undefined' ? '-' : (
                    data.results.slice(0,12).map((item, id) => {
                        return <Card key={id} {...item} />
                    })
                )}
            </section>

            <Link href={`/category/${path}`}>
                <h1 className="text-center font-roboto text-md hover:text-slate-500 duration-150 cursor-pointer pt-10 ">See More ...</h1>
            </Link>
        </main>
    )
}

export default Cards
import Card from "./Card"
import Link from 'next/link'
import Loading from "./Loading"

const Cards = ({data = [], path, urlPath}) => {

    if(typeof data === 'undefined') {
        return <Loading />
    }

    return (
        <main className="py-4">
            <section className="flex flex-wrap justify-around">
                {data.results.slice(0,12).map((item, id) => {
                    return <Card key={id} {...item} urlPath={urlPath} />
                })
                }
            </section>

            <Link href={path}>
                <h1 className="text-center font-roboto text-md hover:text-slate-500 duration-150 cursor-pointer pt-10 ">See More ...</h1>
            </Link>
        </main>
    )
}

export default Cards
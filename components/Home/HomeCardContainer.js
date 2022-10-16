import {Cards} from '../../components'

const HomeCardContainer = ({id_name, title, path, result, urlPath}) => {

    return (
        <section id={id_name} className='pt-[10%]'>
            <h2 className='text-2xl ml-5 font-semibold font-roboto pl-3 border-l-2 border-slate-500'>{title}</h2>
            <Cards data={result} path={path} urlPath={urlPath}/>
      </section>
    )
}

export default HomeCardContainer
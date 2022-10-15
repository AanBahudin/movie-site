import {Navbar, Sidebar, HomeCardContainer} from '../../components'
import {featuredCardContainerData} from '../../utils/helper'
import { useUiContext } from '../../context/ui_context'
import axios from 'axios'

export const getServerSideProps = async({params}) => {
    console.log(params.type);
    const baseURL = 'http://localhost:3001/api/v1/movies'

    const trending = await axios.get(`${baseURL}/featured/${params.type}/trending`)
    const topRated = await axios.get(`${baseURL}/featured/${params.type}/top_rated`)
    const upcComing = await axios.get(`${baseURL}/featured/${params.type}/upcoming`)
    const popular = await axios.get(`${baseURL}/featured/${params.type}/popular`)
    const nowPlaying = await axios.get(`${baseURL}/featured/${params.type}/now_playing`)

    console.log(topRated);

    return {
        props: {
            trending: trending.data,
            topRated: topRated.data,
            upComing: upcComing.data,
            popular: popular.data,
            nowPlaying: nowPlaying.data,
        }
    }
}

const MediaType = ({trending, topRated, upComing, popular, nowPlaying}) => {

    const {openSidebar} = useUiContext()
    const fetchResult = [trending, topRated, upComing, popular, nowPlaying]

    return (
        <main>
            {openSidebar ? <Sidebar /> : null}
            <Navbar />
            <>
                {featuredCardContainerData.map((item, id_number) => {
                return <HomeCardContainer key={id_number} path={item.path} title={item.title} result={fetchResult[id_number]} id_name={item.id_name}/>
                })}
            </>
        </main>
    )
}

export default MediaType
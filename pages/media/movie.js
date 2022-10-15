import {Navbar, Sidebar, HomeCardContainer} from '../../components'
import {featuredMovieCardContainerData} from '../../utils/helper'
import { useUiContext } from '../../context/ui_context'
import axios from 'axios'

export const getServerSideProps = async() => {
    const baseURL = 'http://localhost:3001/api/v1/movies'

    const trending = await axios.get(`${baseURL}/featured/movie/trending`)
    const topRated = await axios.get(`${baseURL}/featured/movie/top_rated`)
    const upcComing = await axios.get(`${baseURL}/featured/movie/upcoming`)
    const popular = await axios.get(`${baseURL}/featured/movie/popular`)
    const nowPlaying = await axios.get(`${baseURL}/featured/movie/now_playing`)

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

const MediaMovie = ({trending, topRated, upComing, popular, nowPlaying}) => {

    const {openSidebar} = useUiContext()
    const fetchResult = [trending, topRated, upComing, popular, nowPlaying]

    return (
        <main>
            {openSidebar ? <Sidebar /> : null}
            <Navbar />
            <>
                {featuredMovieCardContainerData.map((item, id_number) => {
                return <HomeCardContainer key={id_number} path={item.movie_path} title={item.movie_title} result={fetchResult[id_number]} id_name={item.id_name_movie}/>
                })}
            </>
        </main>
    )
}

export default MediaMovie
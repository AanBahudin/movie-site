import {Navbar, Sidebar, HomeCardContainer} from '../../../components'
import {featuredTvCardContainerData} from '../../../utils/helper'
import { useUiContext } from '../../../context/ui_context'
import axios from 'axios'

export const getServerSideProps = async() => {
    const baseURL = 'http://localhost:3001/api/v1/movies'

    const topRated = await axios.get(`${baseURL}/featured/tv/top_rated`)
    const onTheAir = await axios.get(`${baseURL}/featured/tv/on_the_air`)
    const popular = await axios.get(`${baseURL}/featured/tv/popular`)
    const airingToday = await axios.get(`${baseURL}/featured/tv/airing_today`)

    return {
        props: {
            topRated: topRated.data,
            onTheAir: onTheAir.data,
            popular: popular.data,
            airingToday: airingToday.data,
        }
    }
}

const MediaTv = ({topRated, onTheAir, popular, airingToday}) => {

    const {openSidebar} = useUiContext()
    const fetchResult = [topRated, onTheAir, popular, airingToday]

    return (
        <main>
            {openSidebar ? <Sidebar /> : null}
            <Navbar />
            <>
                {featuredTvCardContainerData.map((item, id_number) => {
                return <HomeCardContainer key={id_number} path={item.tv_path} title={item.tv_title} result={fetchResult[id_number]} id_name={item.id_name_tv}/>
                })}
            </>
        </main>
    )
}

export default MediaTv
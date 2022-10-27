import moment from "moment"

export const mediaLink = [{title:'Movies',path:'/media/movie'},{title:'Tv Shows',path:'/media/tv'},]
export const HomeCardContainerData = [{id_name:'trending-movies',path:'movie/trending',title:'Trending Movies'},{id_name:'popular-tv',path:'tv/popular',title:'Popular Tv Shows'},]
export const featuredMovieCardContainerData = [{id_name_movie:'trending-movies',movie_path:'movie/trending',movie_title:'Trending Movie',},{id_name_movie:'top-rated-movies',movie_path:'movie/top_rated',movie_title:'Top Rated Movie',},{id_name_movie:'upcoming-movies',movie_path:'movie/upcoming',movie_title:'Upcoming Movie',},{id_name_movie:'popular-movies',movie_path:'movie/popular',movie_title:'Popular Movie',},{id_name_movie:'now-playing-movies',movie_path:'movie/now_playing',movie_title:'Now Playing Movie',},]
export const featuredTvCardContainerData = [{id_name:'top-rated-tv',tv_path:'tv/top_rated',tv_title:'Top Rated TV'},{id_name:'on-air-tv',tv_path:'tv/on_the_air',tv_title:'Tv On Air'},{id_name:'popular-tv',tv_path:'tv/popular',tv_title:'Tv On Air'},{id_name:'aring-today-tv',tv_path:'tv/airing_today',tv_title:'Ariring Today'},]
export const sidebarTvDataMenu = [{title:'Top Rated',path:'/media/tv/top_rated/1'},{title:'On The Air',path:'/media/tv/on_the_air/1'},{title:'Popular',path:'/media/tv/popular/1'},{title:'Airing Today',path:'/media/tv/airing_today/1'},]
export const sidebarMoviesDataMenu = [{title:'Trending',path:'/media/movie/trending/1'},{title:'Top Rated',path:'/media/movie/top_rated/1'},{title:'Popular',path:'/media/movie/popular/1'},{title:'Upcoming',path:'/media/movie/upcoming/1'},{title:'Now Playing',path:'/media/movie/now_playing/1'},]

export const handleImage = (path) => {
    return `https://image.tmdb.org/t/p/original${path}`
}

export const pageHandler = (type, value) => {
    if (type === 'next') {
        let nextPage = Number(value) + 1
        return nextPage
    } else {
        let prevPage = Number(value) - 1
        return prevPage
    }
}

export const handleTime = (time) => {
    return moment(time, "YYYYMMDD").fromNow();
}


interface requests {
    PopularMovies: string,
    TrendingNow: string
}

export const publicRequests : requests = {
    PopularMovies : `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_IMDB}&language=en-US&page=1`,
    TrendingNow: `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_IMDB}`
}
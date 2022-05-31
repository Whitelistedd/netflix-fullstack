import axios from 'axios'
import React from 'react'
import { publicRequests } from '../requests'

interface Response {
    data: {
      results:
        [
          {
            title: string,
            backdrop_path: string,
            overview: string
          }
        ]
    }
}

const getGenre = async (id : number,title : string) => {
  const TrendingNowResponse : Response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_IMDB}&language=en-US&with_genres=${id}`)
  return {title: title,data: TrendingNowResponse.data.results}
}

export const getAllMovies = async (type : string | number) => {
  if (type === "Latest") {
    const getPopularMovies = async () => {
      const PopularMoviesResponse : Response = await axios.get(publicRequests.PopularMovies)
      return {title: "Popular",data: PopularMoviesResponse.data.results}
    }

    const getTrendingMovies = async () => {
      const TrendingNowResponse : Response = await axios.get(publicRequests.TrendingNow)
      return {title: "Trending",data: TrendingNowResponse.data.results}
    }

    const popular = await getPopularMovies();
    const trending = await getTrendingMovies();
    const response = [popular,trending]
    return response
  } else if (type === 28) {
    const response = await getGenre(type,"Action")
    return [response]
  } else if (type === 16) {
    const response = await getGenre(type,"Animation")
    return [response]
  } else if (type === 27) {
    const response = await getGenre(type,"Horror")
    return [response]
  }

}

import { useEffect, useState } from "react";
import { fetchMoviesAppApi } from "../../../../../functions/fetch";
import { recent } from "../../../../SearchResult/data/recent";
import Cards from "../Cards/Cards";

const Recent = () => {
    const [recentMovies,getRecentMovies] = useState<any[]>([]);
    const [recentSeries,getRecentSeries] = useState<any[]>([]);
    const {api,options} = recent;
    useEffect(() => {
        fetchMoviesAppApi(api.movies,getRecentMovies,options);
        fetchMoviesAppApi(api.series,getRecentSeries,options);
      },[api.movies,api.series,options])
    return(
        <>
            <Cards
                cards={[...recentMovies]}
                title='Recent moies'
            />
            <Cards
                cards={[...recentSeries]}
                title='Recent series'
            />
        </>
    )
}
export default Recent;
import { useEffect, useState } from "react";
import { fetchNetflix } from "../../../../../functions/fetch";
import { netflix } from "../../../../SearchResult/data/netflix";
import Cards from "../Cards/Cards";
import { Wrapper } from "./styles";

const Netflix = () => {
    const {api,options} = netflix;
    const [movies,updateMovies] = useState<any[]>([]);
    const [series,updateSeries] = useState<any[]>([]);
    useEffect(() => {
      fetchNetflix(api.movie,updateMovies,options);
      fetchNetflix(api.tv,updateSeries,options);
    },[api.movie,api.tv,options])
    return(
        <Wrapper>
            <h2>Netflix Top 10</h2>
            <div>
                <Cards
                    cards={[...series]}
                    title='Top series'
                />
                <Cards
                    cards={[...movies]}
                    title='Top movies'
                />
            </div>
        </Wrapper>
    )
}
export default Netflix;
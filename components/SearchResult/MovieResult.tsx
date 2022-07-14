import Result from "../Cards/Movie/Result/Result";
import Search from "../Cards/Movie/Search/Search/Search";
import { ResultWrapper } from "../Movies/Card/styles";
import { IntMovieResult } from "./interface";

const MovieResult = ({result}:IntMovieResult) => {
    return(
        <>
            <section>
                {result.slice(0,1).map(({id,original_language,overview,poster_path,release_date,title,vote_average}) =>
                    <Search
                        description={overview}
                        image={`https://image.tmdb.org/t/p/original/${poster_path}`}
                        rating={vote_average}
                        release={release_date}
                        title={title}
                        lang={original_language}
                        path={`/movie/${id}`}
                        key={id}
                    />
                )}
            </section>
            <ResultWrapper>
                {result.slice(1).map(({id,poster_path,title}) =>
                    <Result
                        image={`https://image.tmdb.org/t/p/original/${poster_path}`}
                        key={id}
                        path={`/movie/${id}`}
                        title={title}
                    /> 
                )}
            </ResultWrapper>
        </>
    )
}
export default MovieResult;
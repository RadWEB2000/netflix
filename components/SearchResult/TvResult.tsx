import Result from "../Cards/Movie/Result/Result"
import Search from "../Cards/Movie/Search/Search/Search"
import { ResultWrapper } from "../Movies/Card/styles"
import { IntTvResult } from "./interface"
const TvResult = ({result}:IntTvResult) => {
    return(
        <>
            <section>
                {result.slice(0,1).map(({first_air_date,id,original_language,overview,name,poster_path,vote_average}) =>
                    <Search
                        description={overview}
                        image={`https://image.tmdb.org/t/p/original/${poster_path}`}
                        rating={vote_average}
                        release={first_air_date}
                        title={name}
                        lang={original_language}
                        path=''
                        key={id}
                    />
                )}
            </section>
             <ResultWrapper>
                {result.slice(1).map(({id,poster_path,name}) =>
                    <Result
                        image={`https://image.tmdb.org/t/p/original/${poster_path}`}
                        key={id}
                        path="#"
                        title={name}
                    /> 
                )}
            </ResultWrapper>
        </>
    )
}
export default TvResult;
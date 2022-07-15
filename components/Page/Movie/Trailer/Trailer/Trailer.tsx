import { data } from "../../../../SearchResult/data/data";
import Big from "../Card/Big/Big"
import Small from "../Card/Small/Small"
import { IntTrailer } from "../interface";
import { Wrapper } from "./styles";

const Trailer = ({trailers}:IntTrailer) => {
    return(
        <>
            {
                trailers &&
                <Wrapper>
                    <ul className="big">
                        {trailers.slice(0,2).map(({key,name,site}) =>
                            <>
                                {site == 'YouTube' &&
                                    <Big
                                        image={`${data.youtube}${key}`}
                                        name={name}
                                    />
                                }
                            </>
                        )}
                    </ul>
                    <ul className="small">
                        {trailers.slice(2,10).map(({key,name,site}) =>
                            <>
                                {site == 'YouTube' &&
                                    <Small
                                        image={`${data.youtube}${key}`}
                                        name={name}
                                    />
                                }
                            </>
                        )}
                    </ul>
                </Wrapper>
            }
        </>
    )
}
export default Trailer;
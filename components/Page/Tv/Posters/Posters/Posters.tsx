import { data } from "../../../../SearchResult/data/data"
import { IntPosters } from "../interface"
import Poster from "../Poster/Poster"
import { Wrapper } from "./styles"
const Posters = ({posters}:IntPosters) => {
    return(
        <Wrapper>
            <ul>
                {posters.slice(0,12).map(({file_path},key) => 
                    <Poster
                        image={`${data.tmdb.image}${file_path}`}
                        key={key}
                    />
                )}
            </ul>
        </Wrapper>
    )
}
export default Posters;
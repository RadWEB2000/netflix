import Content from "../Content/Content"
import { IntSearch } from "../interface";
import Poster from "../Poster/Poster"
import { Wrapper } from "./styles";
const Search = ({description,image,lang,path,rating,release,title}:IntSearch) => {
    return(
        <Wrapper>
            <Poster
                image={image}
                title={title}
            />
            <Content
                description={description}
                lang={lang}
                path={path}
                rating={rating}
                release={release}
                title={title}
            />
        </Wrapper>
    )
}
export default Search;
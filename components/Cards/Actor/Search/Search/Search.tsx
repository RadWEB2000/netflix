import Content from "../Content/Content"
import { IntSearch } from "../interface"
import Poster from "../Poster/Poster"
import { Wrapper } from "./styles"
const Search = ({image,job,path,title,works}:IntSearch) => {
    return(
        <Wrapper>
            <Poster
                image={image}
                title={title}
            />
            <Content
                job={job}
                path={path}
                title={title}
                works={[...works]}
            />
        </Wrapper>
    )
}
export default Search;
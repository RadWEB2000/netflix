import Content from "../Content/Content"
import { IntSearch } from "../interface"
import Poster from "../Poster/Poster"
import { Wrapper } from "./styles"
const Search = ({image,job,path,title,works}:IntSearch) => {
    return(
        <Wrapper>
            <Poster
                image={image ? image : 'https://cdn.pixabay.com/photo/2014/10/12/09/21/filmproduction-485518_960_720.jpg'}
                title={title}
            />
            <Content
                job={job}
                path={path}
                title={title}
                works={works && [...works]}
            />
        </Wrapper>
    )
}
export default Search;
import Bar from "../Bar/Bar"
import Radio from "../Radio/Radio/Radio"
import { IntSearchBar } from "./interface"
import { Wrapper } from "./styles"
const SearchBar = ({filterSearch,id,handle,name}:IntSearchBar) => {
    return(
        <Wrapper>
            <Bar
                handle={handle}
                id={id}
                name={name}
            />
            <Radio
                filterSearch={filterSearch}
            />
        </Wrapper>
    )
}
export default SearchBar;
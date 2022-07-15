import { IntCategory } from "../../../interface";
import { Wrapper } from "./styles";
const Category = ({category}:IntCategory) => {
    return(
        <Wrapper>
            <p>{category}</p>
        </Wrapper>
    )
}
export default Category;
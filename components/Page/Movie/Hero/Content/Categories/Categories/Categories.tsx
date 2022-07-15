import { IntCategories } from "../../../interface";
import Category from "../Category/Category"
import { Wrapper } from "./styles";
const Categories = ({categories}:IntCategories) => {
    return(
        <Wrapper>
            {categories.map(({id,name}) =>
                <Category
                    category={name}
                    key={id}
                />
            )}
        </Wrapper>
    )
}
export default Categories;
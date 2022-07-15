import Link from "next/link"
import { AiOutlineHome } from "react-icons/ai"
import { IntContent } from "../../interface"
import Categories from "../Categories/Categories/Categories"
import Companies from "../Company/Companies/Companies"
import Informations from "../Informations/Informations"
import { Wrapper } from "./styles"
const Content = ({budget,categories,companies,content,homepage,lang,popularity,profit,release,title,vote}:IntContent) => {
    return(
        <Wrapper>
            <h1>{title}</h1>
            <Informations
                budget={budget}
                homepage={homepage}
                lang={lang}
                popularity={popularity}
                profit={profit}
                release={release}
                vote={vote}
            />
            <Categories
                categories={categories}
            />
            <p dangerouslySetInnerHTML={{__html:content}}/>
            <Companies
                companies={companies}
            />
        </Wrapper>
    )
}
export default Content;
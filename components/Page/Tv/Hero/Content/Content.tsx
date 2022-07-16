import Categories from "../../../Movie/Hero/Content/Categories/Categories/Categories";
import Companies from "../../../Movie/Hero/Content/Company/Companies/Companies";
import Informations from "../Informations/Informations";
import {Wrapper} from '../../../Movie/Hero/Content/Content/styles';
import { IntContent } from "../interface";
const Content = ({categories,companies,content,end,homepage,lang,popularity,seasons,start,title,vote}:IntContent) => {
    return(
        <Wrapper>
            <h1>{title}</h1>
            <Informations
                end={end}
                homepage={homepage}
                lang={lang}
                popularity={popularity}
                seasons={seasons}
                start={start}
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
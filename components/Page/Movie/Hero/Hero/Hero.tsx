import { data } from "../../../../SearchResult/data/data"
import Content from "../Content/Content/Content"
import { IntHero } from "../interface"
import Poster from "../Poster/Poster"
import { Wrapper } from "./styles"

const Hero = ({budget,categories,companies,content,homepage,image,lang,popularity,profit,release,title,vote}:IntHero) => {
    return(
        <Wrapper>
            <Poster
                image={image}
                title={title}
            />
            <Content
                budget={budget}
                categories={categories}
                companies={companies}
                content={content}
                homepage={homepage}
                lang={lang}                
                popularity={popularity}
                profit={profit}
                release={release}
                title={title}
                vote={vote}
            />
        </Wrapper>
    )
}
export default Hero;
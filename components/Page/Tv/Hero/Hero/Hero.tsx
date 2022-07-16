import Poster from "../../../Movie/Hero/Poster/Poster";
import Content from "../Content/Content";
import { IntHero } from "../interface";
import {Wrapper} from '../../../Movie/Hero/Hero/styles';
const Hero = ({categories,companies,content,end,homepage,image,lang,popularity,seasons,start,title,vote}:IntHero) => {
    return(
        <Wrapper>
            <Poster
                image={image}
                title={title}
            />
            <Content
                categories={categories}
                companies={companies}
                content={content}
                end={end}
                homepage={homepage}
                lang={lang}                
                popularity={popularity}
                seasons={seasons}
                start={start}
                title={title}
                vote={vote}
            />
        </Wrapper>
    )
}
export default Hero;
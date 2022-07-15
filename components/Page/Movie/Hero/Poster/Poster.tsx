import Image from "next/image"
import { IntPoster } from "../interface";
import { Wrapper } from "./styles";
const Poster = ({image,title}:IntPoster) => {
    return(
        <Wrapper>
            <Image
                alt={title}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                src={image}
                title={title}
                priority
                quality={90}
            />
        </Wrapper>
    )
}
export default Poster;
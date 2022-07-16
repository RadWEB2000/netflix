import Image from "next/image"
import { Wrapper } from "./styles";

const Poster = ({image}:{image:string}) => {
    return(
        <Wrapper>
            <figure>
                <Image
                    alt=''
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    src={image}
                    title=''
                    quality={70}
                />
            </figure>
        </Wrapper>
    )
}
export default Poster;
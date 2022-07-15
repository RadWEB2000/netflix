import Image from "next/image"
import { IntPerson } from "../../interface";
import { Wrapper } from "./styles";
const Big = ({character,image,title}:IntPerson) => {
    return(
        <Wrapper>
            <figure>
                <Image
                    alt={title}
                    layout='fill'
                    loading='lazy'
                    objectFit='cover'
                    objectPosition='center'
                    src={image}
                    title={title}
                    quality={75}
                />
            </figure>
            <figcaption>
                <h3>{title}</h3>
                <h4>{character}</h4>
            </figcaption>
        </Wrapper>
    )
}
export default Big;
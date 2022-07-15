import Image from "next/image"
import { IntPerson } from "../../interface";
import { Wrapper } from "./styles";
const Small = ({character,image,title}:IntPerson) => {
    return(
        <Wrapper>
            {
                (image && image !== null && image !== '') &&
                <figure>
                    <Image
                        alt={title}
                        layout='fill'
                        loading='lazy'
                        objectFit='cover'
                        objectPosition='center'
                        src={image}
                        title={title}
                        quality={55}
                    />
                </figure>
            }
            <figcaption>
                <h3>{title}</h3>
                <h4>{character}</h4>
            </figcaption>
        </Wrapper>
    )
}
export default Small;
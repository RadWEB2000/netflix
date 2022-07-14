import Image from "next/image"
import { IntCard } from "../interface";
import { Wrapper } from "./styles"

const Card = ({description,image,title}:IntCard) => {
    return(
        <Wrapper>
            <figure>
                <Image
                    alt={title}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    src={image}
                />
            </figure>
            <section>
                <h2 dangerouslySetInnerHTML={{__html:title}} />
                {
                    description &&
                    <p dangerouslySetInnerHTML={{__html:description.substr(0,150) + '...'}} /> 
                }
            </section>
        </Wrapper>
    )
}
export default Card;
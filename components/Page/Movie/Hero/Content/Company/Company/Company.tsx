import Image from "next/image"
import { data } from "../../../../../../SearchResult/data/data";
import { IntCompany } from "../../../interface";
import { Wrapper } from "./styles";
const Company = ({country,image,title}:IntCompany) => {
    return(
        <Wrapper title={`${title} - ${country}`}>
            {
                image &&
                <figure>
                    <Image
                        alt={title}
                        layout='fill'
                        objectFit='contain'
                        objectPosition='center'
                        src={`${data.tmdb.image}${image}`}
                        title={`${title} - ${country}`}
                    />
                </figure>
            }
            <figcaption>
                {title}
            </figcaption>
        </Wrapper>
    )
}
export default Company;
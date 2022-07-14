import Image from "next/image"
import Link from "next/link"
import { IntBrand } from "./interface";
import { Wrapper } from "./styles";
const Brand = ({image,path,title}:IntBrand) => {
    return(
        <Wrapper>
            <Link href={path}>
                <a>
                    <figure>
                        <Image
                            alt={title}
                            layout='fill'
                            objectFit="contain"
                            objectPosition='center'
                            src={image}
                            quality={85}
                            title={title}
                        />
                    </figure>
                </a>
            </Link>
        </Wrapper>
    )
}
export default Brand;
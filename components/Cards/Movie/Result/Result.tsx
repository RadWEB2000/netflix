import Image from "next/image";
import Link from "next/link";
import { AiOutlineLike } from "react-icons/ai";
import { IntResult } from "./interface";
import { Wrapper } from "./styles";
const Result = ({image,path,title}:IntResult) => {
    return(
        <Wrapper title={title}>
            <figure>
                <Image
                    alt={title}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    src={image}
                    title={title}
                />
            </figure>
            <section>
                <h3>{title}</h3>
                <div>
                    <div className="fav">
                        <AiOutlineLike/>
                    </div>
                    <Link href={`/${path}`}>
                        <a>
                            View more
                        </a>
                    </Link>
                </div>
            </section>
        </Wrapper>
    )
}
export default Result;
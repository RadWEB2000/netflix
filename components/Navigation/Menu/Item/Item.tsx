import Link from "next/link"
import { IntItem } from "./interface";
import { Wrapper } from "./styles";
const Item = ({path,title}:IntItem) => {
    return(
        <Wrapper>
            <Link href={path}>
                <a>
                    {title}
                </a>
            </Link>
        </Wrapper>
    )
}
export default Item;
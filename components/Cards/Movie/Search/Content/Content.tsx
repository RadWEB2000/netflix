import Link from "next/link"
import { AiFillStar, AiOutlineLike } from "react-icons/ai"
import { BsCalendarDate } from "react-icons/bs"
import { RiFlagLine } from "react-icons/ri"
import { IntContent } from "../interface"
import { Wrapper } from "./styles"
const Content = ({description,lang,path,rating,release,title}:IntContent) => {
    return(
        <Wrapper>
            <h2>{title}</h2>
            <ul>
                <li>
                    <span><AiFillStar/></span>
                    <p>{rating}</p>
                </li>
                <li>
                    <span><BsCalendarDate/></span>
                    <p>{release}</p>
                </li>
                <li>
                    <span><RiFlagLine/></span>
                    <p>{lang?.toUpperCase()}</p>
                </li>
            </ul>
            <p dangerouslySetInnerHTML={{__html:description.substr(0,250) + '...'}} />
            <div>
                <div>
                    <div className="fav">
                        <AiOutlineLike/>
                    </div>
                    <Link href={path}>
                        <a>
                            View more
                        </a>
                    </Link>
                </div>
            </div>
        </Wrapper>
    )
}
export default Content;
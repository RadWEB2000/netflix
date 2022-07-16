import Link from "next/link";
import { AiOutlineLike } from "react-icons/ai";
import { IntContent } from "../interface"
import { Wrapper } from "./styles";
const Content = ({job,path,title,works}:IntContent) => {
    return(
        <Wrapper>
            <h1>{title}</h1>
            <p>{job}</p>
            <ul>
                {works && works.slice(0,5).map(({first_air_date,media_type,name,title,release_date}) =>
                    <>
                        {
                            media_type == 'movie' ?
                            <li>
                                <h4>{title}</h4>
                                <p>{release_date}</p>
                            </li>:
                            <li>
                                <h4>{name}</h4>
                                <p>{first_air_date}</p>
                            </li>
                        }
                    
                    </>
                )}
            </ul>
            <div>
                <div>
                    <div className="fav">
                        <AiOutlineLike/>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
export default Content;
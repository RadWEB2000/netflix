import Link from "next/link";
import { AiOutlineHome, AiOutlineLike, AiOutlineStar } from "react-icons/ai"
import { FiUsers } from "react-icons/fi"
import { IntInformations } from "../interface";
import { Wrapper } from "./styles";

const Informations = ({end,homepage,lang,popularity,seasons,start,vote}:IntInformations) => {
    return(
        <Wrapper>
            <ul>
                <li className="action like">
                    <div>
                        <AiOutlineLike/>
                    </div>
                </li>
                {
                    homepage &&
                    <li className="action homepage">
                        <Link href={homepage}>
                            <a target='_blank' rel='noopener noreferrer noindex nofollow'>
                                <AiOutlineHome/>
                            </a>
                        </Link>
                    </li>
                }
                <li className="action lang">
                    <p>
                        {lang.toUpperCase()}
                    </p>
                </li>
            </ul>
            <div>
                <ul>
                    <li className="stat popularity">
                        <div className="icon">
                            <FiUsers/>
                        </div>
                        <p>
                           {popularity} 
                        </p>
                    </li>
                    <li className="stat vote">
                        <div className="icon">
                            <AiOutlineStar/>
                        </div>
                        <p>
                            {vote}
                        </p>
                    </li>
                </ul>
                <ul>
                    <li className="finanse">
                        <p>start</p>
                        <p>{start}</p>
                    </li>
                    <li className="finanse">
                        <p>end</p>
                        <p>{end}</p>
                    </li>
                    <li className="finanse">
                        <p>seasons</p>
                        <p>{seasons}</p>
                    </li>

                </ul>
            </div>
        </Wrapper>
    )
}
export default Informations;
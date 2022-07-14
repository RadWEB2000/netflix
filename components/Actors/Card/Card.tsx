import Link from 'next/link';
import {SiTwitter} from 'react-icons/si';
import { IntCard } from "./interface";
import { Wrapper } from './styles';
const Card = ({date,title,twitterName}:IntCard) => {
    return(
        <Wrapper>
            <h3>{title}</h3>
            <p>{date}</p>
            {
                twitterName &&
                <Link href={`https://twitter.com/${twitterName}`}>
                    <a target='_blank'>
                        <span>
                            <SiTwitter/>     
                        </span>
                        <p>
                            @{twitterName}
                        </p>
                    </a>
                </Link>
            }
        </Wrapper>
    )
}
export default Card;
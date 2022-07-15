import Link from "next/link";
import { AiOutlineHome, AiOutlineLike, AiOutlineStar } from "react-icons/ai";
import { BsCalendar2Date } from "react-icons/bs";
import {FiUsers} from 'react-icons/fi';
import { IntInformations } from "../../interface";
import { Wrapper } from "./styles";
const Informations = ({budget,homepage,lang,popularity,profit,release,vote}:IntInformations) => {
    const budgetBalance = (balance:number):string => {
        const moneyArray = balance.toString().split('');
        const moneyLegth = moneyArray.length;
        if(moneyLegth > 6){
            return `${moneyArray[0]}${moneyArray[1]}${moneyArray[2]}MM $`;
        }else if(moneyLegth > 3){
            return `${moneyArray[0]}${moneyArray[1]}${moneyArray[2]}M $`;
        }else{
            return `${balance} $`;
        }
    }
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
                    <li className="stat release">
                        <div className="icon">
                            <BsCalendar2Date/>
                        </div>
                        <p>
                            {release}
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
                        <p>budget</p>
                        <p>{budgetBalance(budget)}</p>
                    </li>
                    <li className="finanse">
                        <p>profit</p>
                        <p>{budgetBalance(profit)}</p>
                    </li>

                </ul>
            </div>
        </Wrapper>
    )
}
export default Informations;
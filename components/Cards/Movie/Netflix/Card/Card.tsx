import {TbClock} from 'react-icons/tb';
import { IntCard } from '../interface';
import { Wrapper } from './styles';
const Card = ({hours,list,title}:IntCard) => {
    const index = parseInt(list);
    return(
        <Wrapper>
            <div>
                <p>
                    {index < 10 ? `0${index}` : index}
                </p>
            </div>
            <section>
                <h3>{title}</h3>
                <div>
                    <span><TbClock/></span>
                    <p>{hours}</p>
                </div>
            </section>
        </Wrapper>
        
    )
}
export default Card;
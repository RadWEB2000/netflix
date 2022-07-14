import {BsStarFill} from 'react-icons/bs';
import {VscChromeClose} from 'react-icons/vsc';
import { IntMore } from './interface';
import { Wrapper } from './styles';
const Star = () => {
    return(
        <li className='star'>
            <BsStarFill/>
        </li>
    )
}
const More = ({closeMore,content,rate,release,title}:IntMore) => {
    const score = [1,2,3,4,5];
    return(
        <Wrapper>
            <div className="box">
                <div>
                    <div className="close" onClick={closeMore}>
                        <VscChromeClose/>
                    </div>
                </div>
                <section>
                    <h2 dangerouslySetInnerHTML={{__html:title}} />
                    <div>
                        <p>{release}</p>
                        <ul>
                            {score.slice(0,rate).map((index) =>
                                <Star
                                    key={index}
                                />
                            )}
                        </ul>
                    </div>
                    <p dangerouslySetInnerHTML={{__html:content}} />
                </section>
            </div>
        </Wrapper>
    )
}
export default More;
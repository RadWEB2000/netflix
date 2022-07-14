import {AiOutlineInfoCircle} from 'react-icons/ai';
import {FaPlay} from 'react-icons/fa';
import { IntContent } from './interface';
import { Wrapper } from './styles';
const Content = ({content,modalButton,openMore,trailerButton,title}:IntContent) => {
    return(
        <Wrapper>
            <section>
                <h1 dangerouslySetInnerHTML={{__html:title}}/>
                <p dangerouslySetInnerHTML={{__html:content.substr(0,150) + '...'}}/>
                <ul>
                    <li className="button movie">
                        <button onClick={openMore}>
                            <div>
                                <FaPlay/>
                            </div>
                            <p>
                                {trailerButton}
                            </p>
                        </button>
                    </li>
                    <li className="button modal">
                        <button>
                            <div>
                                <AiOutlineInfoCircle/>
                            </div>
                            <p>
                                {modalButton}
                            </p>
                        </button>
                    </li>
                </ul>
            </section>
        </Wrapper>
    )
}
export default Content;
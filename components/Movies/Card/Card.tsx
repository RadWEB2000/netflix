import Image from "next/image"
import Link from "next/link"
import { AiFillStar, AiOutlineLike, AiTwotoneStar } from "react-icons/ai"
import { BsCalendarDate } from "react-icons/bs"
import { RiFlagLine } from "react-icons/ri"
import { IntCard } from "./interface"
import { Home, Result, Search } from "./styles"

const Card = ({description='',id,image,isHome=false,isResult=false,isSearch=false,lang,rating='',release='',title}:IntCard) => {
    const path = id?.toString();
    return(
        <>
            {
                isHome &&
                <Home>
                    <figure>
                        <Image
                            alt={title}
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                            src={image}
                        />
                    </figure>
                    <section>
                        <h2 dangerouslySetInnerHTML={{__html:title}} />
                        <div>
                            <div>
                                {
                                    rating &&
                                    <p dangerouslySetInnerHTML={{__html:rating}} />
                                }
                                <div>
                                    <AiTwotoneStar/>
                                </div>
                            </div>
                            <div>
                                {
                                    release &&
                                    <p dangerouslySetInnerHTML={{__html:release}} />
                                }
                            </div>
                        </div>
                        {
                            description &&
                            <p dangerouslySetInnerHTML={{__html:description.substr(0,150) + '...'}} /> 
                        }
                    </section>
                </Home>
            }
            {
                isSearch &&
                <Search>
                    <figure>
                        <Image
                            alt={title}
                            layout='fill'
                            objectFit='contain'
                            objectPosition='center'
                            src={image}
                            title={title}
                        />
                    </figure>
                    <section>
                        <h2>{title}</h2>
                        <ul>
                            {
                                rating &&
                                <li>
                                    <span><AiFillStar/></span>
                                    <p>{rating}</p>
                                </li>
                            }
                            {
                                release &&
                                <li>
                                    <span><BsCalendarDate/></span>
                                    <p>{release}</p>
                                </li>
                            }
                            <li>
                                <span><RiFlagLine/></span>
                                <p>{lang?.toUpperCase()}</p>
                            </li>
                        </ul>
                        {
                            description &&
                            <p dangerouslySetInnerHTML={{__html:description}} />
                        }
                        <div>
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
                        </div>
                    </section>
                </Search>
            }
            {
                isResult &&
                <Result title={title}>
                    <figure>
                        <Image
                            alt={title}
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                            src={image ? image : 'https://images.unsplash.com/photo-1589041065713-167040448c84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}
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
                </Result>
            }
        </>
    )
}
export default Card;
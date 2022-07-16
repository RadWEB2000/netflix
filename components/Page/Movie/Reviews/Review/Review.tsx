import { AnimatePresence,motion } from "framer-motion";
import Image from "next/image"
import { useState } from "react";
import { IntReview } from "../interface";
import { Wrapper } from "./styles";
const Review = ({content,fullname,image,release,username}:IntReview) => {
    const [isMore,setIsMore] = useState(false);
    const time = {
        year:new Date(release).getFullYear(),
        month:new Date(release).getMonth() + 1,
        day:new Date(release).getDate(),
        hour:new Date(release).getHours(),
        minute:new Date(release).getMinutes(),
    }
    const fullTime = `${time.hour < 10 ? `0${time.hour}` : time.hour}:${time.minute < 10 ? `0${time.minute}` : time.minute} ${time.day < 10 ? `0${time.day}` : time.day}/${time.month < 10 ? `0${time.month}` : time.month}/${time.year}`

    console.log(content.length)
    return(
        <Wrapper>
            <section>
                <div className="head">
                    <div className="person">
                        <figure>
                            <Image
                                alt={username}
                                layout='fill'
                                objectFit='cover'
                                objectPosition='center'
                                src={image}
                                title={username}
                                quality={45}
                            />
                        </figure>
                        <div>
                            {
                                username &&
                                <h3>{username}</h3>
                            }
                            {
                                fullname &&
                                <h4>{fullname}</h4>
                            }
                        </div>
                    </div>
                    <div  className="release">
                        <p>{fullTime}</p>
                    </div>
                </div>
                <article>
                    {
                        content.length <= 250 ? 
                        <p dangerouslySetInnerHTML={{__html:content}} /> :
                        <>
                            <p dangerouslySetInnerHTML={{__html:content.substring(0,251) +`${isMore == false ? '...' : ''}`}} />{}
                            {
                                isMore &&
                                <AnimatePresence>
                                    <motion.p 
                                        initial={{opacity:0,visibility:'hidden'}}
                                        animate={{opacity:1,visibility:'visible'}}
                                        exit={{opacity:0,visibility:'hidden'}}
                                        dangerouslySetInnerHTML={{__html:content.substring(251)}} 
                                    />
                                </AnimatePresence>
                            }
                        </>
                    }
                </article>
                <div className="more">
                    <button onClick={() => setIsMore(!isMore)}>
                        more
                    </button>
                </div>
            </section>
        </Wrapper>
    )
}
export default Review;
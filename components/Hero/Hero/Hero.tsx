import { AnimatePresence,motion } from "framer-motion";
import { useState } from "react";
import Content from "../Content/Content"
import More from "../More/More";
import Poster from "../Poster/Poster"
import Trailer from "../Trailer/Trailer";
import { IntHero } from "./interface";
import { Wrapper } from "./styles";
const Hero = ({content,image,modalButton,title,trailerButton}:IntHero) => {
    const [isMore,setIsMore] = useState(false)
    const [isTrailer,setIsTrailer] = useState(false)
    const openMore = () => {
        setIsMore(true);
        setIsTrailer(false);
    }
    const openTrailer = () => {
        setIsMore(false);
        setIsTrailer(true);
    }
    const closeMore = () => {
        setIsMore(false);
        setIsTrailer(false);
    }
    const closeTrailer = () => {
        setIsMore(false);
        setIsTrailer(false);
    }
    return(
        <>
            <Wrapper>
                <Content
                    content={content}
                    modalButton={modalButton}
                    openMore={() => openMore()}
                    title={title}
                    trailerButton={trailerButton}
                />
                <Poster
                    image={image}
                    title={title}
                />
            </Wrapper>
            {
                isMore &&
                <AnimatePresence>
                    <motion.div
                        initial={{opacity:0,visibility:'hidden'}}
                        animate={{opacity:1,visibility:'visible'}}
                        exit={{opacity:0,visibility:'hidden'}}
                    >
                        <More
                            closeMore={() => closeMore()}
                            content="The origin story of former Special Forces operative turned mercenary Wade Wilson, who, after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life."
                            release="10-05-2018"
                            rate={5}
                            title="Deadpool"
                        />             
                    </motion.div>
                </AnimatePresence>
            }
            {
                isTrailer &&
                <AnimatePresence>
                    <motion.div
                        initial={{opacity:0,visibility:'hidden'}}
                        animate={{opacity:1,visibility:'visible'}}
                        exit={{opacity:0,visibility:'hidden'}}
                    >
                        <Trailer
                            movie="/assets/movies/deadpool.mp4"
                        />
                    </motion.div>
                </AnimatePresence>
            }
        </>
    )
}
export default Hero;
import { AnimatePresence,motion } from "framer-motion"
import { useState } from "react"
import { data } from "../../../../SearchResult/data/data"
import { IntCast } from "../interface"
import Big from "../Person/Big/Big"
import Small from "../Person/Small/Small"
import { Wrapper } from "./styles"
const Cast = ({cast}:IntCast) => {
    const [isMore,setIsMore] = useState(false)
    return(
        <Wrapper>
            <h2>Cast</h2>
            <ul>
                {cast.slice(0,5).map(({character,profile_path,name},key) =>
                    <Big
                        character={character}
                        key={key}
                        image={`${data.tmdb.image}${profile_path}`}
                        title={name}
                    />
                )}
            </ul>
            <div>
                <motion.button 
                    onClick={() => setIsMore(!isMore)}
                  >
                    <p>more</p>
                </motion.button>
            </div>
            {
                isMore &&
                <AnimatePresence>
                    <motion.ul
                        initial={{opacity:0,visibility:'hidden'}}
                        animate={{opacity:1,visibility:'visible'}}
                        exit={{opacity:0,visibility:'hidden'}}
                    >
                        {cast.slice(5,-1).map(({character,profile_path,name},key) =>
                            <Small
                                character={character}
                                key={key}
                                image={`${data.tmdb.image}${profile_path}`}
                                title={name}
                            />
                        )}
                    </motion.ul>
                </AnimatePresence>
            }
        </Wrapper>
    )
}
export default Cast;
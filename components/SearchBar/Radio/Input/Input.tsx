import { AnimatePresence,motion } from "framer-motion";
import { IntInput } from "../interface";
import { Wrapper } from "./styles";
const Input = ({id,handle,name,title,value}:IntInput) => {
    return(
        <Wrapper>
            <input 
                type="radio" 
                name={name}
                id={id} 
            />
            <label htmlFor={name} onClick={handle}>
                <div className="checkbox">
                    {
                        value &&
                        <AnimatePresence>
                            <motion.div 
                                className="check"
                                initial={{opacity:0,visibility:'hidden'}}
                                animate={{opacity:1,visibility:'visible'}}
                                exit={{opacity:0,visibility:'hidden'}}
                            />
                        </AnimatePresence>
                    }
                </div>
                <p>
                    {title}
                </p>
            </label>
        </Wrapper>
    )
}
export default Input;
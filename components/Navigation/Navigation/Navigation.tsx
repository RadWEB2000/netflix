import { useState } from "react"
import Brand from "../Brand/Brand"
import Button from "../Menu/Button/Button"
import Menu from "../Menu/Menu/Menu"
import { IntNavigation } from "./interface"
import { Wrapper } from "./styles"
import {AnimatePresence,motion} from 'framer-motion';
const Navigation = ({image,menu,path,title}:IntNavigation) => {
    const [isOpen,setOpen] = useState(false);
    return(
        <>
            <Wrapper className="desktop">
                <div>
                    <Brand
                        image={image}
                        path={path}
                        title={title}
                    />
                    <Menu
                        menu={menu}
                    />
                </div>
            </Wrapper>
            <Wrapper className="mobile">
                <div>
                    <Brand
                        image={image}
                        path={path}
                        title={title}
                    />
                    <Button
                        active={isOpen}
                        menuButton={() => setOpen(!isOpen)}
                    />
                </div>
                <div>
                {
                    isOpen &&
                    <AnimatePresence>
                        <motion.div
                            initial={{opacity:0,visibility:'hidden'}}
                            animate={{opacity:1,visibility:'visible'}}
                            exit={{opacity:0,visibility:'hidden'}}
                        >
                            <Menu
                                menu={menu}
                            />
                        </motion.div>
                    </AnimatePresence>
                }
                </div>
            </Wrapper>
        </>
    )
}
export default Navigation;
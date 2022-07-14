import Item from "../Item/Item"
import { IntMenu } from "./interface"
import { Wrapper } from "./styles";
const Menu = ({menu}:IntMenu) => {
    return(
        <Wrapper>
            {menu.map(({path,title},key:number) => 
                <Item
                    key={key}
                    path={path}
                    title={title}
                />
            )}
        </Wrapper>
    )
}
export default Menu;
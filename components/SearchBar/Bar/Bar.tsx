import { IntBar } from "./interface"
import { Wrapper } from "./styles";
const Bar = ({id,handle,name}:IntBar) => {
    return(
        <Wrapper>
            <input 
                id={id} 
                name={name} 
                onInput={handle}
                placeholder="Search"
                type="text" 
            />
        </Wrapper>
    )
}
export default Bar;
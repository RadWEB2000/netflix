import { IntButton } from "./interface";
import { Wrapper } from "./styles";
const Button = ({active,menuButton}:IntButton) => {
    return(
        <Wrapper active={active} onClick={menuButton}>
            <span/>
            <span/>
        </Wrapper>
    )
}
export default Button;
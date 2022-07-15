import { IntCard } from "../../interface"
import { Wrapper } from "./styles";
const Big = ({image,name}:IntCard) => {
    return(
        <Wrapper>
            <iframe
                src={image}
                title={name}
            />
        </Wrapper>
    )
}
export default Big;
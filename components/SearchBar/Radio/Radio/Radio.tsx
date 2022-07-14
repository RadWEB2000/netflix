import Input from "../Input/Input"
import { IntRadio } from "../interface"
import { Wrapper } from "./styles";
const Radio = ({filterSearch}:IntRadio) => {
    return(
        <Wrapper>
            {filterSearch.map(({id,handle,name,title,value},key:number) =>
                <Input
                    id={id}
                    handle={handle}
                    key={key}
                    name={name}
                    title={title}
                    value={value}
                />
            )}
        </Wrapper>
    )
}
export default Radio;
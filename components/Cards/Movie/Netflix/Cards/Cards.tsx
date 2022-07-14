import Card from "../Card/Card";
import { IntCards } from "../interface";
import { Wrapper } from "./styles";
const Cards = ({cards,title}:IntCards) => {
    return(
        <Wrapper>
            <div>
                <h2>{title}</h2>
            </div>
            <ul>
                {cards.map(({hoursviewed,list,name},key:number) =>
                    <Card
                        hours={hoursviewed}
                        key={key}
                        list={list}
                        title={name}
                    />
                )}
            </ul>
        </Wrapper>
    )
}
export default Cards;
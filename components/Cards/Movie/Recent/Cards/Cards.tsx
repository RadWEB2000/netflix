import Card from "../Card/Card";
import { IntCards } from "../interface";
import { Wrapper } from "./styles";

const Cards = ({cards,title}:IntCards) => {
    return(
        <Wrapper>
            <h2>{title}</h2>
            <ul>
                {cards.map(({description,image,title},key:number) =>
                    <Card
                        description={description}
                        image={image}
                        key={key}
                        title={title}
                    />
                )}
            </ul>
        </Wrapper>
    )
}
export default Cards;
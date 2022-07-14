import { useEffect, useState } from "react";
import { actors } from "../../../data/actors";
import { fetchActors } from "../../../functions/fetch";
import Card from "../Card/Card";
import { IntActors } from "./interface"
import { Wrapper } from "./styles";
const Actors = ({title}:IntActors) => {
    const {api,options} = actors;
    const [actorsList,setActorsList] = useState([]);
    useEffect(() => {
        fetchActors(api,setActorsList,options);
    },[setActorsList])
    return(
        <Wrapper>
            <h2>{title}</h2>
            <ul>
                {actorsList.map(({dob,name,twitter}) =>
                    <>
                        <Card
                            date={dob}
                            title={name}
                            twitterName={twitter}
                        />
                    </>
                )}
            </ul>
        </Wrapper>
    )
}
export default Actors;
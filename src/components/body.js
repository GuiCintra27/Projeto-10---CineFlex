import styled from "styled-components";
import Movie from "./movie";
import filmList from "./filmList";
import { useState } from "react";
import Session from "./session";
import BuyTicket from "./buyTicket";

export default function Body({ selected, setSelected, sessionInformations, setSessionInformations }) {
    const [title, setTitle] = useState('Selecione o filme');

    return (
        <>
            <Title>
                {title}
            </Title>
            {selected === false ?
                <Poster>
                    {filmList.map((item, index) => (
                        <Movie key={index} id={index} movie={item.movie} cover={item.cover} setSelected={setSelected} setTitle={setTitle} />
                    ))}
                </Poster>
                :
                (sessionInformations.isTrue ?
                    <BuyTicket/>
                    :
                    <SessionInformations>
                        {filmList[selected].session.map((item, index) => (
                            <Session key={index} sessionDay={index} day={item.day} date={item.date} hours={item.hours} setTitle={setTitle} sessionInformations={sessionInformations} setSessionInformations={setSessionInformations} />
                        ))}
                    </SessionInformations>)
            }
        </>
    );
}

const Title = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 400;
`;

const Poster = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: center;
`;

const SessionInformations = styled.div`
    margin-bottom: 1.8rem;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2.2rem;

    h1{
        font-size: 20px;
        font-weight: 400;
    }
`;
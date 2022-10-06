import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "./footer";
import Loading from "./loading";
import Session from "./session";
import Title from "./title";

export default function Sessions() {
    const { id } = useParams();
    const [movieSession, setMovieSession] = useState(false);

    useEffect(() => {
        const sessionsURL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`;

        axios.get(sessionsURL).then(response => {
            setMovieSession(response.data);
        })

        axios.get(sessionsURL).catch(err => {
            console.log(err.response.data);
        })
    }, []);


    if (!movieSession) {
        return <Loading />
    }

    return (
        <>
            <Title color='black' fontWeigth='400'>
                Selecione o horário
            </Title>
            <SessionsInformations>
                {movieSession.days.map((item, index) => (
                    <Session key={index} weekday={item.weekday} date={item.date} hours={item.showtimes} />
                ))}
            </SessionsInformations>
            <Footer sessionInformations={movieSession} />
        </>
    );
}

const SessionsInformations = styled.div`
    height: calc(100vh - 22.7rem - 6.7rem);
    overflow-y: scroll;
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
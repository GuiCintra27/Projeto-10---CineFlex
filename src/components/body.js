import styled from "styled-components";
import Movie from "./movie";
import { useEffect, useState } from "react";
import Session from "./session";
import BuyTicket from "./buyTicket";
import axios from "axios";
import Loading from "./loading";

export default function Body({ selected, setSelected, sessionInformations, setSessionInformations, movieSession, setMovieSession }) {
    const [movieList, setMovieList] = useState('');
    const [title, setTitle] = useState('Selecione o filme');

    useEffect(() => {
        const listURL = 'https://mock-api.driven.com.br/api/v5/cineflex/movies';

        axios.get(listURL).then(response => {
            setMovieList(response.data);
        })

        axios.get(listURL).catch(err => {
            console.log(err.response.data);
        })
    }, [movieList]);

    useEffect(() => {
        if (movieSession === false) {
            const sessionsURL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieList[selected - 1].id}/showtimes`;

            axios.get(sessionsURL).then(response => {
                setMovieSession(response.data);
            })

            axios.get(sessionsURL).catch(err => {
                console.log(err.response.data);
            })
        }
    }, [movieSession])

    if (movieList.length === 0 || (movieList.length > 0 && movieSession === false)) {
        return <Loading />
    }

    return (
        <>
            <Title>
                {title}
            </Title>
            {(selected === false) ?
                <Poster>
                    {movieList.map((item, index) => (
                        <Movie key={index} id={item.id} movie={item.title} cover={item.posterURL} setSelected={setSelected} setTitle={setTitle} setMovieSession={setMovieSession} />
                    ))}
                </Poster>
                :
                (sessionInformations.isTrue ?
                    <BuyTicket sessionId={movieList[selected - 1].id} />
                    :
                    <SessionInformations>
                        {movieSession.days.map((item, index) => (
                            <Session key={index} sessionDay={index} weekday={item.weekday} date={item.date} hours={item.showtimes} setTitle={setTitle} setSessionInformations={setSessionInformations} />
                        ))}
                    </SessionInformations>
                )}
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
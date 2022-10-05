import styled from "styled-components";
import Movie from "./movie";
import { useEffect, useState } from "react";
import Session from "./session";
import BuyTicket from "./buyTicket";
import axios from "axios";
import Loading from "./loading";
import SucessfullyOrder from "./sucessfullyOrder";

export default function Body({ selected, setSelected, sessionInformations, setSessionInformations, movieSession, setMovieSession }) {
    const [title, setTitle] = useState('Selecione o filme');
    const [titleStyle, setTitleStyle] = useState(['black', '400']);
    const [movieList, setMovieList] = useState('');
    const [selectedSeats, setSelectedSeats] = useState('');
    const [buyersName, setBuyersName] = useState('');
    const [cpf, setCpf] = useState('');
    const [requestTicket, setRequestTicket] = useState(false);
    const buy = { ids: selectedSeats, name: buyersName, cpf: cpf };

    useEffect(() => {
        const listURL = 'https://mock-api.driven.com.br/api/v5/cineflex/movies';

        axios.get(listURL).then(response => {
            setMovieList(response.data);
        })

        axios.get(listURL).catch(err => {
            console.log(err.response.data);
        })
    }, []);

    useEffect(() => {
        if (movieSession === false) {
            const sessionsURL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieList[selected.id - 1].id}/showtimes`;

            axios.get(sessionsURL).then(response => {
                setMovieSession(response.data);
            })

            axios.get(sessionsURL).catch(err => {
                console.log(err.response.data);
            })
        }
    }, [movieSession]);

    useEffect(() => {
        if (selectedSeats.length > 0) {
            const buyURL = 'https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many';

            axios.post(buyURL, buy).then(response => {
                setSelected({id: selected.id, status: true, footer:false});
                setRequestTicket(true);
                setTitle('Pedido feito com sucesso!');
            })

            axios.post(buyURL, buy).catch(err => {
                console.log(err.response.data)
            })
        }
    }, [requestTicket]);

    if (movieList.length === 0 || (movieList.length > 0 && movieSession === false)) {
        return <Loading />
    }

    return (
        <>
            <Title color={titleStyle[0]} fontWeigth={titleStyle[1]}>
                {title}
            </Title>
            {(selected.status === false) ?
                <Poster>
                    {movieList.map((item, index) => (
                        <Movie key={index} id={item.id} movie={item.title} cover={item.posterURL} setSelected={setSelected} setTitle={setTitle} setMovieSession={setMovieSession} />
                    ))}
                </Poster>
                :
                (sessionInformations.isTrue ?
                    (requestTicket ?
                        <SucessfullyOrder movie={movieList[selected.id - 1].title} titleStyle={titleStyle} setTitleStyle={setTitleStyle} buyerInformation={buy}/>
                        :
                        <BuyTicket sessionId={sessionInformations.sessionId} buyersName={buyersName} setBuyersName={setBuyersName} cpf={cpf} setCpf={setCpf} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} setRequestTicket={setRequestTicket} setTitle={setTitle} />)
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
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: ${props => props.fontWeigth};
    color: ${props => props.color};
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
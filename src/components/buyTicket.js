import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Loading from "./loading";
import Title from "./title";
import SeatInformations from "./seatInformations";
import Seats from "./seats";
import Footer from "./footer";

export default function BuyTicket() {
    const { id } = useParams();
    const [sessionInformations, setSessionInformations] = useState('');
    const [seats, setSeats] = useState('');
    const [buyersName, setBuyersName] = useState('');
    const [cpf, setCpf] = useState('');
    const [selectedSeats, setSelectedSeats] = useState({ id: [], name: [] });
    const [requestTicket, setRequestTicket] = useState(false);
    const [isDisable, setIsDisable] = useState(true);
    const buy = { ids: selectedSeats.id, name: buyersName, cpf: cpf };


    useEffect(() => {
        const seatsURL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`;

        axios.get(seatsURL).then(response => {
            const data = response.data;
            setSessionInformations(data);
            setSeats(data.seats);
        })

        axios.get(seatsURL).catch(err => {
            console.log(err.response.data);
        })
    }, [])

    useEffect(() => {
        if (requestTicket === 'sold') {
            const buyURL = 'https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many';

            axios.post(buyURL, buy).then(response => {
                window.open(`/ingresso/${buy, sessionInformations}`, '_self');
            })

            axios.post(buyURL, buy).catch(err => {
                console.log(err.response.data);
            })
        }
    }, [requestTicket]);

    function confirmRequest() {
        if (!isDisable) {
            setRequestTicket('sold')
        } else {
            alert('Alguma informação foi inserida incorretamente!')
        }
    }

    if (seats.length === 0) {
        return <Loading />
    }

    return (
        <>
            <Title color='black' fontWeigth='400'>
                Selecione o(s) assento(s)
            </Title>
            <SeatOptions>
                {seats.map((item, index) => (
                    <Seats key={index} item={item} index={index} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
                ))}
            </SeatOptions>
            <SeatInformations />
            <Inputs>
                <div>
                    <label>Nome do comprador:</label>
                    <input placeholder="Digite seu nome..." onChange={(e) => {
                        if (buyersName.length + 1 > 2 && cpf.length === 11 && selectedSeats.id.length > 0) {
                            setIsDisable(false);
                        } else {
                            setIsDisable(true);
                        } setBuyersName(e.target.value)
                    }} />
                </div>
                <div>
                    <label>CPF do comprador:</label>
                    <input placeholder="Digite seu CPF..." onChange={(e) => {
                        if (buyersName.length > 2 && cpf.length + 1 === 11 && selectedSeats.id.length > 0) {
                            setIsDisable(false);
                        } else {
                            setIsDisable(true);
                        } setCpf(e.target.value)
                    }} pattern='[0-9] {11}' />
                </div>
            </Inputs>
            <Button><button disabled={isDisable ? 'disabled' : null} onClick={confirmRequest}>Reservar assento(s)</button></Button>
            <Footer sessionInformations={sessionInformations}/>
        </>
    );
}

const SeatOptions = styled.div`
    padding-inline: 2rem;
    gap: .8rem;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1.6rem;
`;

const Inputs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .7rem;

    div{
        display: flex;
        flex-direction: column;
    }

    label{
        font-size: 18px;
        font-weight: 400;
    }

    input{
        width: 32.7rem;
        height: 5rem;
        padding-left: 1.8rem;
        border: 1px solid var(--input-border);
        border-radius: 3px;
    }

    input::placeholder{
        font-size: 18px;
        font-weight: 400;
        font-style: italic;
        color: #AFAFAF;
    }
`;

const Button = styled.div`
    margin-top: 5.7rem;
    display: flex;
    justify-content: center;

    button{
        width: 22.5rem;
        height: 4.2rem;
        border: none;
        border-radius: 3px;
        background-color: var(--orange);
        color: #FFFFFF;
        font-size: 18px;
        font-weight: 400;
    }

    a{
        color: #FFFFFF;
    }
`;
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "./loading";
import SeatInformations from "./seatInformations";
import Seats from "./seats";

export default function BuyTicket({sessionId, buyersName, setBuyersName, cpf, setCpf, selectedSeats, setSelectedSeats, setRequestTicket}) {
    const [seats, setSeats] = useState('');
    const [clickedSeats, setClickedSeats] = useState({id: [], name: []});

    useEffect(() => {
        const seatsURL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`;

        axios.get(seatsURL).then(response => {
            const data = response.data;
            setSeats(data.seats);
        })

        axios.get(seatsURL).catch(err => {
            console.log(err.response.data);
        })
    }, [])

    function confirmRequest() {
        if (buyersName.length > 2 && cpf.length === 11 && clickedSeats.id.length > 0) {
            setRequestTicket('buyed');
            setSelectedSeats({id: [...clickedSeats.id], name: [...clickedSeats.name]})
        }
    }

    if (seats.length === 0) {
        return <Loading />
    }

    return (
        <>
            <SeatOptions>
                {seats.map((item, index) => (
                    <Seats key={index} item={item} index={index} clickedSeats={clickedSeats} setClickedSeats={setClickedSeats} />
                ))}
            </SeatOptions>
            <SeatInformations />
            <Inputs>
                <div>
                    <label>Nome do comprador:</label>
                    <input placeholder="Digite seu nome..." onChange={(e) => setBuyersName(e.target.value)} />
                </div>
                <div>
                    <label>CPF do comprador:</label>
                    <input placeholder="Digite seu CPF..." onChange={(e) => setCpf(e.target.value)} pattern='[0-9] {11}'/>
                </div>
            </Inputs>
            <Button><button onClick={confirmRequest}>Reservar assento(s)</button></Button>
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
`;
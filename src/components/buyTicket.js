import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "./loading";

export default function BuyTicket({ sessionId }) {
    const [seatAvailable, setSeatAvailable] = useState('var(--seat-available)');
    const [availableBorder, setAvailableBorder] = useState('var(--seat-available-border)');
    const [seats, setSeats] = useState('');

    function selectSeat() {
        setSeatAvailable('var(--selected-seat)');
        setAvailableBorder('var(--selected-seat-border)');
    }

    useEffect(() => {
        const seatsURL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${sessionId}/showtimes`;

        axios.get(seatsURL).then(response => {
            setSeats(response.data);
        })

        axios.get(seatsURL).catch(err => {
            console.log(err.response.data);
        })
    }, [seats])

    if (seats.length === 0) {
        return <Loading/>
    }

    return (
        <>
            <SeatOptions>
                {seats.map((item) => (
                    <Seat
                        color={item.isAvailable ? seatAvailable : 'var(--seat-unavailable)'}
                        border={item.isAvailable ? availableBorder : 'var(--seat-unavailable-border)'}
                        onClick={selectSeat} >
                        {item.name}
                    </Seat>
                ))}
            </SeatOptions>
        </>
    );
}

const Seat = styled.button`
    margin-bottom: 1rem;
    width: 2.6rem;
    height: 2.6rem;
    background-color: ${props => props.color};
    border: 1px solid  ${props => props.border};
    border-radius: 100%;
`;

const SeatOptions = styled.div`
    padding-inline: 2rem;
    gap: .8rem;
    display: flex;
    flex-wrap: wrap;
`;
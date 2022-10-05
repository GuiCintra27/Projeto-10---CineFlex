import { useState } from "react";
import styled from "styled-components";

export default function Seats({item, index, selectedSeats, setSelectedSeats}) {
    const [seatAvailable, setSeatAvailable] = useState('var(--seat-available)');
    const [availableBorder, setAvailableBorder] = useState('var(--seat-available-border)');

    function selectSeat(id, name) {
        setSelectedSeats({id: [...selectedSeats.id, id], name: [...selectedSeats.name, name]});
        setSeatAvailable('var(--selected-seat)');
        setAvailableBorder('var(--selected-seat-border)');
    }

    return (
        <Seat
            key={index}
            color={item.isAvailable ? seatAvailable : 'var(--seat-unavailable)'}
            border={item.isAvailable ? availableBorder : 'var(--seat-unavailable-border)'}
            onClick={item.isAvailable ? () => selectSeat(item.id, item.name) : null}>
            {item.name}
        </Seat>
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
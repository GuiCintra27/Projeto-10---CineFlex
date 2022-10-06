import { useState } from "react";
import styled from "styled-components";

export default function Seats({ item, index, clickedSeats, setClickedSeats }) {
    const [seatAvailable, setSeatAvailable] = useState('var(--seat-available)');
    const [availableBorder, setAvailableBorder] = useState('var(--seat-available-border)');

    function selectSeat(id, name) {
        if (!clickedSeats.id.includes(id)) {
            setClickedSeats({ id: [...clickedSeats.id, id], name: [...clickedSeats.name, name] });
            setSeatAvailable('var(--selected-seat)');
            setAvailableBorder('var(--selected-seat-border)');
        } else {

            let seats = {id: [], name: []};
            
            clickedSeats.id.forEach((item, index) => {
                if (item !== id) {
                    seats.id.push(item);
                    seats.name.push(clickedSeats.name[index]);
                }
            });

            setClickedSeats({ id: [...seats.id], name: [...seats.name] });
            setSeatAvailable('var(--seat-available)');
            setAvailableBorder('var(--seat-available-border)');
        }
    }

    return (
        <Seat
            key={index}
            color={item.isAvailable ? seatAvailable : 'var(--seat-unavailable)'}
            border={item.isAvailable ? availableBorder : 'var(--seat-unavailable-border)'}
            onClick={item.isAvailable ? () => selectSeat(item.id, item.name) : () => alert('Esse assento não está disponível!')}>
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
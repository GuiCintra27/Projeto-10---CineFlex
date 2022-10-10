import styled from "styled-components";

export default function SeatInformations() {
    return (
        <Informations>
            <div data-identifier="seat-selected-subtitle">
                <Seat color="var(--selected-seat)" border='var(--selected-seat-border)' />
                <p>Selecionado</p>
            </div>
            <div data-identifier="seat-available-subtitle">
                <Seat color="var(--seat-available)" border='var(--seat-available-border)' />
                <p>Disponível</p>
            </div>
            <div data-identifier="seat-unavailable-subtitle">
                <Seat color="var(--seat-unavailable)" border='var(--seat-unavailable-border)' />
                <p>Indisponível</p>
            </div>
        </Informations>
    );
}

const Informations = styled.div`
    margin-inline: auto;
    margin-bottom: 4rem;
    width: 70%;
    height: 5.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;

        p{
            font-size: 13px;
            font-weight: 400;
        }
    }
`;

const Seat = styled.div`
    margin-bottom: 1rem;
    width: 2.6rem;
    height: 2.6rem;
    background-color: ${props => props.color};
    border: 1px solid  ${props => props.border};
    border-radius: 100%;
`;
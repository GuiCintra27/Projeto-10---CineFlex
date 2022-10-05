import styled from "styled-components";

export default function SucessfullyOrder({ movie, sessionInformations, selectedSeats, buyerInformation, movieSession, titleStyle, setTitleStyle }) {
    const sessions = movieSession.days;
    let day, hour;
    if (sessions){
        day = sessions[sessionInformations.day];
        if(day){
            hour = day.showtimes[sessionInformations.hour];
        }
    }
   
    if (titleStyle[0] === 'black') {
        setTitleStyle(['var(--succesful-order)', '700']);
    }

    return (
        <>
            <Informations>
                <h1>Filme e sessão</h1>
                <p>{movie}</p>
                <p>{day.date} {hour.name}</p>
            </Informations>
            <Informations>
                <h1>Ingressos</h1>
                {selectedSeats.name.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </Informations>
            <Informations>
                <h1>Comprador</h1>
                <p>Nome: {buyerInformation.name}</p>
                <p>CPF: {buyerInformation.cpf}</p>
            </Informations>
        </>
    );
}

const Informations = styled.div`
    width: 100%;
    padding-inline: 2.8rem;
    margin-bottom: 2rem;

    h1{
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    p{
        font-size: 22px;
        font-weight: 400;
    }
`;
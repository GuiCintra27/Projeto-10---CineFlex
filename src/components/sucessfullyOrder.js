import styled from "styled-components";

export default function SucessfullyOrder({ movie, sessionInformations, selectedSeats, buyerInformation, movieSession, titleStyle, setTitleStyle }) {
    const sessions = movieSession.days;
    let day, hour;
    
    if (sessions) {
        day = sessions[sessionInformations.day];
        if (day) {
            hour = day.showtimes[sessionInformations.hour];
        }
    }

    if (titleStyle[0] === 'black') {
        setTitleStyle(['var(--succesful-order)', '700']);
    }

    let cpf = buyerInformation.cpf;

    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,
    function (regex, argumento1, argumento2, argumento3, argumento4) {
        return argumento1 + '.' + argumento2 + '.' + argumento3 + ' - ' + argumento4;
    })



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
                <p>CPF: {cpf}</p>
            </Informations>

            <Button><button>Voltar para Home</button></Button>
        </>
    );
}

const Informations = styled.div`
    width: 100%;
    padding-inline: 2.8rem;
    margin-bottom: 3rem;

    h1{
        font-size: 24px;
        font-weight: 700;
        margin-bottom: .5rem;
    }

    p{
        font-size: 22px;
        font-weight: 400;
    }
`;

const Button = styled.div`
    margin-top: 6.5rem;
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
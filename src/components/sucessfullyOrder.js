import styled from "styled-components";

export default function SucessfullyOrder({ movie, titleStyle, setTitleStyle, buyerInformation }) {
    if (titleStyle[0] === 'black') {
        setTitleStyle(['var(--succesful-order)', '700']);
    }

    console.log(movie)

    return (
        <>
            <Informations>
                <h1>Filme e sessão</h1>
                <p>{movie}</p>
                <p>24/06/2021 15:00</p>
            </Informations>
            <Informations>
                <h1>Ingressos</h1>
                <p>Assento 15</p>
                <p>Assento 16</p>
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
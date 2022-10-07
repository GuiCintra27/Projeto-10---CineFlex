import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Title from "./title";

export default function SucessfullyOrder() {
    const { seats, name, cpf, movie, date, hour } = useParams();

    let cpfStyled = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,
        function (regex, argumento1, argumento2, argumento3, argumento4) {
            return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4;
        })

    const seat = seats.split(',');
    const fullDate = date.split(',');

    return (
        <>
            <Title color='var(--succesful-order)' fontWeigth='700'>
                Pedido feito com sucesso!
            </Title>

            <Informations>
                <h1>Filme e sessão</h1>
                <p>{movie}</p>
                <p>{`${fullDate[0]}/${fullDate[1]}/${fullDate[2]}`}- {hour}</p>
            </Informations>

            <Informations>
                <h1>Ingressos</h1>
                {seat.map((item, index) => (
                    <p key={index}>Assento {item}</p>
                ))}
            </Informations>

            <Informations>
                <h1>Comprador</h1>
                <p>Nome: {name}</p>
                <p>CPF: {cpfStyled}</p>
            </Informations>

            <Button><Link to="/">Voltar para Home</Link></Button>
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

    a{  
        text-align: center;
        padding-top: .85rem;
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
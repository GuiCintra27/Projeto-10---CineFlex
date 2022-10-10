import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Loading from "./loading";
import Title from "./title";
import SeatInformations from "./seatInformations";
import Seats from "./seats";
import Footer from "./footer";
import verifyCpf from "./verifyCPF";

export default function BuyTicket() {
    const { id } = useParams();
    const [sessionInformations, setSessionInformations] = useState('');
    const [seats, setSeats] = useState('');
    const [buyersName, setBuyersName] = useState('');
    const [cpf, setCpf] = useState('');
    const [selectedSeats, setSelectedSeats] = useState({ id: [], name: [] });
    const [requestTicket, setRequestTicket] = useState(false);
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
            const date = sessionInformations.day.date.split('/');

            axios.post(buyURL, buy).then(response => {
                window.open(`/sucesso/${selectedSeats.name}/${buy.name}/${cpf}/${sessionInformations.movie.title}/${date}/${sessionInformations.name}`, '_self')
            });

            axios.post(buyURL, buy).catch(err => {
                console.log(err.response.data);
            })
        }
    }, [requestTicket]);

    function confirmRequest() {
        if (buyersName.length > 2) {
            if (verifyCpf(cpf)){
                if(selectedSeats.id.length > 0){
                    setRequestTicket('sold');
                }else{
                    alert('Acentos não selecionados!');
                }
            }else{
                alert('O cpf digitado é inválido!');
            }
        } else {
            alert('O nome deve ter pelo menos 3 caracteres!');
        }
    }

    if (seats.length === 0) {
        return <Loading />
    }

    return (
        <>
            <Title>
                Selecione o(s) assento(s)
            </Title>
            <Content>
                <SeatOptions>
                    {seats.map((item, index) => (
                        <Seats key={index} item={item} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
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
                        <input placeholder="Digite seu CPF..." onChange={(e) => setCpf(e.target.value)} pattern='[0-9] {11}' />
                    </div>
                </Inputs>
                <Button><button onClick={confirmRequest}>Reservar assento(s)</button></Button>
            </Content>
            <Footer sessionInformations={sessionInformations} />
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

const Content = styled.div`
    height: calc(100vh - 22.7rem - 6.7rem);
    overflow-y: scroll;
    margin-bottom: 1.8rem;
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
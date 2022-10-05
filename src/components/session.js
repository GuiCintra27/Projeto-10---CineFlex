import styled from "styled-components";

export default function Session({ sessionDay, weekday, date, hours, setTitle, setSessionInformations }) {
    function buyTicket(day, hour, sessionId){
        setTitle('Selecione o(s) assento(s)');
        setSessionInformations({isTrue: true, day: day, hour: hour, sessionId: sessionId});
    }

    return (
        <>
            <h1>{weekday} - {date}</h1>
            <SelectSession>
                {hours.map((item, index) => (
                    <button key={index} onClick={() => buyTicket(sessionDay, index, item.id)}>{item.name}</button>
                ))}
            </SelectSession>
        </>
    );
}

const SelectSession = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: .8rem;

    button{
        width: 8.3rem;
        height: 4.3rem;
        border-radius: 3px;
        background-color: var(--orange);
        font-size: 18px;
        color: #ffffff;
        border: none;
    }
`;
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Session({ weekday, date, hours}) {
    return (
        <>
            <h1>{weekday} - {date}</h1>
            <SelectSession>
                {hours.map((item, index) => (
                    <Link key={index} to={`/sessao/${item.id}`}>
                        <button>{item.name}</button>
                    </Link>
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
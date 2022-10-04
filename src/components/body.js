import styled from "styled-components";
import Movie from "./movie";
import filmList from "./filmList";
import { useState } from "react";

export default function Body() {
    const [selected, setSelected] = useState(false);

    return (
        <>
            <Title>
                Selecione o filme
            </Title>
            {selected === false ?
                <Poster>
                    {filmList.map((item, index) => (
                        <Movie key={index} id={index} film={item.film} cover={item.cover} setSelected={setSelected} />
                    ))}
                </Poster>
                :
                alert(selected)
            }
        </>
    );
}

const Title = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 400;
`;

const Poster = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: center;
`;
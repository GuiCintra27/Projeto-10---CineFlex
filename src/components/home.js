import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "./loading";
import Movie from "./movie";
import Title from "./title";

export default function Home() {
    const [movieList, setMovieList] = useState('');

    useEffect(() => {
        const listURL = 'https://mock-api.driven.com.br/api/v5/cineflex/movies';

        axios.get(listURL).then(response => {
            setMovieList(response.data);
        })

        axios.get(listURL).catch(err => {
            console.log(err.response.data);
        })
    }, []);

    if (movieList.length === 0) {
        return <Loading />
    }

    return (
        <>
            <Title color='black' fontWeigth='400'>
                Selecione o filme
            </Title>
            <Poster>
                {movieList.map((item, index) => (
                    <Movie key={index} id={item.id} movie={item.title} cover={item.posterURL}/>
                ))}
            </Poster>
        </>
    );
}

const Poster = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: center;
`;
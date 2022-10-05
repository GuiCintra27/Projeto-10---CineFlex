import styled from "styled-components";

export default function Movie({ id, movie, cover, setSelected, setTitle, setMovieSession }) {
    function select() {
        setSelected({id: id, status: true, footer: true});
        setTitle('Selecione o horário');
        setMovieSession(false)
    }



    return (
        <MovieInPoster>
            <img src={cover} alt={movie} onClick={select} />
        </MovieInPoster>
    );
}

const MovieInPoster = styled.div`
    width: 145px;
    height: 209px;
    padding: 0.8rem;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    img{
        width: 100%;
        height: 100%;
    }
`;
import styled from "styled-components";
import filmList from "./filmList";

export default function Footer({ selected, sessionInformations }) {
    const selectedMovie = filmList[selected], day = sessionInformations.day, hour = sessionInformations.hour, hourList = selectedMovie.session[day];

    return (
        <MovieSelected>
            <MovieInPoster>
                <img src={selectedMovie.cover} alt={selectedMovie.movie} />
            </MovieInPoster>
            <MovieInformations>
                <h1>{selectedMovie.movie}</h1>
                {sessionInformations.isTrue ?
                    <h1>{selectedMovie.session[day].day} - {hourList.hours[hour].hour}</h1>
                    :
                    null
                }
            </MovieInformations>
        </MovieSelected>
    );
}

const MovieSelected = styled.div`
    position: absolute;
    bottom: 0;
    padding: 1.4rem;
    width: 100%;
    height: 11.7rem;
    display: flex;
    align-items: center;
    gap: 1.4rem;
    background-color: var(--footer-bg-color);
    border: 1px solid var(--footer-bg-border-color);
`;

const MovieInformations = styled.div`
    h1{
        font-weight: 400;
        font-size: 26px;
    }
`;

const MovieInPoster = styled.div`
    background-color: var(--body-bg-color);
    width: 64px;
    height: 89px;
    padding: 0.8rem;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    img{
        width: 100%;
        height: 100%;
    }
`;
import styled from "styled-components";

export default function Footer({ movieSessionInfo, setMovieSessionInfo, sessionInformations, movieSession }) {
    const sessions = movieSession.days;
    let day, hour;
    if (sessions){
        day = sessions[sessionInformations.day];
        if(day){
            hour = day.showtimes[sessionInformations.hour];
        }
    }

    return (
        <MovieSelected>
            <MovieInPoster>
                <img src={movieSession.posterURL} alt={movieSession.title} />
            </MovieInPoster>
            <MovieInformations>
                <h1>{movieSession.title}</h1>
                {sessionInformations.isTrue ?
                    <h1>{day.weekday} - {hour.name}</h1>
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
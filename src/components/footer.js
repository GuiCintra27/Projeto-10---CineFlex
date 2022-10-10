import styled from "styled-components";

export default function Footer({ sessionInformations }) {
    const seatSection = sessionInformations.seats;
    return (
        <MovieSelected>
            <MovieInPoster data-identifier="movie-img-preview">
                <img src={seatSection ? sessionInformations.movie.posterURL : sessionInformations.posterURL} alt={seatSection ? sessionInformations.movie.title : sessionInformations.title} />
            </MovieInPoster>
            <MovieInformations data-identifier="movie-and-session-infos-preview">
                <h1>{seatSection ? sessionInformations.movie.title : sessionInformations.title}</h1>
                {seatSection ?
                    <h1>{sessionInformations.day.weekday} - {sessionInformations.name}</h1>
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
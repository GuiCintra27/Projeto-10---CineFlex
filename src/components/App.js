import { useState } from "react";
import Body from "./body";
import Footer from "./footer";
import GlobalStyle from "./globalStyle";
import Header from "./header";

export default function App() {
    const [selected, setSelected] = useState({status: false, footer:false});
    const [movieSession, setMovieSession] = useState('');
    const [sessionInformations, setSessionInformations] = useState({isTrue: false});

    return (
        <>
            <GlobalStyle />
            <Header />
            <Body selected={selected} setSelected={setSelected} sessionInformations={sessionInformations} setSessionInformations={setSessionInformations} movieSession={movieSession} setMovieSession={setMovieSession}/>
            {selected.footer !== false ?
                <Footer sessionInformations={sessionInformations} movieSession={movieSession}/>
                :
                null
            }
        </>
    );
}
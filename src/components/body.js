import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import BuyTicket from "./buyTicket";
import Sessions from "./sessions";
import SucessfullyOrder from "./sucessfullyOrder";

export default function Body() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sessoes/:id" element={<Sessions />} />
                    <Route path="/sessao/:id" element={<BuyTicket />} />
                    <Route path='/ingresso/:id' element={<SucessfullyOrder />} />
                </Routes>
            </BrowserRouter>
            {/*  (sessionInformations.isTrue ?
                        <BuyTicket sessionId={sessionInformations.sessionId} buyersName={buyersName} setBuyersName={setBuyersName} cpf={cpf} setCpf={setCpf} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} setRequestTicket={setRequestTicket} setTitle={setTitle} />)
                    */}
        </>
    );
}
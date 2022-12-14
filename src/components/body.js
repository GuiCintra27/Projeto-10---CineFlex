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
                    <Route path="/assentos/:id" element={<BuyTicket />} />
                    <Route path='/sucesso/:seats-:name-:cpf-:movie-:date-:hour' element={<SucessfullyOrder />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
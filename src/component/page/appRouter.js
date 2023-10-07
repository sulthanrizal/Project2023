import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../home/App";
import Menumakanan from "../../tugas1_react_js/menumakanan";
import Menuminuman from "../../tugas1_react_js/menuMimunan";
import Menukontak from "../../tugas1_react_js/menuKontak";

const AppRouter = () => (

    <Router>

        <Routes>



            <Route path="/" exact element={<App />} />
            <Route path="/Menu-makanan" element={<Menumakanan />} />
            <Route path="/Menu-minuman" element={<Menuminuman />} />
            <Route path="/Kontak" element={<Menukontak />} />

        </Routes>
    </Router>

)
export default AppRouter; 
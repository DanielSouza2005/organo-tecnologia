import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PaginaBase from "./pages/PaginaBase";
import Favoritos from "./pages/Favoritos";
import NaoEncontrada from "./pages/NaoEncontrada";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Home />}></Route>
                    <Route path="/favoritos" element={<Favoritos />}></Route>
                </Route>
                
                <Route path="*" element={<NaoEncontrada />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
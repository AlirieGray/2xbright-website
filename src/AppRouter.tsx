import {Route, Routes, BrowserRouter} from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import Conduit from "./Conduit/Conduit";
import Contact from "./Contact/Contact";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <MainPage />
                }/>
                <Route path="/games" element={
                    <Conduit />
                }/>
                <Route path="/contact" element={
                    <Contact />
                }/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
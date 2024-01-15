import {Route, Routes, BrowserRouter} from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import Conduit from './Conduit/Conduit';
import Contact from './Contact/Contact';

function AppRouter() {
    return (
            <Routes>
                <Route path='/' element={
                    <MainPage />
                }/>
                <Route path='/conduit' element={
                    <Conduit />
                }/>
                <Route path='/contact' element={
                    <Contact />
                }/>
            </Routes>
    )
}

export default AppRouter;
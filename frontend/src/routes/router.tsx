import 'typeface-inter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';
import { GlobalStyle } from '../GlobalStyle/GlobalStyle';

import Home from '../pages/Home/Home';
import LoginPage from '../pages/LoginPage/LoginPage';
import Nav from '../components/Common/Nav/Nav';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import UserForm from '../components/UserForm/UserForm';

export default function Router() {

    const { isLoggedIn } = useAuth();

    return (
        <BrowserRouter>
            <ToastContainer />
            <GlobalStyle />
            {
                isLoggedIn &&
                <Nav />
            }
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/user/create/' element={<UserForm />} />
                <Route path='/user/:type/:id' element={<UserForm />} />
            </Routes>
        </BrowserRouter>
    );
}

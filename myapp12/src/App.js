import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Loyout from './pages/Loyout'
import NoPage from './pages/NoPage'
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Loyout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="login" element={<Login />}></Route>
                    <Route path="register" element={<Register />}></Route>
                    <Route path="*" element={<NoPage/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

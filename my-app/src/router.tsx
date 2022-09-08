import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { homeProps } from './type/types';
import Navigation from "./components/Navigation/Navigation";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

const AppRouter = ({ isLoggedIn, userObj }: homeProps) => {

    return (
        <BrowserRouter>
            {/* {isLoggedIn && <Navigation />} */}
            <Routes>
                {isLoggedIn ? (
                    <>
                        <Route path="/" element={<Home />} />
                    </>
                )
                    : (
                        <>
                            <Route path="/" element={<Login />} />
                        </>
                    )
                }
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
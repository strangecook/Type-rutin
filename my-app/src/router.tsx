import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { homeProps } from './type/types';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import LeftWorks from "./Pages/LeftWorks";
import DoneWorks from "./Pages/DoneWorks";

const AppRouter = ({ isLoggedIn, userObj }: homeProps) => {

    return (
        <BrowserRouter>
            {/* {isLoggedIn && <Navigation />} */}
            <Routes>
                {isLoggedIn ? (
                    <>
                        <Route path="/" element={<Home />} />
                        <Route path="/left" element={<LeftWorks />} />
                        <Route path="/done" element={<DoneWorks />} />
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
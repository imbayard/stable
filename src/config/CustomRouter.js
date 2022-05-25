import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "../pages/Welcome.js";
import App from "../App.js";
import { Auth } from "aws-amplify";
import { AppContext } from "../libs/contextLib";
import { onError } from "../libs/errorLib";

export default function CustomRouter() {
    const [isAuthenticated, userHasAuthenticated] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(true);

    async function onLoad() {
        try {
            await Auth.currentSession();
            userHasAuthenticated(true);
        } catch(e) {
            if(e !== 'No current user'){
                onError(e);
            }
        }
    }

    return(
        <AppContext.Provider value={{isAuthenticated, userHasAuthenticated}}>
            <Routes>
                <Route path = '/' element={<App/>} />
                <Route path='/welcome' element={<Welcome />} />
            </Routes>
        </AppContext.Provider>
    )
}
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "../pages/Welcome.js";
import App from "../App.js";
import {AKOIntroduction, AKOIdealBalanceProfile, AKOActualBalanceProfile} from "../pages/AKOGettingToKnowYou";
import { Auth } from "aws-amplify";
import { AppContext } from "../libs/contextLib";
import { onError } from "../libs/errorLib";

export default function CustomRouter() {
    const [isAuthenticated, userHasAuthenticated] = useState(false);

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
                <Route path='/ako/getting-to-know-you/introduce' element={<AKOIntroduction />} />
                <Route path='/ako/getting-to-know-you/ideal-profile' element={<AKOIdealBalanceProfile />} />
                <Route path='/ako/getting-to-know-you/actual-profile' element={<AKOActualBalanceProfile />} />
            </Routes>
        </AppContext.Provider>
    )
}
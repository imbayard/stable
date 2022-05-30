import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "../pages/Welcome.js";
import App from "../App.js";
import AKOGettingToKnowYou from "../pages/AKOGettingToKnowYou";
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
                <Route path='/ako/getting-to-know-you/introduce' element={<AKOGettingToKnowYou page='introduce' />} />
                <Route path='/ako/getting-to-know-you/ideal-profile' element={<AKOGettingToKnowYou page='ideal-profile' />} />
                <Route path='/ako/getting-to-know-you/actual-profile' element={<AKOGettingToKnowYou page='actual-profile' />} />
                <Route path='/ako/getting-to-know-you/common-activities' element={<AKOGettingToKnowYou page='common-activities' />} />
                <Route path='/ako/getting-to-know-you/on-your-mind' element={<AKOGettingToKnowYou page='on-your-mind' />} />
                <Route path='/ako/getting-to-know-you/good-habit' element={<AKOGettingToKnowYou page='good-habit' />} />
                <Route path='/ako/getting-to-know-you/not-so-good-habit' element={<AKOGettingToKnowYou page='not-so-good-habit' />} />
            </Routes>
        </AppContext.Provider>
    )
}
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
    const [userObject, setUserObject] = useState({
           customerId: "",
           name: "",
           idealBalanceProfile: [],
           actualBalanceProfile: [],
           commonActivities: {
             mind: [],
             body: [],
             friends: [],
             family: [],
             mindfulness: []
           },
           thoughts: [],
           goodHabit: "",
           notSoGoodHabit: "",
           roleModels: [],
           moods: {}
    });

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
        <AppContext.Provider value={{isAuthenticated, userHasAuthenticated, userObject, setUserObject}}>
            <Routes>
                <Route path = '/' element={<App/>} />
                <Route path='/welcome' element={<Welcome />} />
                <Route path='/ako/getting-to-know-you' element={<AKOGettingToKnowYou />} />
            </Routes>
        </AppContext.Provider>
    )
}
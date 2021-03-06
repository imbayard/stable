import React from 'react';
import ReactDOM from 'react-dom/client';
import './styling/index.css';
import reportWebVitals from './config/reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

// Config
import {config} from "./config/config.js";
import CustomRouter from './config/CustomRouter.js';
import { Amplify } from 'aws-amplify';

Amplify.configure({
    Auth: {
        mandatorySignIn: true,
        region: config.cognito.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
            <CustomRouter />
      </Router>
  </React.StrictMode>
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

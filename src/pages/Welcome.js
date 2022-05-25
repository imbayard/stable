import '../styling/Welcome.css';
import React, { useState, useCallback } from "react";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";
import { onError } from "../libs/errorLib";
import UserAuthenticator from "../components/auth/UserAuthenticator";
import CodeConfirmation from "../components/auth/CodeConfirmation";
import PickOne from "../components/form/PickOne";

export default function Welcome() {

    const navigate = useNavigate();
    const { userHasAuthenticated } = useAppContext();
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [authMode, setAuthMode] = useState("Sign Up");
    const [newUser, setNewUser] = useState(null);
    const [confirmationCode, setConfirmationCode] = useState("");
    const optionsList = ["Log In", "Sign Up"];
    const handleEmailChange = useCallback(event => {
        event.preventDefault();
        setEmail(event.target.value);
    }, [setEmail]);
    const handlePasswordChange = useCallback(event => {
        event.preventDefault();
        setPassword(event.target.value);
    }, [setPassword]);
    const handleConfirmPasswordChange = useCallback(event => {
        event.preventDefault();
        setConfirmPassword(event.target.value);
    }, [setConfirmPassword]);
    const handleOptionChange = useCallback(event => {
        setAuthMode(event.target.id);
    }, [setAuthMode]);
    const handleConfirmationCodeChange = useCallback(event => {
        setConfirmationCode(event.target.value);
    }, [setConfirmationCode]);
    const validateForm = useCallback(event => {
        return email.length > 0 && password.length > 0 && (authMode !== "Sign Up" || confirmPassword.length > 0);
    }, [email, password, confirmPassword, authMode]);

    async function handleSubmit(event) {
      event.preventDefault();
      setIsLoading(true);
      if(authMode === 'Log In') {
          try {
            await Auth.signIn(email, password);
            userHasAuthenticated(true);
            navigate('/')
          } catch (e) {
            onError(e);
            setIsLoading(false);
          }
      } else {
          try {
            const newUser = await Auth.signUp({
              username: email,
              password: password,
            });
            setIsLoading(false);
            setNewUser(newUser);
          } catch (e) {
            onError(e);
            setIsLoading(false);
          }
      }
    }

    async function handleConfirmationSubmit() {
        setIsLoading(true);
        try {
            await Auth.confirmSignUp(email, confirmationCode);
            await Auth.signIn(email, password);
            userHasAuthenticated(true);
            navigate('/');
        } catch (e) {
            onError(e);
            setIsLoading(false);
        }
    }

    function WelcomeMessage() {
        if(authMode === "Sign Up") {
            return(
                <span className="welcome-body">
                    <p></p>
                </span>
            );
        } else {
            return (
                <span className="welcome-body">
                    <p>Welcome back.</p>
                </span>
            );
        }
    }

    return (
        <div>
            <span className="welcome-header">
                <h2>Welcome to Stable</h2>
            </span>
            <WelcomeMessage />
            <PickOne
                optionsList={optionsList}
                handleOptionChange={handleOptionChange}
                currentSelection={authMode}
            />
            {newUser === null ?
                <UserAuthenticator
                    authMode = {authMode}
                    email = {email}
                    password = {password}
                    confirmPassword = {confirmPassword}
                    handleEmailChange = {handleEmailChange}
                    handlePasswordChange = {handlePasswordChange}
                    handleConfirmPasswordChange = {handleConfirmPasswordChange}
                    isLoading = {isLoading}
                    validateForm = {validateForm}
                    handleSubmit = {handleSubmit}
                />
             :
                <CodeConfirmation
                    email={email}
                    confirmationCode={confirmationCode}
                    handleConfirmationCodeChange={handleConfirmationCodeChange}
                    handleConfirmationSubmit={handleConfirmationSubmit}
                    isLoading={isLoading}
                 />
            }
        </div>
    )
}
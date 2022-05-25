import TextInput from "../form/TextInput";
import LoaderButton from "../form/LoaderButton";

export default function UserAuthenticator({
    authMode,
    email,
    password,
    confirmPassword,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    isLoading,
    validateForm,
    handleSubmit
}) {

    function PasswordConfirmation() {
        if(authMode === "Sign Up") {
            return (
                <TextInput
                    label="Confirm Password"
                    value={confirmPassword}
                    changeHandler={handleConfirmPasswordChange}
                />
            )
        } else {
            return (
                <></>
            )
        }
    }

    return(
        <span className="login-wrapper">
            <span className="login-header">
                <h3>{authMode} Below</h3>
            </span>
            <span className="login-body">
                <TextInput
                    label="Email"
                    value={email}
                    changeHandler={handleEmailChange}
                />
                <TextInput
                    label="Password"
                    value={password}
                    changeHandler={handlePasswordChange}
                />
                {PasswordConfirmation()}
                <span className='login-button-row'>
                    <LoaderButton
                        size="sm"
                        type="submit"
                        isLoading={isLoading}
                        onClick={handleSubmit}
                        style={!validateForm() ? {display:'none'} : {fontWeight: 'bold'}}
                    >
                    {authMode}
                    </LoaderButton>
                </span>
            </span>
        </span>
    )
}
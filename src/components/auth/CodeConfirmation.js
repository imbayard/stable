import TextInput from "../form/TextInput";
import LoaderButton from "../form/LoaderButton";

export default function ConfirmNewUser({
    email,
    confirmationCode,
    handleConfirmationCodeChange,
    handleConfirmationSubmit,
    isLoading
}) {
    return (
        <span className='login-wrapper'>
            <span className='login-header'>
                <h3>An email was sent to {email}. Please enter the 6-digit code below.</h3>
            </span>
            <span className='login-body'>
                <TextInput
                    label="Enter Code"
                    value={confirmationCode}
                    changeHandler={handleConfirmationCodeChange}
                />
                <LoaderButton
                    size="sm"
                    type="submit"
                    isLoading={isLoading}
                    onClick={handleConfirmationSubmit}
                >
                Submit Code
                </LoaderButton>
            </span>
        </span>
    )
}
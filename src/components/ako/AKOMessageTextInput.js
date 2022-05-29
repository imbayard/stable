import TextInput from "../form/TextInput";
import LoaderButton from "../form/LoaderButton";

export default function AKOMessage({
    message,
    textInputLabel,
    textInputValue,
    handleTextInputChange,
    handleBack,
    handleNext
}) {
    function validateForm() {
        return textInputValue.length > 0;
    }
    return(
        <div>
            <span className="ako-header">
            </span>
            <span className="ako-message-list">
                <p className="ako-message anim-typewriter">{message}</p>
            </span>
            <hr />
            <span className="ako-response-body">
                <TextInput
                    label={textInputLabel}
                    value={textInputValue}
                    changeHandler={handleTextInputChange}
                />
            </span>
            <span className="ako-back-next">
                <span className="ako-back">
                {textInputLabel === 'Name' ? <></> :
                    <LoaderButton
                        onClick={handleBack}
                        style={!validateForm() ? {display:'none'} : {fontWeight: 'bold'}}
                    >Back</LoaderButton> }
                </span>
                <span className="ako-next">
                    <LoaderButton
                        onClick={handleNext}
                        style={!validateForm() ? {display:'none'} : {fontWeight: 'bold'}}
                    >Next</LoaderButton>
                </span>
            </span>
        </div>
    );
}
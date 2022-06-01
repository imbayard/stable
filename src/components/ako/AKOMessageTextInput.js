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

                <TextInput
                    label={textInputLabel}
                    value={textInputValue}
                    changeHandler={handleTextInputChange}
                    id={textInputLabel}
                />
    );
}
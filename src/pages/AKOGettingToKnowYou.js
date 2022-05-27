import "../styling/AkoInteraction.css";
import React, { useState, useCallback } from "react";
import AKOMessageTextInput from "../components/ako/AKOMessageTextInput";

export default function AKOGettingToKnowYou() {
    const [name, setName] = useState("");
    const [iterator, setIterator] = useState(0);
    const handleNameChange = useCallback(event => {
        event.preventDefault();
        setName(event.target.value);
    }, [setName]);
    const handleBack = useCallback(event => {
        iterator > 0 ? setIterator(iterator - 1) : setIterator(iterator);
    }, [iterator, setIterator]);
    const handleNext = useCallback(event => {
        iterator < 10 ? setIterator(iterator + 1) : setIterator(iterator);
    }, [iterator, setIterator]);

    return(
        <AKOMessageTextInput
            message="Hi, I'm Ako. What's your name?"
            textInputLabel="Name"
            textInputValue={name}
            handleTextInputChange={handleNameChange}
            handleBack={handleBack}
            handleNext={handleNext}
        />
    );
}
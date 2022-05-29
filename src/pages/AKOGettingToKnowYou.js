import "../styling/AkoInteraction.css";
import React, { useState, useCallback } from "react";
import AKOMessageTextInput from "../components/ako/AKOMessageTextInput";
import AKOSortableInput from "../components/ako/AKOSortableInput";
import { useNavigate } from "react-router-dom";

export function AKOIntroduction() {
    const [name, setName] = useState("");
    const [iterator, setIterator] = useState(0);
    const navigate = useNavigate();
    const handleNameChange = useCallback(event => {
        event.preventDefault();
        setName(event.target.value);
    }, [setName]);
    const handleBack = useCallback(event => {
        iterator > 0 ? setIterator(iterator - 1) : setIterator(iterator);
    }, [iterator, setIterator]);
    const handleNext = useCallback(event => {
        navigate('/ako/getting-to-know-you/ideal-profile');
    }, [navigate]);

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

export function AKOIdealBalanceProfile() {
    const navigate = useNavigate();
    const [ranks, setRanks] = useState(["Mind", "Body", "Friends", "Family", "Mindfulness"]);
    const handleRankChange = useCallback(newRanks => {
        setRanks(newRanks);
    }, [setRanks])
    const handleBack = useCallback(event => {
        navigate('/ako/getting-to-know-you/introduce');
    }, [navigate]);
    const handleNext = useCallback(event => {
        navigate('/ako/getting-to-know-you/actual-profile');
    }, [navigate]);
    return (
        <AKOSortableInput
            message="Nice to meet you! Please rank the below categories in order of importance to you. (Left is most important)"
            ranks = {ranks}
            setRanks = {handleRankChange}
            handleBack={handleBack}
            handleNext={handleNext}
        />
    );
}

export function AKOActualBalanceProfile() {
    const navigate = useNavigate();
    const [ranks, setRanks] = useState(["Mind", "Body", "Friends", "Family", "Mindfulness"]);
    const handleRankChange = useCallback(newRanks => {
        setRanks(newRanks);
    }, [setRanks])
    const handleBack = useCallback(event => {
        navigate('/ako/getting-to-know-you/ideal-profile');
    }, [navigate]);
    const handleNext = useCallback(event => {
        navigate('/ako/getting-to-know-you/actual-profile');
    }, [navigate]);
    return (
        <AKOSortableInput
            message="Schweet, now rank them by which category you engage most often (be honest, this is for nobody but you)"
            ranks = {ranks}
            setRanks = {handleRankChange}
            handleBack={handleBack}
            handleNext={handleNext}
        />
    );
}
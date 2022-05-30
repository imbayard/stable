import "../styling/AkoInteraction.css";
import React, { useState, useCallback } from "react";
import AKOMessageTextInput from "../components/ako/AKOMessageTextInput";
import AKOSortableInput from "../components/ako/AKOSortableInput";
import AKOFiveListsOfThree from "../components/ako/AKOFiveListsOfThree";
import AKOListOfThree from "../components/ako/AKOListOfThree";
import { useNavigate } from "react-router-dom";
import { useFormFields } from "../libs/hooksLib";

export default function AKOGettingToKnowYou({
    page
}) {
    const navigate = useNavigate();

    function AKOIntroduction() {
        const [name, setName] = useState("");
        const handleNameChange = useCallback(event => {
            event.preventDefault();
            setName(event.target.value);
        }, [setName]);
        const handleNext = useCallback(event => {
            navigate('/ako/getting-to-know-you/ideal-profile');
        }, [navigate]);

        return(
            <AKOMessageTextInput
                message="Hi, I'm Ako. What's your name?"
                textInputLabel="Name"
                textInputValue={name}
                handleTextInputChange={handleNameChange}
                handleNext={handleNext}
            />
        );
    }

    function AKOIdealBalanceProfile() {
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

    function AKOActualBalanceProfile() {
        const [ranks, setRanks] = useState(["Mind", "Body", "Friends", "Family", "Mindfulness"]);
        const handleRankChange = useCallback(newRanks => {
            setRanks(newRanks);
        }, [setRanks])
        const handleBack = useCallback(event => {
            navigate('/ako/getting-to-know-you/ideal-profile');
        }, [navigate]);
        const handleNext = useCallback(event => {
            navigate('/ako/getting-to-know-you/common-activities');
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

    function AKOCommonActivities() {
        const [mainFirst, mainFirstHandler] = useFormFields({
            firstInput:"",
            secondInput:"",
            thirdInput:""
        });
        const [mainSecond, mainSecondHandler] = useFormFields({
            firstInput:"",
            secondInput:"",
            thirdInput:""
        })
        const [mainThird, mainThirdHandler] = useFormFields({
            firstInput:"",
            secondInput:"",
            thirdInput:""
        })
        const [mainFourth, mainFourthHandler] = useFormFields({
            firstInput:"",
            secondInput:"",
            thirdInput:""
        })
        const [mainFifth, mainFifthHandler] = useFormFields({
            firstInput:"",
            secondInput:"",
            thirdInput:""
        })
        const handleBack = useCallback(event => {
            navigate('/ako/getting-to-know-you/actual-profile');
        }, [navigate]);
        const handleNext = useCallback(event => {
            navigate('/ako/getting-to-know-you/on-your-mind');
        }, [navigate]);
        return(
            <AKOFiveListsOfThree
                message="Now list bite-sized activities you do for each. Keep em general, i.e. 'Lift' instead of '5x5x5 bench press'"
                mainFirst={mainFirst}
                mainFirstChangeHandler={mainFirstHandler}
                mainSecond={mainSecond}
                mainSecondChangeHandler={mainSecondHandler}
                mainThird={mainThird}
                mainThirdChangeHandler={mainThirdHandler}
                mainFourth={mainFourth}
                mainFourthChangeHandler={mainFourthHandler}
                mainFifth={mainFifth}
                mainFifthChangeHandler={mainFifthHandler}
                handleBack={handleBack}
                handleNext={handleNext}
                firstLabel="Light"
                secondLabel="Challenging"
                thirdLabel="Real Tough"
            />
        );
    }

    function AKOOnYourMind() {
        const handleBack = useCallback(event => {
            navigate('/ako/getting-to-know-you/common-activities');
        }, [navigate]);
        const handleNext = useCallback(event => {
            navigate('/ako/getting-to-know-you/good-habit');
        }, [navigate]);
        const [main, mainHandler] = useFormFields({
            firstInput:"",
            secondInput:"",
            thirdInput:""
        });
        return(
            <AKOListOfThree
                message="Nice work! Now, is there anything that's been on your mind recently?"
                firstInput={main.firstInput}
                secondInput={main.secondInput}
                thirdInput={main.thirdInput}
                mainChangeHandler={mainHandler}
                firstLabel="1"
                secondLabel="2"
                thirdLabel="3"
                category="Looming Thoughts"
                handleBack={handleBack}
                handleNext={handleNext}
             />
        )
    }

    function AKOOneHabit({
        habitType
    }) {
        const [habit, setHabit] = useState("");
        const handleHabitChange = useCallback(event => {
            event.preventDefault();
            setHabit(event.target.value);
        }, [setHabit])
        var message, label, backUrl, nextUrl;
        if(habitType === "good") {
            message = "Thank you for sharing those thoughts. Now, what's a habit you do consistently that you're proud of?";
            label = "Cool Habit";
            backUrl = "/ako/getting-to-know-you/on-your-mind";
            nextUrl = "/ako/getting-to-know-you/not-so-good-habit"
        } else {
            message = "Cool! Now what's a habit you do consistently that you aren't so proud of?";
            label = "Guilty Habit";
            backUrl = "/ako/getting-to-know-you/good-habit";
            nextUrl = "/ako/getting-to-know-you/not-so-good-habit"
        }
        const handleBack = useCallback(event => {
            navigate(backUrl);
        }, [navigate]);
        const handleNext = useCallback(event => {
            setHabit("");
            navigate(nextUrl);
        }, [navigate]);
        return(
            <AKOMessageTextInput
                message={message}
                textInputLabel={label}
                textInputValue={habit}
                handleTextInputChange={handleHabitChange}
                handleBack={handleBack}
                handleNext={handleNext}
            />
        );
    }

    switch (page) {
        case "introduce":
            return(<AKOIntroduction />);
        case "ideal-profile":
            return(<AKOIdealBalanceProfile />);
        case "actual-profile":
            return(<AKOActualBalanceProfile />);
        case "common-activities":
            return(<AKOCommonActivities />);
        case "on-your-mind":
            return(<AKOOnYourMind />);
        case "good-habit":
            return(<AKOOneHabit habitType="good" />);
        case "not-so-good-habit":
            return(<AKOOneHabit habitType="bad" />);
    }
}


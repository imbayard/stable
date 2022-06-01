import "../styling/AkoInteraction.css";
import React, { useState, useCallback } from "react";
import TextInput from "../components/form/TextInput";
import AKOSortableInput from "../components/ako/AKOSortableInput";
import AKOFiveListsOfThree from "../components/ako/AKOFiveListsOfThree";
import AKOListOfThree from "../components/ako/AKOListOfThree";
import AKOSelectMany from "../components/ako/AKOSelectMany";
import AKOWrapper from "../components/ako/AKOWrapper";
import { useFormFields, useBooleanFields } from "../libs/hooksLib";

export default function AKOGettingToKnowYou() {
    const [page, handlePageChange] = useState("introduce");

    function AKOIntroduction() {
        const [name, setName] = useState("");
        const handleNameChange = useCallback(event => {
            event.preventDefault();
            setName(event.target.value);
        }, [setName]);
        function validateForm() {
            return name.length > 0;
        }

        return(
            <AKOWrapper
                message="Hi, I'm Ako. What's your name?"
                validateForm={validateForm}
                setPage={handlePageChange}
                backPage="NONE"
                nextPage="ideal-profile"
            >
                <TextInput
                    label="Name"
                    value={name}
                    changeHandler={handleNameChange}
                    id="Name"
                />
            </AKOWrapper>
        );
    }

    function AKOBalanceProfile({message, backPage, nextPage}) {
        const [ranks, setRanks] = useState(["Mind", "Body", "Friends", "Family", "Mindfulness"]);
        const [newRanks, setNewRanks] = useState([]);
        const handleRankChange = useCallback(newRanks => {
            setRanks(newRanks);
        }, [setRanks]);
        const handleNewRankChange = useCallback(newRanks => {
            setNewRanks(newRanks);
        }, [setNewRanks])
        function validateForm() {
            return newRanks.length > 4;
        }
        return (
            <AKOWrapper
                message={message}
                validateForm={validateForm}
                setPage={handlePageChange}
                backPage={backPage}
                nextPage={nextPage}
            >
                <AKOSortableInput
                    ranks = {ranks}
                    setRanks = {handleRankChange}
                    newRanks = {newRanks}
                    setNewRanks = {handleNewRankChange}
                />
            </AKOWrapper>
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
        });
        const [mainThird, mainThirdHandler] = useFormFields({
            firstInput:"",
            secondInput:"",
            thirdInput:""
        });
        const [mainFourth, mainFourthHandler] = useFormFields({
            firstInput:"",
            secondInput:"",
            thirdInput:""
        });
        const [mainFifth, mainFifthHandler] = useFormFields({
            firstInput:"",
            secondInput:"",
            thirdInput:""
        });
        function validateForm() {
            return true; //TODO
        }
        return(
            <AKOWrapper
                message="Now list bite-sized activities you do for each. Keep em general, i.e. 'Lift' instead of '5x5x5 bench press'"
                validateForm={validateForm}
                setPage={handlePageChange}
                backPage="actual-profile"
                nextPage="on-your-mind"
            >
                <AKOFiveListsOfThree
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
                    firstLabel="Light"
                    secondLabel="Challenging"
                    thirdLabel="Real Tough"
                />
            </AKOWrapper>
        );
    }

    function AKOOnYourMind() {
        const [main, mainHandler] = useFormFields({
            firstInput:"",
            secondInput:"",
            thirdInput:""
        });
        function validateForm() {
            return (main.firstInput.length > 0 && main.secondInput.length > 0 && main.thirdInput.length > 0);
        }
        return(
            <AKOWrapper
                message="Nice work! Now, is there anything that's been on your mind recently?"
                validateForm={validateForm}
                setPage={handlePageChange}
                backPage="common-activities"
                nextPage="good-habit"
            >
                <AKOListOfThree
                    firstInput={main.firstInput}
                    secondInput={main.secondInput}
                    thirdInput={main.thirdInput}
                    mainChangeHandler={mainHandler}
                    firstLabel="1"
                    secondLabel="2"
                    thirdLabel="3"
                    category="Looming Thoughts"
                />
            </AKOWrapper>
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
            backUrl = "on-your-mind";
            nextUrl = "not-so-good-habit"
        } else {
            message = "Cool! Now what's a habit you do consistently that you aren't so proud of?";
            label = "Guilty Habit";
            backUrl = "good-habit";
            nextUrl = "choose-moods"
        }
        function validateForm() {
            return habit.length > 0;
        }
        return(
            <AKOWrapper
                message={message}
                validateForm={validateForm}
                setPage={handlePageChange}
                nextPage={nextUrl}
                backPage={backUrl}
            >
                <TextInput
                    label={label}
                    value={habit}
                    changeHandler={handleHabitChange}
                    id={label}
                />
            </AKOWrapper>
        );
    }

    function AKOChooseMoods() {
        const backUrl ='not-so-good-habit';
        const nextUrl = 'choose-moods';
        const [selectedMoods, setMoods] = useBooleanFields({
            scared: false,
            happy: false,
            cheerful: false,
            furious: false,
            calm: false,
            sad: false,
            mad: false,
            excited: false,
            pleased: false,
            angry: false,
            down: false,
            unhappy: false,
            content: false,
            weak: false,
            anxious: false,
            present: false,
            joyful: false,
            miserable: false,
            frightened: false,
            confident: false
        });
        function validateForm() {
            return true;
        }
        return(
            <AKOWrapper
                message="How have you been feeling lately? (Select as many as you wish)"
                validateForm={validateForm}
                setPage={handlePageChange}
                nextPage={nextUrl}
                backPage={backUrl}
            >
                <AKOSelectMany
                    selectables={selectedMoods}
                    handleSelectedChange={setMoods}
                />
            </AKOWrapper>
        )
    }

    function renderPage() {
         switch (page) {
             case "introduce":
                 return (<AKOIntroduction />);
             case "ideal-profile":
                 return(<AKOBalanceProfile message="Nice to meet you! Please rank the below categories in order of importance to you. (Left is most important)" backPage="introduce" nextPage="actual-profile"/>);
             case "actual-profile":
                 return(<AKOBalanceProfile message="Schweet, now rank them by which category you engage most often (be honest, this is for nobody but you)" backPage="ideal-profile" nextPage="common-activities"/>);
             case "common-activities":
                 return(<AKOCommonActivities />);
             case "on-your-mind":
                 return(<AKOOnYourMind />);
             case "good-habit":
                 return(<AKOOneHabit habitType="good" />);
             case "not-so-good-habit":
                 return(<AKOOneHabit habitType="bad" />);
             case "choose-moods":
                 return(<AKOChooseMoods />)
         }
    }

    return (
        <div>
            {renderPage()}
        </div>
    )
}


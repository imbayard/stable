import "../styling/AkoInteraction.css";
import React, { useState, useCallback } from "react";
import TextInput from "../components/form/TextInput";
import AKOSortableInput from "../components/ako/AKOSortableInput";
import AKOFiveListsOfThree from "../components/ako/AKOFiveListsOfThree";
import AKOListOfThree from "../components/ako/AKOListOfThree";
import AKOSelectMany from "../components/ako/AKOSelectMany";
import AKOWrapper from "../components/ako/AKOWrapper";
import { useFormFields, useBooleanFields } from "../libs/hooksLib";
import { useAppContext } from "../libs/contextLib";

export default function AKOGettingToKnowYou() {
    const [page, handlePageChange] = useState("introduce");
    const { userObject, setUserObject } = useAppContext();
    function AKOIntroduction() {
        function validateForm() {
            return name.length > 0;
        }
        const [name, setName] = useState("");
        const handleNameChange = useCallback(event => {
            event.preventDefault();
            setName(event.target.value);
        }, [setName]);
        const handleUserObjectUpdate = value => {
            setUserObject({
                ...userObject,
                name: value
            });
        }
        return(
            <AKOWrapper
                message="Hi, I'm Ako. What's your name?"
                validateForm={validateForm}
                setPage={handlePageChange}
                backPage="NONE"
                nextPage="ideal-profile"
                handleUserObjectUpdate={handleUserObjectUpdate}
                childKey="value"
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

    function AKOBalanceProfile({message, backPage, nextPage, userObjectKey}) {
        const handleUserObjectUpdate = value => {
            setUserObject({
                ...userObject,
                [userObjectKey]: value
            })
        }
        const [ranks, setRanks] = useState(["Mind", "Body", "Friends", "Family", "Mindfulness"]);
        const [newRanks, setNewRanks] = useState([]);
        const handleRankChange = useCallback(newRanks => {
            setRanks(newRanks);
        }, [setRanks]);
        const handleNewRankChange = useCallback(newRanks => {
            setNewRanks(newRanks);
        }, [setNewRanks]);
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
                handleUserObjectUpdate={handleUserObjectUpdate}
                childKey="value"
            >
                <AKOSortableInput
                    ranks = {ranks}
                    setRanks = {handleRankChange}
                    value = {newRanks}
                    setNewRanks = {handleNewRankChange}
                />
            </AKOWrapper>
        );
    }

    function AKOCommonActivities() {
        const handleUserObjectUpdate = value => {
            setUserObject({
                ...userObject,
                commonActivities: value
            })
        }
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
                handleUserObjectUpdate={handleUserObjectUpdate}
                childKey="mainFirst"
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
        const handleUserObjectUpdate = value => {
            setUserObject({
                ...userObject,
                thoughts: value
            })
        }
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
                handleUserObjectUpdate={handleUserObjectUpdate}
                childKey="list-of-three"
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
        const handleUserObjectUpdate = value => {
            setUserObject({
                ...userObject,
                [habitType]: value
            })
        }
        const [habit, setHabit] = useState("");
        const handleHabitChange = useCallback(event => {
            event.preventDefault();
            setHabit(event.target.value);
        }, [setHabit])
        var message, label, backUrl, nextUrl;
        if(habitType === "goodHabit") {
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
                handleUserObjectUpdate={handleUserObjectUpdate}
                childKey='value'
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
        const nextUrl = 'role-models';
        const handleUserObjectUpdate = value => {
            setUserObject({
                ...userObject,
                moods: value
            })
        }
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
                handleUserObjectUpdate={handleUserObjectUpdate}
                childKey='selectables'
            >
                <AKOSelectMany
                    selectables={selectedMoods}
                    handleSelectedChange={setMoods}
                />
            </AKOWrapper>
        )
    }

    function AKORoleModels() {
        const [main, mainHandler] = useFormFields({
            firstInput:"",
            secondInput:"",
            thirdInput:""
        });
        const handleUserObjectUpdate = value => {
            setUserObject({
                ...userObject,
                roleModels: value
            })
        }
        function validateForm() {
            return (main.firstInput.length > 0 && main.secondInput.length > 0 && main.thirdInput.length > 0);
        }
        return(
            <AKOWrapper
                message="Last question... who do you respect in this world?"
                validateForm={validateForm}
                setPage={handlePageChange}
                backPage="choose-moods"
                nextPage="role-models"
                handleUserObjectUpdate={handleUserObjectUpdate}
                childKey="list-of-three"
            >
                <AKOListOfThree
                    firstInput={main.firstInput}
                    secondInput={main.secondInput}
                    thirdInput={main.thirdInput}
                    mainChangeHandler={mainHandler}
                    firstLabel="Role Model 1"
                    secondLabel="Role Model 2"
                    thirdLabel="Role Model 3"
                    category="Role Models"
                />
            </AKOWrapper>
        )
    }

    function AKOGettingToKnowYouReview() {

    }

    function renderPage() {
         switch (page) {
             case "introduce":
                 return (<AKOIntroduction />);
             case "ideal-profile":
                var userName = userObject.name;
                const msg = "Nice to meet you, " + userName + "! Please rank these in order of importance to you.";
                return(<AKOBalanceProfile message={msg} backPage="introduce" nextPage="actual-profile" userObjectKey="idealBalanceProfile"/>);
             case "actual-profile":
                 return(<AKOBalanceProfile message="Schweet, now rank them by which category you engage most often (be honest, this is for nobody but you)" backPage="ideal-profile" nextPage="common-activities" userObjectKey="actualBalanceProfile"/>);
             case "common-activities":
                 return(<AKOCommonActivities />);
             case "on-your-mind":
                 return(<AKOOnYourMind />);
             case "good-habit":
                 return(<AKOOneHabit habitType="goodHabit" />);
             case "not-so-good-habit":
                 return(<AKOOneHabit habitType="badHabit" />);
             case "choose-moods":
                 return(<AKOChooseMoods />);
             case "role-models":
                return(<AKORoleModels />);
         }
    }

    return (
        <div>
            {renderPage()}
        </div>
    )
}


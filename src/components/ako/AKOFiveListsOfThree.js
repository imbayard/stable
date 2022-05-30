import ListOfThree from "../form/ListOfThree";
import LoaderButton from "../form/LoaderButton";

export default function AKOFiveListsOfThree({
    message,
    mainFirst,
    mainFirstChangeHandler,
    mainSecond,
    mainSecondChangeHandler,
    mainThird,
    mainThirdChangeHandler,
    mainFourth,
    mainFourthChangeHandler,
    mainFifth,
    mainFifthChangeHandler,
    handleBack,
    handleNext,
    firstLabel,
    secondLabel,
    thirdLabel
}) {
    function validateForm() {
        //TODO: Complete validate form implementation
        return true;
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
                <span className='ako-five-lists-of-three-wrapper'>
                    <ListOfThree
                        first={mainFirst.firstInput}
                        second={mainFirst.secondInput}
                        third={mainFirst.thirdInput}
                        mainChangeHandler={mainFirstChangeHandler}
                        firstLabel={firstLabel}
                        secondLabel={secondLabel}
                        thirdLabel={thirdLabel}
                        category="Body"
                    />
                    <ListOfThree
                        first={mainSecond.firstInput}
                        second={mainSecond.secondInput}
                        third={mainSecond.thirdInput}
                        mainChangeHandler={mainSecondChangeHandler}
                        firstLabel={firstLabel}
                        secondLabel={secondLabel}
                        thirdLabel={thirdLabel}
                        category="Mind"
                    />
                    <ListOfThree
                        first={mainThird.firstInput}
                        second={mainThird.secondInput}
                        third={mainThird.thirdInput}
                        mainChangeHandler={mainThirdChangeHandler}
                        firstLabel={firstLabel}
                        secondLabel={secondLabel}
                        thirdLabel={thirdLabel}
                        category="Family"
                    />
                    <ListOfThree
                        first={mainFourth.firstInput}
                        second={mainFourth.secondInput}
                        third={mainFourth.thirdInput}
                        mainChangeHandler={mainFourthChangeHandler}
                        firstLabel={firstLabel}
                        secondLabel={secondLabel}
                        thirdLabel={thirdLabel}
                        category="Friends"
                    />
                    <ListOfThree
                        first={mainFifth.firstInput}
                        second={mainFifth.secondInput}
                        third={mainFifth.thirdInput}
                        mainChangeHandler={mainFifthChangeHandler}
                        firstLabel={firstLabel}
                        secondLabel={secondLabel}
                        thirdLabel={thirdLabel}
                        category="Mindfulness"
                    />
                </span>
            </span>
            <span className="ako-back-next">
                <span className="ako-back">
                    <LoaderButton
                        onClick={handleBack}
                        style={!validateForm() ? {display:'none'} : {fontWeight: 'bold'}}
                    >Back</LoaderButton>
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
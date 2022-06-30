import ListOfThree from "../form/ListOfThree";
import LoaderButton from "../form/LoaderButton";

export default function AKOFiveListsOfThree({
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
    firstLabel,
    secondLabel,
    thirdLabel
}) {
    return(
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
    );
}
import ListOfThree from "../form/ListOfThree";
import LoaderButton from "../form/LoaderButton";

export default function AKOListOfThree({
    firstInput,
    secondInput,
    thirdInput,
    mainChangeHandler,
    firstLabel,
    secondLabel,
    thirdLabel,
    category
}) {
    return(
        <span className='ako-list-of-three-wrapper'>
            <ListOfThree
                first={firstInput}
                second={secondInput}
                third={thirdInput}
                mainChangeHandler={mainChangeHandler}
                firstLabel={firstLabel}
                secondLabel={secondLabel}
                thirdLabel={thirdLabel}
                category={category}
            />
        </span>
    );
}
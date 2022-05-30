import ListOfThree from "../form/ListOfThree";
import LoaderButton from "../form/LoaderButton";

export default function AKOListOfThree({
    message,
    firstInput,
    secondInput,
    thirdInput,
    mainChangeHandler,
    firstLabel,
    secondLabel,
    thirdLabel,
    category,
    handleBack,
    handleNext
}) {
    function validateForm() {
        return (firstInput.length > 0 && secondInput.length > 0 && thirdInput.length > 0);
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
import TextInput from "./TextInput.js";

export default function ListOfThree({
    first,
    second,
    third,
    mainChangeHandler,
    firstLabel,
    secondLabel,
    thirdLabel,
    category
}) {
    return(
        <span className="list-of-three-wrapper">
            <h3>{category}</h3>
            <span className="list-of-three">
                <TextInput
                    label={firstLabel}
                    value={first}
                    changeHandler={mainChangeHandler}
                    id="firstInput"
                />
                <TextInput
                    label={secondLabel}
                    value={second}
                    changeHandler={mainChangeHandler}
                    id="secondInput"
                />
                <TextInput
                    label={thirdLabel}
                    value={third}
                    changeHandler={mainChangeHandler}
                    id="thirdInput"
                />
            </span>
        </span>
    )
}
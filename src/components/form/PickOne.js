import "../../styling/PickOne.css";

/*
    The PickOne component can only hold up to 5 options in the optionsList due to CSS knowledge limitations.
*/
export default function PickOne({
    optionsList,
    handleOptionChange,
    currentSelection
}) {
    return (
        <span className="pick-one-wrapper">
            {optionsList.map(function (option) {
                return (
                    <button
                        className="pick-option"
                        key={option}
                        id={option}
                        onClick={handleOptionChange}
                        style={(option === currentSelection) ? {backgroundColor: "#b0b0b0", fontWeight: "bold"} : {backgroundColor: "#e0e0e0"}}
                    >
                        {option}
                    </button>
                )
            })}
        </span>
    )
}
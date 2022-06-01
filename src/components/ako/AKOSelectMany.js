import Selectable from "../form/Selectable";
import LoaderButton from "../form/LoaderButton";

export default function AKOSelectMany({
    selectables,
    handleSelectedChange
}) {
    function validateForm() {
        return true;
    }
    function renderFields() {
        for (var key in selectables) {
            return(
                <Selectable
                    value={key}
                    clickHandler={handleSelectedChange}
                    clicked={selectables[key]}
                />
            )
        }
    }
    return(
        <>
            {renderFields()}
        </>
    )
}
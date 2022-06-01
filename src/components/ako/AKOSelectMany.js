import Selectable from "../form/Selectable";
import LoaderButton from "../form/LoaderButton";

export default function AKOSelectMany({
    selectables,
    handleSelectedChange
}) {
    function validateForm() {
        return true;
    }
    return(
        <span className='ako-selectables'>
            {Object.keys(selectables).map((selectable) => {
                 return(
                     <Selectable
                         value={selectable}
                         clickHandler={handleSelectedChange}
                         clicked={selectables[selectable]}
                     />
                 )
            })}
        </span>
    )
}
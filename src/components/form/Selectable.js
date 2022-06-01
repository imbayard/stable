import "../../styling/Selectable.css";

export default function Selectable({
    value,
    clickHandler,
    clicked
}) {
    return(
        <button className='selectable' id={value} onClick={clickHandler} selected={clicked} style={!clicked ? {backgroundColor: '#e0e0e0'} : {backgroundColor: '#ecf9d3'}}>{value}</button>
    )
}
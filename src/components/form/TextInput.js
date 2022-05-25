import '../../styling/TextInput.css';

export default function TextInput({label, value, changeHandler}) {
    if(label === "Password" || label === "Confirm Password") {
        return (
            <span className='text-input-wrapper'>
                <div><p>{label}</p></div>
                <input className='text-input-password' onChange={changeHandler} value={value} />
            </span>
        )
    }
    return(
    <span className='text-input-wrapper'>
        <div><p>{label}</p></div>
        <input className='text-input' onChange={changeHandler} value={value} />
    </span>
    )
}
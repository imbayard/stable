import LoaderButton from "../form/LoaderButton";

export default function AKOWrapper({
    message,
    validateForm,
    setPage,
    backPage,
    nextPage,
    ...props
}) {
    function handleBack() {
        setPage(backPage);
    }
    function handleNext() {
        setPage(nextPage);
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
                {props.children}
            </span>
            <span className="ako-back-next">
                {
                    backPage === "NONE" ? <></> :
                <span className="ako-back">
                    <LoaderButton
                        onClick={handleBack}
                        style={!validateForm() ? {display:'none'} : {fontWeight: 'bold'}}
                    >Back</LoaderButton>
                </span>
                }
                <span className="ako-next">
                    <LoaderButton
                        onClick={handleNext}
                        style={!validateForm() ? {display:'none'} : {fontWeight: 'bold'}}
                    >Next</LoaderButton>
                </span>
            </span>
        </div>
    )
}
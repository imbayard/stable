import LoaderButton from "../form/LoaderButton";
import SortableComponent from "../form/Sortable";
import DropTarget from "../form/DropTarget";
import React, { useState } from "react";
import {onError} from "../../libs/errorLib";

export default function AKOSortableInput({
    message,
    ranks,
    setRanks,
    handleBack,
    handleNext
}) {
    function validateForm() {
        return newRanks.length > 4;
    }
    const [newRanks, setNewRanks] = useState([]);
    const itemDropped = item => {
        const exists = newRanks.some(val => item === val);
        if(exists){
            onError(item + " is ranked already... sorry no duplicates.");
            return;
        }
        setNewRanks([...newRanks, item]);
    };
    const SortableElementWrapper = () => {
        return (
            <span className='ako-sortable-input'>
                {ranks.map((rank) => {
                    return(
                        <SortableComponent dataId={rank}>
                            {rank}
                        </SortableComponent>
                    )
                })}
                <hr />
            </span>
        )
    }
    const DropHereElementWrapper = () => {
        return (
            <span className='ako-sortable-output-wrapper'>
                <DropTarget onItemDropped={itemDropped}>
                    <h3>Drag & Drop Here</h3>
                    <span className='ako-sortable-output'>
                        {newRanks.map((rank, index) =>{
                            return(
                                    <button className='sortable-wrapper'>
                                        {index+1}: {rank}
                                    </button>
                            )
                        })}
                    </span>
                </DropTarget>
            </span>
        )
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
                <SortableElementWrapper />
                <DropHereElementWrapper />
            </span>
            <span className="ako-back-next">
                <span className="ako-back">
                    <LoaderButton
                        onClick={handleBack}
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
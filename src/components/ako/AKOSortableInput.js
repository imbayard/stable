import LoaderButton from "../form/LoaderButton";
import SortableComponent from "../form/Sortable";
import DropTarget from "../form/DropTarget";
import React, { useState } from "react";
import {onError} from "../../libs/errorLib";

export default function AKOSortableInput({
    ranks,
    setRanks,
    newRanks,
    setNewRanks
}) {
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
                        <SortableComponent dataId={rank} key={rank}>
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
                                    <button className='sortable-wrapper' key={index}>
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
        <>
                <SortableElementWrapper />
                <DropHereElementWrapper />
        </>
    );
}
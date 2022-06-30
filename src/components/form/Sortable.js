import React from 'react';
import '../../styling/Sortable.css';

export default function Sortable({
    dataId,
    ...props
}) {
    function startDrag(event) {
        event.dataTransfer.setData('drag-item', dataId);
    }
    return (
            <button className='sortable-wrapper' draggable onDragStart={startDrag}>
                {props.children}
            </button>
    )
}
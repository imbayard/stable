export default function DropTarget({
    onItemDropped,
    ...props
}) {
    function dragOver(event) {
        event.preventDefault();
    }
    function drop(event) {
        const droppedItem = event.dataTransfer.getData("drag-item");
        if(droppedItem) {
            onItemDropped(droppedItem);
        }
    }

    return(
        <div onDragOver={dragOver} onDrop={drop}>
            {props.children}
        </div>
    )
}
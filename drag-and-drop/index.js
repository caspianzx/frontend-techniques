const allowDrop = (e) => e.preventDefault()

const drag = (e) => {
    // sets a data type of text with the element id and transfer this data when dropping this element into the drop element
    e.dataTransfer.setData("text", e.target.id);
}

// drop element will read the data of the element dropped, takes its id and append the element as a child
const  drop = (e) => {
    e.preventDefault();
    let data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
}
// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(ele) {

    // pos 1 to 4 will be the coordinate of the mouse location in relation ot the browser screen at the point
    // of clicking

    // 1 and 2 is used to track initial click
    // 3 and 4 is used to track coordinates after dragging and be used to change the css position of the element

    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    const divHeader = document.getElementById(ele.id + "header");

    // if present, the header is where you move the DIV from:
    if (divHeader) {
        // Execute a JavaScript when pressing a mouse button this div. this is similar to onChange
        // The mousedown event is fired at an Element when a pointing device button is pressed while the pointer is inside the element.
        // calls dragMouseDown func when on mouse down is fired

        divHeader.onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        ele.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {

        // prevents activation of dragging when mouse btn isn't left click
        if (e.button !== 0 ) {
            return
        }

        // e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:

        // The clientX property returns the horizontal coordinate (according to the client area) of the mouse pointer when a mouse event was triggered
        //  The client area is the current window.
        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onmousemove = elementDrag;
        document.onmouseup = closeDragElement;
    }

    function elementDrag(e) {
        // e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:

        // p1 and p2  = old coordinate - new coordinate
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        // set the element's new position:
        // it is necessary to set position absolute so that we can change the top and left of the style

        //he HTMLElement.offsetTop read-only property returns the distance
        // of the outer border of the current element relative to the inner border of the top of the offsetParent
        // node (browser screen in our case).

        // the core idea is to change the top css to where the mouse is
        ele.style.top = (ele.offsetTop - pos2) + "px";

        ele.style.left = (ele.offsetLeft - pos1) + "px";
    }

    // stop element from moving when mouse button is released:
    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
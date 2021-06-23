const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// what is this for
let coord = { x: 0, y: 0 };

const resize = () => {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

// this should be the latest coordinate of the drawing path
const reposition = (event) => {
    // The clientX read-only property of the MouseEvent interface provides the horizontal coordinate within the
    // application's viewport at which the event occurred
    // (as opposed to the coordinate within the page).
    // read-only property returns the number of pixels that the
    // upper left corner of the current element is offset to the left within the HTMLElement.offsetParent node.
    // usually should be constant 0
    coord.x = event.clientX - canvas.offsetLeft;
    coord.y = event.clientY - canvas.offsetTop;
}

const start = (event) => {
    document.addEventListener("mousemove", draw);
    reposition(event);
}

const stop = () => {
    document.removeEventListener("mousemove", draw);
}

const draw = (event) => {
    // Creates a new path.
    // Once created, future drawing commands are directed into the path and used to build the path up.
    // Every time this method is called, the list is reset and we can start drawing new shapes.
    ctx.beginPath();

    // Sets the config for the drawing line
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#ACD3ED";
    // Moves the starting point of a new sub-path to the (x, y) coordinates.
    // Drawing will continue from here
    // When the current path is empty, such as immediately after calling beginPath(), or on a newly created canvas, the first path construction command is always treated as a moveTo(), regardless of what it actually is. For that reason
    // , you will almost always want to specifically set your starting position after resetting a path.
    ctx.moveTo(coord.x, coord.y);

    // Reposition will set the endpoint point
    reposition(event);
    // Connects the last point in the current sub-path to the specified (x, y) coordinates
    // with a straight line.
    ctx.lineTo(coord.x, coord.y);
    // Draws the shape by stroking its outline.
    ctx.stroke();
}

document.addEventListener("mousedown", start);
document.addEventListener("mouseup", stop);
window.addEventListener("resize", resize);

resize();

const clearCanvas = () => ctx.clearRect(0, 0, canvas.width, canvas.height)

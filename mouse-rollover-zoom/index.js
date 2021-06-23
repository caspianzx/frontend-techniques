const preview = document.getElementById("preview");

const zoomIn = (event) => {
    preview.style.visibility = "visible";
    preview.style.backgroundImage = `url(${event.target.src})`;

    const posX = event.offsetX;
    const posY = event.offsetY;

    // moves the zoomed image on the opposite direction of mouse movement
    preview.style.backgroundPosition=(-posX)+"px "+(-posY)+"px";
}

const zoomOut = () => {
    preview.style.visibility = "hidden";
}
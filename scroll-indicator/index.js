// When the user scrolls the page, execute this function
window.onscroll = () => setScrollProgress();

const setScrollProgress = () => {
    // Get the number of pixels the content of a <div> element is scrolled horizontally and vertically
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    // height refers to is the remaining amount of scrolling left after subtracting from
    // client height (just the height of the element without the excess scrolling)
    // this is the actual height used for calculation of % scrolled
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}
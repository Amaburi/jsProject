const Menu = document.querySelector(".wrapper"),
shareMenu = Menu.querySelector(".share-menu");

document.addEventListener("contextmenu", e => {
    e.preventDefault();

    let x = e.offsetX, y = e.offsetY,
    winWidth = window.innerWidth,
    cmwidth = Menu.offsetWidth,
    winHeight = window.innerHeight,
    cmheight = Menu.offsetHeight;

    if(x > (winWidth - cmwidth - shareMenu.offsetWidth)){
        shareMenu.style.left = "-200px";
    }else{
        shareMenu.style.left = "";
        shareMenu.style.right = "-200px";
    }
    x = x > winWidth - cmwidth ? winWidth - cmwidth : x;
    y = y > winHeight - cmheight ? winHeight - cmheight : y;

    Menu.style.left = `${x}px`;
    Menu.style.top = `${y}px`;
    Menu.style.visibility = "visible"
});
export const dragElement = function(elmnt) {
    let x = elmnt.offsetLeft, y = elmnt.offsetTop;
    console.log(`${x}, ${y}`)
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;

        x = elmnt.offsetLeft;
        y = elmnt.offsetTop;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        console.log(`${y} - ${elmnt.offsetTop}`)
        const angle = Math.atan2(x - elmnt.offsetLeft, y - elmnt.offsetTop);
        console.log(angle * 180 / Math.PI)
        let newLeft = elmnt.offsetLeft - pos1;
        let newTop = elmnt.offsetTop - pos2;
        let topBound = Math.abs(elmnt.offsetTop * Math.sin(angle)); 
        let leftBound = Math.abs(elmnt.offsetLeft * Math.cos(angle)); 
        if (newTop < topBound && newTop < x) {
            newTop = topBound;
        }
        if (newLeft < topBound && newLeft < x) {
            newLeft = leftBound;
        }

        elmnt.style.top = newTop + "px";
        elmnt.style.left = newLeft + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:

        elmnt.style.top = "2rem";
        elmnt.style.left = "2rem";
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
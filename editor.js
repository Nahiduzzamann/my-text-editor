var flag = true;
function touch(id) {
    let el = document.getElementById(id);
    el.style.backgroundColor = flag ? "#38BDF8" : "";
    flag = !flag;
}


function bold(){
    touch('bold');
}
function italic(){
    touch('italic');
}
function underline(){
    touch('underline');
}
function left(){
    touch('left');
}
function center(){
    touch('center');
}
function right(){
    touch('right');
}
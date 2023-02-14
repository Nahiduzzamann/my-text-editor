var flag = true;
function touch(id) {
    let el = document.getElementById(id);
    el.style.backgroundColor = flag ? "#38BDF8" : "";   
}
function change(className){
    let textEl = document.getElementById('textArea');
    flag ? textEl.classList.add(className) : textEl.classList.remove(className);
    flag = !flag;
}

function bold(){
    touch('bold');
    change('font-bold');
}
function italic(){
    touch('italic');
    change('italic');
}
function underline(){
    touch('underline');
    change('underline');
}
function left(){
    touch('left');
    change('text-left');
}
function center(){
    touch('center');
    change('text-center');
}
function right(){
    touch('right');
    change('text-right');
}
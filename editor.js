//double toucj button control
var flag = true;
function touch(id) {
    let el = document.getElementById(id);
    el.style.backgroundColor = flag ? "#38BDF8" : "";
}
//text area text changes
function change(className) {
    let textEl = document.getElementById('textArea');
    flag ? textEl.classList.add(className) : textEl.classList.remove(className);
    flag = !flag;
}
//text area text size by area
document.getElementById('textArea').addEventListener('click', function () {
    let TextSize = document.getElementById('size').value;
    let t = document.getElementById('textArea');
    t.style.fontSize = TextSize + 'px';
})

//text area text size by input type valu
document.getElementById('size').addEventListener('click', function () {
    let TextSize = document.getElementById('size').value;
    let t = document.getElementById('textArea');
    t.style.fontSize = TextSize + 'px';
})

//text area text color by input type color
document.getElementById('color').addEventListener('click', function (e) {
    let Icolor = document.getElementById('color').value;
    let textColor = document.getElementById('textArea');
    textColor.style.color = Icolor;
})
//text area text color by text area

document.getElementById('textArea').addEventListener('click', function () {
    let Icolor = document.getElementById('color').value;
    let textColor = document.getElementById('textArea');
    textColor.style.color = Icolor;
})
function bold() {
    touch('bold');
    change('font-bold');
}
function italic() {
    touch('italic');
    change('italic');
}
function underline() {
    touch('underline');
    change('underline');
}
function left() {
    touch('left');
    change('text-left');
}
function center() {
    touch('center');
    change('text-center');
}
function right() {
    touch('right');
    change('text-right');
}
const textEl = document.querySelector(".word");

const textArr = ['Passionate', 'Generous', 'HardWork', 'Chase'];

let idx = 0;

function UpdateWord() {
    textEl.innerText = textArr[idx];
    idx++;
    if (idx === textArr.length) {
        idx = 0;
    }
    setTimeout(UpdateWord, 1500);
}

UpdateWord();
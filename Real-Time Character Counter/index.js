const textareaEl = document.getElementById("textarea");

const totalCounterEl = document.getElementById("total");
const remainingCounterEl = document.getElementById("remaining");


textareaEl.addEventListener("keyup", () => {
    updateCounter();
});

updateCounter();

function updateCounter(){
   totalCounterEl.innerText =  textareaEl.value.length;
   remainingCounterEl.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length;

}
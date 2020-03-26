'use scrity'
const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.addEventListener("input", e => {
    text.style.fontSize = (`${e.target.value}px`);
});
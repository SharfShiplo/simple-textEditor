let input = document.getElementById("text-input");
let output = document.getElementById("text-output");
function updateText() {
  let text = input.value;
  output.innerText = text;
}

function makeBold(elem) {
  elem.classList.toggle("active");
  output.classList.toggle("bold");
}

function makeUnderline(elem) {
  elem.classList.toggle("active");
  if (output.classList.contains("underline")) {
    output.classList.remove("underline");
  } else {
    output.classList.add("underline");
  }
}
function alignText(elem, alignType) {
  elem.classList.toggle("active");
  output.style.textAlign = alignType;
  let buttonsList = document.getElementsByClassName("align");
  for (let i = 0; i < buttonsList.length; i++) {
    buttonsList[i].classList.remove("active");
  }
  elem.classList.add("active");
}

function makeItalic(elem) {
  elem.classList.toggle("active");
  output.classList.toggle("italic");
}

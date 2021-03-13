let input = document.getElementById("text-input");
let output = document.getElementById("text-output");
updateText = () => {
  let text = input.value;
  output.innerText = text;
};
makeBold = (elem) => {
  elem.classList.toggle("active");
  output.classList.toggle("bold");
};
makeUnderline = (elem) => {
  elem.classList.toggle("active");
  if (output.classList.contains("underline")) {
    output.classList.remove("underline");
  } else {
    output.classList.add("underline");
  }
};
alignText = (elem, alignType) => {
  output.style.textAlign = alignType;
  let buttons = document.getElementsByClassName("align");
  for (let button of buttons) {
    button.classList.remove("active");
  }
  elem.classList.toggle("active");
};
makeItalic = (elem) => {
  elem.classList.toggle("active");
  output.classList.toggle("italic");
};

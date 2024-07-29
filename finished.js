const input = document.getElementById("item");
const btn = document.querySelector(".btn");
let arr = [];
const ul = document.querySelector(".list");
let listItem;
let deletBtn;
let currentItem;
function mainFunc() {
  let textInput = input.value;
  if (textInput !== "" || undefined) {
    arr.push(textInput);
    console.log(arr);
  } else {
    return null;
  }
  input.value = "";
  appending();
}
function appending() {
  ul.innerHTML = "";
  for (let i = 0; i < arr.length; ++i) {
    listItem = document.createElement("li");
    deletBtn = document.createElement("button");
    deletBtn.textContent = "Delete";
    deletBtn.dataset.index = i;
    let textNode = document.createTextNode(arr[i]);
    listItem.appendChild(textNode);
    listItem.appendChild(deletBtn);
    ul.appendChild(listItem);
    deletBtn.addEventListener("click", (event) => {
      let index = event.target.dataset.index;
      arr.splice(index, 1);
      appending();
    });
  }
}

btn.addEventListener("click", mainFunc);

console.log("connected");
let calculator = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".ops");
let newElement = document.createElement("p");
const blank = document.querySelector(".blank");
let collection = "";
let clear = document.querySelector("#clear");
let equals = document.querySelector("#equals");
let sum = "";
let result =

console.log(clear);

for (let numbers of calculator) {
  numbers.addEventListener("click", function (event) {
    console.log(event.target.textContent);
    collection += event.target.textContent;
    newElement.innerText = `${collection}`;

    blank.appendChild(newElement);
  });
}
for (let ops of operators) {
  ops.addEventListener("click", function (event) {
    console.log(event.target.textContent);
    collection += event.target.textContent;
    newElement.innerText = `${collection}`;

    blank.appendChild(newElement);
  });
}

for (numbers of calculator) {
equals.addEventListener("click", function (event) {
    if (number === equals) {
    blank.innerText = eval(blank.innerText);
    } else {
      blank.innerText += event.target.textContent
    }
})
}




clear.addEventListener("click", function (event) {
    console.log(event.target.textContent);
    blank.innerText = ""
    collection = ""
})
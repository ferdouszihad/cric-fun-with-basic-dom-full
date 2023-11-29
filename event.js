// console.log("connected");
// document.getElementById("input").addEventListener("keyup", function (event) {
//   //   console.log("body clicked");
//   console.log(event.target.value);
// });
let isModalOpen = false;
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

document
  .getElementById("key-board")
  .addEventListener("click", function (event) {
    if (event.target.tagName == "KBD") {
      const display = getElement("display");
      const character = event.target.innerText; //a b
      display.innerText = display.innerText + character;
      //   console.log(event.target.innerText);
    }
  });

getElement("body").addEventListener("mousemove", function (e) {
  //   console.log(e.clientY);
  if (e.clientY < 10) {
    if (isModalOpen == false) {
      getElement("modal-btn").click();
      isModalOpen = true;
    }
  }
});

getElement("body").addEventListener("keydown", function (e) {
  console.log(e.key);
  const keys = document.getElementsByTagName("kbd"); //27
  for (let key of keys) {
    if (key.innerText == e.key) {
      key.style.backgroundColor = "tomato";
      key.click();
    } else {
      key.style.backgroundColor = "#ddd";
    }
  }
  //   console.log(keys);
});

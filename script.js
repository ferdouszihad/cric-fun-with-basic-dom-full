console.log("connected");

// body ta ke dhore niye asho
// body er background color change kore dao.
function bgLightGreen() {
  const body = document.getElementById("body");
  console.log(body);
  body.style.backgroundColor = "#C3F2D1";
}
function bgHalkaBlue() {
  const body = document.getElementById("body");
  body.style.backgroundColor = "rgb(219, 234, 254)";
}
function bgWhite() {
  const body = document.getElementById("body");
  body.style.backgroundColor = "rgb(255, 255, 255)";
}

// function increaseEarning() {
//   // jekhane 100 ache  setake dhore niye asho ( id set kore) ::done
//   const myPoint = document.getElementById("my-point");
//   console.log(myPoint.innerText);
//   const previousPoint = myPoint.innerText;

//   //myPoint er value er sathe 100 jog koro
//   const newPoint = previousPoint * 1 + 100;
//   //notun value k mypoint element e boshiye dao
//   myPoint.innerText = newPoint;
// }

document.getElementById("earn-btn").addEventListener("click", function () {
  // jekhane 100 ache  setake dhore niye asho ( id set kore) ::done
  const myPoint = document.getElementById("my-point");
  console.log(myPoint.innerText);
  const previousPoint = myPoint.innerText;

  //myPoint er value er sathe 100 jog koro
  const newPoint = previousPoint * 1 + 100;
  //notun value k mypoint element e boshiye dao
  myPoint.innerText = newPoint;
});
//sakib
document.getElementById("sakib").addEventListener("click", function () {
  const myPoint = document.getElementById("my-point");
  console.log(myPoint.innerText);
  const previousPoint = myPoint.innerText;

  if (parseInt(previousPoint) <= 0) {
    alert("Tumi ekhon fokir . Kisu Taka income koro");
    // return;
  } else {
    //myPoint er integer value er sathe 6 biyof koro
    const newPoint = parseInt(previousPoint) - 5;
    //notun value k mypoint element e boshiye dao
    myPoint.innerText = newPoint;

    const SakibsPoint = document.getElementById("sakibs-point");
    SakibsPoint.innerText = SakibsPoint.innerText * 1 + 5; //shortcut
  }
});

//maxwell
document.getElementById("max-well").addEventListener("click", function () {
  const myPoint = document.getElementById("my-point");
  console.log(myPoint.innerText);
  const previousPoint = myPoint.innerText;

  if (parseInt(previousPoint) <= 0) {
    alert("Tumi ekhon fokir . Kisu Taka income koro");
    // return;
  } else {
    //myPoint er integer value er sathe 6 biyof koro
    const newPoint = parseInt(previousPoint) - 5;
    //notun value k mypoint element e boshiye dao
    myPoint.innerText = newPoint;

    const maxsPoint = document.getElementById("max-wells-point");
    maxsPoint.innerText = maxsPoint.innerText * 1 + 5; //shortcut
  }
});
//virat
document.getElementById("virat").addEventListener("click", function () {
  const myPoint = document.getElementById("my-point");
  console.log(myPoint.innerText);
  const previousPoint = myPoint.innerText;

  if (parseInt(previousPoint) <= 0) {
    alert("Tumi ekhon fokir . Kisu Taka income koro");
    // return;
  } else {
    //myPoint er integer value er sathe 6 biyof koro
    const newPoint = parseInt(previousPoint) - 5;
    //notun value k mypoint element e boshiye dao
    myPoint.innerText = newPoint;

    const viratsPoint = document.getElementById("virats-point");
    viratsPoint.innerText = viratsPoint.innerText * 1 + 5; //shortcut
  }
});

document.getElementById("submit-btn").addEventListener("click", function () {
  const name = document.getElementById("input-name");
  const country = document.getElementById("input-country");
  const image = document.getElementById("input-image");
  if (
    name.value.length == 0 ||
    country.value.length == 0 ||
    image.value.length == 0
  ) {
    alert("Sob gula puron koro mia alosh");
    return;
  }

  const playerContainer = document.getElementById("player-container");

  const newPlayer = document.createElement("div");

  newPlayer.innerHTML = `
  <div class="player shadow-lg flex items-center gap-3 border p-3">
              <figure>
                <img
                  src=${image.value}
                  alt=""
                  class="rounded-lg"
                />
              </figure>
              <div>
                <div
                  class="m-2 p-3 inline-flex bg-cyan-300 font-bold rounded-lg shadow-inner"
                >
                  🪙 <span id="sakibs-point">0</span>
                </div>
                <h2 class="text-2xl">${name.value}</h2>
                <p>${country.value}</p>
                <button id="sakib" class="btn btn-xs mt-3 text-white btn-info">
                  Donate 5 🪙
                </button>
              </div>
            </div>

  `;
  playerContainer.appendChild(newPlayer);
});

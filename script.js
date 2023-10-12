// const p = document.querySelector("p");
// const parrafito = document.getElementsByClassName("parrafito");
// const pid = document.getElementById("pid");
const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

form.addEventListener("submit", sumarInputValues);

function sumarInputValues(event) {
  console.log({ event });
  event.preventDefault();
  const numero1 = parseFloat(input1.value);
  const numero2 = parseFloat(input2.value);
  pResult.innerText = "Resultado: " + (numero1 + numero2);
}

// console.log(h1);
// console.log({
//   h1,
//   p,
//   parrafito,
//   pid,
//   input,
// });

// h1.innerHTML = "PATITO <br> feo";
// h1.innerText = "PATITO <br> feo";
// // console.log(h1.getAttribute("class"));
// // h1.setAttribute("class", "rojo");
// h1.classList.add("rojo");
// h1.classList.remove("verde");

// input.value = "456";

// const img = document.createElement("img");

// img.setAttribute(
//   "src",
//   "https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif"
// );

// pid.replaceWith(img);

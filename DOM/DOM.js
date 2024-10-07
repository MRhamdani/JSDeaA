// console.log(document.title);

// document.title = "Ujang Rambo";

// const body = document.body;

// const h1 = document.createElement("h1");
// h1.textContent = "Hello World!";

// const namaSaya = document.createElement("b");
// namaSaya.innerHTML =
//   "<marquee>Muhammad Rhamdani | Rhamdani | Dani | Ahmad | Mad</marquee>";

// const namaKamu = document.createElement("p");
// namaKamu.innerText = "Kamu siapa?";

// body.append(h1);
// body.append(namaSaya);
// body.append(namaKamu);

const btn1 = document.getElementById("btn1");
const btn2 = document.querySelector(".btn2");

btn1.style.border = "none";
btn1.style.padding = "8px";
btn1.style.fontSize = "1.8rem";
btn1.style.color = "wheat";
btn1.style.backgroundColor = "teal";

btn2.style.border = "none";
btn2.style.padding = "8px";
btn2.style.fontSize = "1.8rem";
btn2.style.color = "teal";
btn2.style.backgroundColor = "wheat";

function tukeranWarna() {
  btn1.style.background = "wheat";
  btn1.style.color = "teal";
  btn2.style.background = "teal";
  btn2.style.color = "wheat";
}

function ubahTeks() {
  btn1.textContent = "Loh berubah dong";
  btn2.textContent = "Lah iya berubah dong";
}

function balikLagi() {
  btn1.textContent = "Loh balik dong";
  btn1.style.background = "teal";
  btn1.style.color = "wheat";
  btn2.style.background = "wheat";
  btn2.style.color = "teal";
  btn2.textContent = "Lah iya";
}

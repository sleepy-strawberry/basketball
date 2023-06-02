// dwie zmienne które będą przechowywac wynik
let score1 = 0;
let score2 = 0;
// zastępuję zawartość tekstową numberbox1 (pierwszy czarny kwadrat) wartością score1
document.getElementById("numberbox1").textContent = score1;

// deklaruję funkcję która będzie dodawać
function add1() {
  score1 = score1 + 1;
  numberbox1.textContent = score1;
}
function add2() {
  score1 = score1 + 2;
  numberbox1.textContent = score1;
}
function add3() {
  score1 = score1 + 3;
  numberbox1.textContent = score1;
}
// funkcje drugiego okna
document.getElementById("numberbox2").textContent = score2;

function Badd1() {
  score2 = score2 + 1;
  numberbox2.textContent = score2;
}
function Badd2() {
  score2 = score2 + 2;
  numberbox2.textContent = score2;
}
function Badd3() {
  score2 = score2 + 3;
  numberbox2.textContent = score2;
}

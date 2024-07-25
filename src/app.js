let boton = getcard();

function getcard() {
  document.querySelector("#numero").innerHTML = numero();
  switch (pinta()) {
    case 1:
      document.querySelector("#pinta1").innerHTML =
        "<h1 class='text-danger' style='font-size: 70px;'>♥</h1>";
      document.querySelector("#pinta2").innerHTML =
        "<h1 class='text-danger' style='font-size: 70px;'>♥</h1>";
      break;
    case 2:
      document.querySelector("#pinta1").innerHTML =
        "<h1 class='text-danger' style='font-size: 70px;'>♦</h1>";
      document.querySelector("#pinta2").innerHTML =
        "<h1 class='text-danger' style='font-size: 70px;'>♦</h1>";
      break;
    case 3:
      document.querySelector("#pinta1").innerHTML = "♣";
      document.querySelector("#pinta2").innerHTML = "♣";
      break;
    case 4:
      document.querySelector("#pinta1").innerHTML = "♠";
      document.querySelector("#pinta2").innerHTML = "♠";
      break;

    default:
      document.querySelector("#pinta1").innerHTML =
        '<i class="<i class="fa-solid fa-wrench"></i>';
      document.querySelector("#pinta2").innerHTML =
        '<i class="<i class="fa-solid fa-rocket"></i>';
      break;
  }
}
function numero() {
  let valor = Math.ceil(Math.random() * 13);
  let cartasAltas = "";
  switch (valor) {
    case 1:
      cartasAltas = "A";
      break;
    case 11:
      cartasAltas = "J";
      break;
    case 12:
      cartasAltas = "Q";
      break;
    case 13:
      cartasAltas = "K";
      break;

    default:
      cartasAltas = valor;
      break;
  }
  return cartasAltas;
}

function pinta() {
  return Math.ceil(Math.random() * 4);
}
getcard();

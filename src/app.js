let boton = getcard();

function getcard() {
  document.querySelector("#numero").innerHTML = numero();
  switch (pinta()) {
    case 1:
      document.querySelector("#pinta1").innerHTML =
        '<i class="fa-solid fa-heart"></i>';
      document.querySelector("#pinta2").innerHTML =
        '<i class="fa-solid fa-heart"></i>';
      break;
    case 2:
      document.querySelector("#pinta1").innerHTML =
        '<i class="fa-solid fa-diamond"></i>';
      document.querySelector("#pinta2").innerHTML =
        '<i class="fa-solid fa-diamond"></i>';
      break;
    case 3:
      document.querySelector("#pinta1").innerHTML =
        '<i class="fa-solid fa-clover"></i>';
      document.querySelector("#pinta2").innerHTML =
        '<i class="fa-solid fa-clover"></i>';
      break;
    case 4:
      document.querySelector("#pinta1").innerHTML =
        '<i class="fa-solid fa-rocket"></i>';
      document.querySelector("#pinta2").innerHTML =
        '<i class="fa-solid fa-rocket"></i>';
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
  return Math.ceil(Math.random() * 13);
}

function pinta() {
  return Math.ceil(Math.random() * 4);
}
getcard();

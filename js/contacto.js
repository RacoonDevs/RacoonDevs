let area = document.getElementById("comentarios");

let btnBasic = document.getElementById("btn-basic");
btnBasic.addEventListener("click", function () {
  area.value = " ";
  let saludo =
    "Hola, me encuentro interesado en saber más acerca del PAQUETE BASICO. ¿Pueden enviarme más información al respecto?";
  area.value = saludo;
  document
    .getElementById("contacto")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
});

let btnPlus = document.getElementById("btn-plus");
btnPlus.addEventListener("click", function () {
  area.value = " ";
  let saludo =
    "Hola, me encuentro interesado en saber más acerca del PAQUETE PLUS. ¿Pueden enviarme más información al respecto?";
  area.value = saludo;
  document
    .getElementById("contacto")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
});

let btnExpert = document.getElementById("btn-experto");
btnExpert.addEventListener("click", function () {
  area.value = " ";
  let saludo =
    "Hola, me encuentro interesado en saber más acerca del PAQUETE EXPERTO. ¿Pueden enviarme más información al respecto?";
  area.value = saludo;
  document
    .getElementById("contacto")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
});

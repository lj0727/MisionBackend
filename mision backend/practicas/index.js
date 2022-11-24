const parrafoInicial = document.getElementById("parrafoInicial")

console.log(parrafoInicial);

parrafoInicial.onclick = function(){
    cambiarColorAleatorio();
}

function cambiarColorAleatorio(){
const colores =[
    "red",
    "blue",
    "black",
    "cyan"
]


parrafoInicial.style.color=colores[Math.floor(Math.random()*colores.length)]
console.log (parrafoInicial);
}
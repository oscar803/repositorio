let primerequipo = ["Aserjo","Mario","Bailly","Ruiz","Jokic","Nahuel","Trigueros","Pina","Alfonso","Samuel","Soldado"]
let segundoequipo = ["Unai Simon","Padilla","Gorosable","Vivian","Paredes","Vesga","Sancet","Galarreta","Berenguer","Williams","Nico Wlilliams"]
let tercerequipo = ["Ivan Villar","Marc Vidal","O. Mingueza","Carreira","Fran Beltran","Damian","B. Iglesias","Ferran","P. Durán","Bryan","Mihailo"]
let cuartoequipo = ["Rubén Yáñez","C. J. Sánchez","Guille Rosas","Pablo García","Lucas Perrin","Nacho Martín","Gaspar Campos","Jesús Bernal","Jordy Caicedo","O. Cortés","Dubasin"]


let informacion = document.getElementById("informacion")
let villareal = document.getElementById("equipo1")
let Bilbao = document.getElementById("equipo2")
let Celta = document.getElementById("equipo3")
let Gijon = document.getElementById("equipo4")

let equipos = [villareal,Bilbao,Celta,Gijon]

function desmarcar() {
    equipos.forEach(eq => {
        eq.style.backgroundColor = "#82AEFF" 
        eq.style.color = "black"
    })
}

villareal.addEventListener("click", () => {
informacion.innerHTML = ""
desmarcar()
villareal.style.backgroundColor = "#013560"
villareal.style.color = "white"
let seccion = document.createElement("div")
let imagen = document.createElement("img")

imagen.src = "imagenes/descarga.png"
seccion.appendChild(imagen)


let seccionlista = document.createElement("div")
let ordenada = document.createElement("ol")

primerequipo.forEach(itemtexto => {
    let lista = document.createElement("li")
    lista.textContent = itemtexto
    ordenada.appendChild(lista)
})
seccionlista.appendChild(ordenada)
informacion.appendChild(seccion)
informacion.appendChild(seccionlista)
} )

Bilbao.addEventListener("click", () => {
informacion.innerHTML = ""
desmarcar()
Bilbao.style.backgroundColor = "#013560"
Bilbao.style.color = "white"
let seccion = document.createElement("div")
let imagen = document.createElement("img")

imagen.src = "imagenes/i.png"
seccion.appendChild(imagen)


let seccionlista = document.createElement("div")
let ordenada = document.createElement("ol")

segundoequipo.forEach(itemtexto => {
    let lista = document.createElement("li")
    lista.textContent = itemtexto
    ordenada.appendChild(lista)
})
seccionlista.appendChild(ordenada)
informacion.appendChild(seccion)
informacion.appendChild(seccionlista)
} )

Celta.addEventListener("click", () => {
informacion.innerHTML = ""
desmarcar()
Celta.style.backgroundColor = "#013560"
Celta.style.color = "white"
let seccion = document.createElement("div")
let imagen = document.createElement("img")

imagen.src = "imagenes/celta.png"
seccion.appendChild(imagen)


let seccionlista = document.createElement("div")
let ordenada = document.createElement("ol")

tercerequipo.forEach(itemtexto => {
    let lista = document.createElement("li")
    lista.textContent = itemtexto
    ordenada.appendChild(lista)
})
seccionlista.appendChild(ordenada)
informacion.appendChild(seccion)
informacion.appendChild(seccionlista)
} )

Gijon.addEventListener("click", () => {
informacion.innerHTML = ""
desmarcar()
Gijon.style.backgroundColor = "#013560"
Gijon.style.color = "white"

let seccion = document.createElement("div")
let imagen = document.createElement("img")

imagen.src = "imagenes/Real_Sporting_de_Gijon.svg.png"
seccion.appendChild(imagen)


let seccionlista = document.createElement("div")
let ordenada = document.createElement("ol")

cuartoequipo.forEach(itemtexto => {
    let lista = document.createElement("li")
    lista.textContent = itemtexto
    ordenada.appendChild(lista)
})
seccionlista.appendChild(ordenada)
informacion.appendChild(seccion)
informacion.appendChild(seccionlista)
} )


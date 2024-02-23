import { SZEMELYLISTA } from "./adat.js";
import { consoleraIr, listaOsszallit, kartyaOsszeallit } from "./fuggvenyek.js";
// const a=2;
//a=3 - hibaüzenet

// const LISTA = ["Géza", "Jenő"]

// LISTA = [12, 34, 96, 123]
// console.log(LISTA[1])

// LISTA[10] = "Béla"

// LISTA.push("Jakab") // a lista végére elhelyez egy elemet
// LISTA.pop() // leveszi a lista utolsó elemét

// console.log(LISTA)
// console.log(LISTA[5])
/* ismerőseim nyilvántartása*/

consoleraIr(SZEMELYLISTA)


//const FELSELEM = document.getElementById("felsorolas")
const FELSELEM = document.querySelector("#felsorolas")
FELSELEM.innerHTML="<h1>Ügyesek vagyunk!</h1>"
FELSELEM.innerHTML+=listaOsszallit(SZEMELYLISTA)
const KARTYAK = document.querySelector("#kartyaContainer")
KARTYAK.innerHTML=kartyaOsszeallit(SZEMELYLISTA)



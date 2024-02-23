

export function consoleraIr(SZEMELYLISTA){
// A személylista adatait kiírja a konzolra
// nev: "Géza" tel: "06-30-4454564"
    // console.log(SZEMELYLISTA[1].tel)
    for (let i = 0; i < SZEMELYLISTA.length; i++) {
        console.log(`Név: ${SZEMELYLISTA[i].nev} telefonszám: ${SZEMELYLISTA[i].tel}`)
    }
}
export function listaOsszallit(lista){
    let txt = "<ul>"
    for (let i = 0; i < lista.length; i++) {
        txt+=`<li>Név: ${lista[i].nev} telefonszám: ${lista[i].tel}</li>`
    }
    txt+="</ul>"
    console.log(txt)
    return txt
}
export function kartyaOsszeallit(SZEMELYLISTA){
    let txt = "<div id='kartya'>"
    for (let i = 0; i < SZEMELYLISTA.length; i++) {
        txt+=`
    <div class="kartya">
        <h3>név: ${SZEMELYLISTA[i].nev}</h3>
        <p>súly: ${SZEMELYLISTA[i].suly}</p>
        <p>tel: ${SZEMELYLISTA[i].tel}</p>
    </div>
    `
        
    }
    txt+="</div>"
    return txt
}
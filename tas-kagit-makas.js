let appKutu = document.querySelector("#app")

let oyuncuBirKutu = document.createElement("div")
let oyuncuIkiKutu = document.createElement("div")
let oynaButonu = document.createElement("button")
let oyunSayac = document.createElement("span")

let OyunSayacAdet = 0;

function rastgeleSayi(minimum, maksimum) {
    return Math.floor( Math.random() * maksimum ) + minimum
}

function sonucUret() {
    let sonuc = rastgeleSayi(1, 3)

    return sonuc
}

function sahneOlustur() {
    appKutu.append(oyuncuBirKutu, oyuncuIkiKutu, oynaButonu, oyunSayac)
    oynaButonu.textContent = "Oyna"
    oynaButonu.classList.add("btn", "btn-success")

    oynaButonu.addEventListener("click", oyna)

    oyuncuBirKutu.classList.add( "bg-primary", "p-5", "h1" )
    oyuncuIkiKutu.classList.add( "bg-secondary", "p-5", "h1")
    
}

function oyna() {
    let birinciOyuncuSonuc = sonucUret()
    let ikinciOyuncuSonuc = sonucUret()
    
    if(birinciOyuncuSonuc === 1) birinciOyuncuSonuc = "Taş"
    if(birinciOyuncuSonuc === 2) birinciOyuncuSonuc = "Kağıt"
    if(birinciOyuncuSonuc === 3) birinciOyuncuSonuc = "Makas"
    
    ikinciOyuncuSonuc = ikinciOyuncuSonuc === 1 ? "Taş" :  ikinciOyuncuSonuc === 2 ? "Kağıt" : "Makas"

    
   
    oyuncuBirKutu.textContent = birinciOyuncuSonuc
    oyuncuIkiKutu.textContent = ikinciOyuncuSonuc

     OyunSayacAdet = OyunSayacAdet + 1;
     oyunSayac.textContent = OyunSayacAdet
     oyunSayac.classList.add("badge", "bg-info")
}

sahneOlustur()

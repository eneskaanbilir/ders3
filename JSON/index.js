const elApp = document.querySelector("#app")

//1- ziyaretçinin tarayısında daha önceden  oluşturulmuş olan ziyaretSayisi anahtarı var mı?
let ziyaretSayac = localStorage.getItem("ziyaretSayisi")
if (ziyaretSayac === null){
    //daha önce hiç ziyaret sayaç kaydedilmemiş
    localStorage.setItem("ziyaretSayisi", "1")
    ziyaretSayac = 1

    let adSoyad = prompt("Görünüşe göre sayfaya ilk defa giriyorsunuz, lütfen ad soyad girin:")
    let seviye = prompt("Oyun zorluk düzeyini seçin: \n 1-kolay \n 2-orta \n 3-ZOR")


    let oyuncuBilgi = {
        adSoyad: adSoyad,
        seviye: seviye
    }
    localStorage.setItem("oyuncuBilgi", JSON.stringify(oyuncuBilgi))
} else{

//ziyaretçi taracısında daha önce ziyaret sayaç bilgisi kaydedilmiş
//değeri oku, numbera çevir, ve değeri 1 arttır, son değeri 1 arttır
ziyaretSayac = parseInt(ziyaretSayac)
ziyaretSayac++
localStorage.setItem("ziyaretSayisi", ziyaretSayac)

let oyuncuBilgiJSON = localStorage.getItem("oyuncuBilgi")
let oyuncuBilgi = JSON.parse(oyuncuBilgiJSON)

let bilgiParagraf = document.createElement("p")
bilgiParagraf.innerHTML =` <span>${oyuncuBilgi.adSoyad}</span><span>${oyuncuBilgi.seviye}</span> `
elApp.append(bilgiParagraf)

}

let sayacEleman = document.createElement("p")
sayacEleman.textContent = ziyaretSayac
elApp.append(sayacEleman)

let sayilar = document.getElementsByClassName("sayilar");
let islemler = document.getElementsByClassName("islem");
let sonuc = document.getElementById("sonuc");
let nokta = document.getElementById("nokta");
let us = document.getElementById("us");
let sqrt = document.getElementById("sqrt");
let save = document.getElementById("save");
let esit = document.getElementById("esit");
let faktoriyel = document.getElementById("faktoriyel");
let mod = document.getElementById("mod");
let temizle = document.getElementById("temizle");
let backspace = document.getElementById("backspace");
let history = document.getElementById("history");
let color = document.getElementById("color");
let ok = document.getElementById("ok");

var sonucHesapla = "";

load();

for (let i = 0; i < sayilar.length; i++) {
    sayilar[i].addEventListener("click", function () {
        sonuc.innerHTML += sayilar[i].innerHTML;
        active();

})};

for (let i = 0; i < islemler.length; i++) {
    islemler[i].addEventListener("click", function () {
        sonucHesapla = sonuc.innerHTML + islemler[i].innerHTML;
        sonuc.innerHTML = "";
    });
}

temizle.addEventListener("click", function () {
    sonuc.innerHTML = "";
    localStorage.removeItem("sonuc");
    history.innerHTML = "";
    active();
});

esit.addEventListener("click", function () {
    sonucHesapla += sonuc.innerHTML;
    sonuc.innerHTML = eval(sonucHesapla);
    history.innerHTML = sonucHesapla + " = " + eval(sonucHesapla) + "\n" + history.innerHTML;
});

nokta.addEventListener("click", function () {
    disabled();
});

us.addEventListener("click", function () {
    sonucHesapla = sonuc.innerHTML + "**";
    sonuc.innerHTML = "";
});

sqrt.addEventListener("click", function () {
    sonucHesapla = sonuc.innerHTML + " ** 0.5";
    sonuc.innerHTML = ""
});

save.addEventListener("click", function () {
    if (sonuc.innerHTML != "") {
        localStorage.setItem("sonuc", sonuc.innerHTML);
        sonuc.innerHTML = "";
    } else {
        sonuc.innerHTML = localStorage.getItem("sonuc");
    }

    active();
});

faktoriyel.addEventListener("click", function () {
    let faktoriyel = 1;
    for (let i = Number(sonuc.innerHTML); i > 1; i--) {
        faktoriyel *= i;
    }
    sonuc.innerHTML = faktoriyel;
});

mod.addEventListener("click", function () {
    sonucHesapla = sonuc.innerHTML + "%";
    sonuc.innerHTML = "";
});

ok.addEventListener("click", function () {
    localStorage.setItem("color", color.value);
    changeColor();
});

backspace.addEventListener("click", function () {
    sonuc.innerHTML = sonuc.innerHTML.slice(0, -1);
    active();
});

function disabled(){
    for (let i = 0; i < islemler.length; i++) {
        islemler[i].disabled = true;
        islemler[i].style.backgroundColor = "grey";
    }
    us.disabled = true;
    sqrt.disabled = true;
    faktoriyel.disabled = true;
    mod.disabled = true;
    us.style.backgroundColor = "grey";
    sqrt.style.backgroundColor = "grey";
    faktoriyel.style.backgroundColor = "grey";
    mod.style.backgroundColor = "grey";
}

function active(){
    for (let i = 0; i < islemler.length; i++) {
        islemler[i].disabled = false;
    }
    us.disabled = false;
    sqrt.disabled = false;
    faktoriyel.disabled = false;
    mod.disabled = false;
    changeColor();
}

function changeColor(){
    for (let i=0; i<document.getElementsByTagName("button").length; i++){
        document.getElementsByTagName("button")[i].style.backgroundColor = color.value;
        document.getElementsByTagName("table")[0].style.borderColor = color.value;
        document.getElementsByTagName("textarea")[0].style.borderColor = color.value;

    }
}

function load(){
    sonuc.innerHTML = localStorage.getItem("sonuc");
    history.innerHTML = localStorage.getItem("history");
    color.value = localStorage.getItem("color");
    changeColor();
}

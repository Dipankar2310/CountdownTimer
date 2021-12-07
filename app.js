console.log(2);
let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let seconds = document.querySelector(".seconds");
let minutes = document.querySelector(".minutes");
let time = 1209600;
function getTime() {

    const d = 24 * 60 * 60;
    const h = 60 * 60
    const m = 60;
    let nod = Math.floor(time / d);
    let noh = Math.floor((time % d) / h);
    let nom = Math.floor((time % h) / m);
    let nos = Math.floor(time % m);
    if (nod < 10) {
        nod = `0${nod}`;
    }
    if (noh < 10) {
        noh = `0${noh}`;
    }
    if (nom < 10) {
        nom = `0${nom}`;
    }
    if (nos < 10) {
        nos = `0${nos}`;
    }
    days.innerHTML = nod;
    hours.innerHTML = noh;
    minutes.innerHTML = nom;
    seconds.innerHTML = nos;
    time = time - 1;
    setTimeout(getTime, 1000);
}

getTime();

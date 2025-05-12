let menumobile = document.querySelector(".menumobile");
let xizinho = document.querySelector(".xizinho");

async function abrirmenu() {
    menumobile.style.display = "flex";
    xizinho.style.display = "block";
    console.log("funfando");
}

function fecharmenu() {
    menumobile.style.display = "none";
    xizinho.style.display = "none";
    console.log("funfando");
}
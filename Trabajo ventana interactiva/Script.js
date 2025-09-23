const buttonAbrir = document.getElementById("abrirModalBtn");
const buttonCerrar = document.getElementById("cerrarModalBtn");
const overlay = document.getElementById("modalOverlay");

buttonAbrir.addEventListener("click", function(){
    overlay.classList.add("visible");
});

buttonCerrar.addEventListener("click", function(){
    overlay.classList.remove("visible");
});

overlay.addEventListener("click", function(){
    if(e.target === overlay){
        overlay.classList.remove("visible");
    }
});


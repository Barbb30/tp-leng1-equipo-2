const boton = document.getElementById("modo");

boton.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        boton.innerHTML="☀️ Modo claro";

    }else{

        boton.innerHTML="🌙 Modo oscuro";

    }

});

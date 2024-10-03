


function home(){

    location.reload('/index.html');
}

function hideContainer(event) {
    // Obtén el texto del enlace que se hizo clic
    const clickedText = event.target.textContent;

    // Si el enlace clickeado no es "1.1", haz desaparecer el div
    if (clickedText !== "1.1") {
        const container = document.querySelector(".container1-1");
        container.style.display = "none";  // Esto hace que el div desaparezca
    }else{
        const container = document.querySelector(".container1-1");
        container.style.display = "block";  // Esto hace que el div reaparezca
    }

    
    if(clickedText !== "1.2"){
        const container = document.querySelector(".container1-2");
        container.style.display = "none";  // Esto hace que el div desaparezca
    }else{
        const container = document.querySelector(".container1-2");
        container.style.display = "block";  // Esto hace que el div reaparezca
    }


    if(clickedText !== "1.3"){
        const container = document.querySelector(".container1-3");
        container.style.display = "none";  // Esto hace que el div desaparezca
    }else{
        const container = document.querySelector(".container1-3");
        container.style.display = "block";  // Esto hace que el div reaparezca
    }


    if(clickedText !== "1.4"){
        const container = document.querySelector(".container1-4");
        container.style.display = "none";  // Esto hace que el div desaparezca
    }else{
        const container = document.querySelector(".container1-4");
        container.style.display = "block";  // Esto hace que el div reaparezca
    }


    if(clickedText !== "1.5"){
        const container = document.querySelector(".container1-5");
        container.style.display = "none";  // Esto hace que el div desaparezca
    }else{
        const container = document.querySelector(".container1-5");
        container.style.display = "block";  // Esto hace que el div reaparezca
    }
}

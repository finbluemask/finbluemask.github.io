

const img = document.getElementById("img")
const play = document.getElementById("play")


const audio1 = new Audio("./creepy-ambient-7539 (1).mp3");

img.addEventListener("click", function() {


    img.style.opacity = "0";
    img.style.opacity = "1";

    audio1.play();

    setTimeout(() => {
        audio1.pause();
        window.close();
    }, 8000);


 
  

});

play.addEventListener("click", function() {


    alert("¡coming soon!");
  
});
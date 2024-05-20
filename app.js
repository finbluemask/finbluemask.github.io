

const img = document.querySelector(".img");
const play = document.getElementById("play")

img.addEventListener("click", function() {
    if(this.classList.contains("littleImg")) {
        this.classList.remove("littleImg")
    } else {
        this.classList.add("littleImg");
    }

});

play.addEventListener("click", function() {
    alert("¡coming soon!");
  
});
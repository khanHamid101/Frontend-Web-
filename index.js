const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const colorName= document.querySelector(".color");
const btn= document.querySelector(".btn");
btn.addEventListener("click", function(e){
   var randomNumber= getRandomNumber(e);
    document.body.style.backgroundColor=colors[randomNumber];
    colorName.textContent=colors[randomNumber];
})
function getRandomNumber(e){
    return Math.floor(Math.random()*colors.length);
}
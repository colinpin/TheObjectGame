var health = 100;
function slap(){
    health --;
    document.getElementById("pHealth").textContent = health.toString();
}
function punch(){
    health -=5;
    document.getElementById("pHealth").textContent = health.toString();
}
function kick(){
    health -=10;
    document.getElementById("pHealth").textContent = health.toString();
}
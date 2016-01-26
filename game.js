var health = 100;
function slap(){
    health --;
    document.getElementById("pHealth").textContent = health.toString();
}
function punch(){
    health-5;
    alert(health);
}
function kick(){
    health -10;
    alert(health);
}
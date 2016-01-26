var player = {
    health: 100,
    slap: function () {
        this.health--;
        this.update();
    },
    punch: function () {
        this.health -= 5;
        this.update();
    },
    kick: function () {
        this.health -= 10;
        this.update();
    },
    update: function () {
        document.getElementById("pHealth").textContent = this.health.toString();
    }
};
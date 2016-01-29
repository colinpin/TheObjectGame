var player = {
    //Step 6: Declaring 2 more variables "name" and "hits"
    name: "Leonidas",
    hits: 0,
    health: 100,
    slap: function (slap) {
        this.health--;
        this.hits ++;
        this.update();
        this.numOfHits();
        
    },
    punch: function (punch) {
        this.health -= 5;
        this.hits ++;
        this.update();
        this.numOfHits();
       
    },
    kick: function (kick) {
        this.health -= 10;
        this.hits ++;
        this.update();
        this.numOfHits();
    },
    update: function () {
        document.getElementById("pHealth").textContent = this.health.toString();
        
    },
    numOfHits: function () {
        document.getElementById("sHits").textContent = this.hits;
    }
}

document.getElementById("sName").textContent = player.name;
document.getElementById("sHits").textContent = player.hits;
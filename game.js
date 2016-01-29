var player = {
    health: 100,
    hits: 0,
    name: "King Kong",
    proWidth: document.getElementById("pBar"),
    //Slap, Punch, and Kick: subtracts players health by a defined number in the corresponding function.
    //Increase the Hit count by 1 and calls in the update function that will update health and hit. 
    slap: function () {
        this.health--;
        this.hit();
        this.barUpdate();
        this.update();
    },
    punch: function () {
        this.health -= 5;
        this.hit();
        this.barUpdate();
        this.update();
    },
    kick: function () {
        this.health -= 10;
        this.hit();
        this.barUpdate();
        this.update();
    },
    combo: function () {
        this.health -= 25;
        this.hit();
        this.barUpdate();
        this.update();
    },
    death: function () {
        this.health -= this.health;
        this.hit();
        this.barUpdate();
        this.update();
    },
    //Updates the players health and player hits after damage and hit as been updated accordingly
    //Updates color of the panel based on the players health.  Flashes the color to show damaged happen.
    update: function () {
        document.getElementById("pHealth").textContent = this.health.toString();
        document.getElementById("pHits").innerText = this.hits.toString();
        this.damaged();
        if (player.health <= 50) {
            document.getElementById("player-panel").classList.add("panel-warning");
            if (player.health <= 25) {
                document.getElementById("player-panel").classList.add("panel-danger");
                if (player.health === 0) {
                    death();
                }
            }
        }

    },
    barUpdate: function () {
        this.proWidth.style.width = this.health + '%';
        if (player.health <= 50) {
            document.getElementById("pBar").classList.add("progress-bar-warning");
            if (player.health <= 25) {
                document.getElementById("pBar").classList.add("progress-bar-danger");
            }
        }

    },
    //Allows players to name the player.
    reName: function () {
        this.name = prompt("Give yourself a name to be called as", "King Kong");
        document.getElementById("pName").textContent = this.name;
    },
    //keeping track of how many times a hit button as been selected.
    hit: function () {
        this.hits += 1;
    },
    damaged: function () {
        if (player.health > this.alive) {
            document.getElementById("playerpanel-body").style.backgroundColor = "red";
            setTimeout("changeColor('green')", 100)
            if (player.health <= 50) {
                document.getElementById("playerpanel-body").style.backgroundColor = "red";
                setTimeout("changeColor('yellow')", 100)
                if (player.health <= 25) {
                    document.getElementById("playerpanel-body").style.backgroundColor = "black";
                    setTimeout("changeColor('red')", 100)
                }
            }
        } else if (player.health < 0) {
            document.getElementById("player-panel").classList.add("panel-danger");
            document.getElementById("playerpanel-body").style.backgroundColor = "red";
            this.proWidth.style.width = 0 + '%';
            alert("Didn't any ever to tell you it isn't nice to hit someone when their down?");
            reset();
        }
    },
    alive: this.health > 0,
};

function changeColor(info) {
    document.getElementById("playerpanel-body").style.backgroundColor = info;
}
//Player.health = 0, Changes panel color to red, sets background color to red, and alears player their dead.
function death() {
    document.getElementById("player-panel").classList.add("panel-danger");
    document.getElementById("playerpanel-body").style.backgroundColor = "red";
    alert("Sorry " + player.name + "! You died! *Queue* 'worlds smallest violen'");
    reset();
}
function reset() {
    player.health = 100;
    player.hits = 0;
    player.name = "King Kong";
    document.getElementById("pBar").classList.add("progress-bar-success");
    document.getElementById("player-panel").classList.add("panel-success");
    player.update();
    player.barUpdate();

}
var progressBarSuccess =  document.getElementById("pBar").classList.add("progress-bar-success")

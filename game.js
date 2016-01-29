<<<<<<< HEAD
var Item = function(itemName, itemModifier, itemDescription){
    this.nameOfItem = itemName;
    this.itemModifer = itemModifier;
    this.itemDesc = itemDescription;
    
}

var items = {
    shield: new Item("Shield",0.3,"This is an awesome shield!"),
    axe: new Item("Axe",0.3,"This axe hurts you!"),
    bazooka: new Item("Bazooka",0.3,"This Bazooka will take away 50% of your life!"),
    instaLife: new Item("Instant Life", 1.0, "This brings your life back to 100%"),
    apple: new Item("Apple", 0.2, "This healthy apple will give you 20% life.")
}

 items:[items.shield]; items:[items.axe]; items:[items.bazooka]; items:[items.instaLife]; items:[items.apple]
 
=======
var Item = function (itemName, itemModifier, itemDescription) {
    this.name = itemName;
    this.modifier = itemModifier;
    this.description = itemDescription;
};

var items = {
    shield: new Item("Shield", 0.3, "Block the attacks!"),
    sword: new Item("Sword", 1.5, "Stabbem!"),
    helmet: new Item("Helmet", 0.1, "Protect your dome!"),
    sandals: new Item("Sandals", .05, "Hey, nice flipflops!")
};
>>>>>>> origin/master

var player = {
    health: 100,
    hits: 0,
    name: "King Kong",
    proWidth: document.getElementById("pBar"),
    playerItems: [items.shield, items.sword],
    //Slap, Punch, and Kick: subtracts players health by a defined number in the corresponding function.
    //Increase the Hit count by 1 and calls in the update function that will update health and hit. 
    
    
    addmods: function () {
        var modifierTotal = 0;
        for (var index = 0; index < this.playerItems.length; index++) {
            modifierTotal += this.playerItems[index].modifier;
            console.log(modifierTotal);
        }
    },
    slap: function () {
        this.addmods();
        this.health--;
        this.hit();
        this.damaged();
        this.barUpdate();
        this.update();
    },
    punch: function () {
        this.addmods();
        this.health -= 5;
        this.hit();
        this.damaged();
        this.barUpdate();
        this.update();
    },
    kick: function () {
        this.addmods();
        this.health -= 10;
        this.hit();
        this.damaged();
        this.barUpdate();
        this.update();
    },
    combo: function () {
        this.addmods();
        this.health -= 25;
        this.hit();
        this.damaged();
        this.barUpdate();
        this.update();
    },
    death: function () {
        this.addmods();
        this.health -= this.health;
        this.hit();
        this.damaged();
        this.barUpdate();
        this.update();
    },
    //Updates the players health and player hits after damage and hit as been updated accordingly
    //Updates color of the panel based on the players health.  Flashes the color to show damaged happen.
    update: function () {
        document.getElementById("pHealth").textContent = this.health.toString();
        document.getElementById("pHits").innerText = this.hits.toString();
        document.getElementById("pName").textContent = this.name;
        if (this.health <= 50) {
            document.getElementById("player-panel").classList.add("panel-warning");
            if (this.health <= 25) {
                document.getElementById("player-panel").classList.add("panel-danger");
                if (this.health === 0) {
                    death();
                }
            }
        }

    },
    barUpdate: function () {
        this.proWidth.style.width = this.health + '%';
        if (this.health <= 50) {
            document.getElementById("pBar").classList.remove("progress-bar-success");
            document.getElementById("pBar").classList.add("progress-bar-warning");
            if (this.health <= 25) {
                document.getElementById("pBar").classList.remove("progress-bar-warning");
                document.getElementById("pBar").classList.add("progress-bar-danger");
            }
        }

    },
    //Allows players to name the player.
    reName: function () {
        this.name = prompt("Give yourself a name to be called as", "King Kong");
        this.update();
    },
    //keeping track of how many times a hit button as been selected.
    hit: function () {
        this.hits += 1;
    },
    damaged: function () {
        if (this.health > this.alive) {
            document.getElementById("playerpanel-body").style.backgroundColor = "red";
            setTimeout("changeColor('green')", 100)
            if (this.health <= 50) {
                document.getElementById("playerpanel-body").style.backgroundColor = "red";
                setTimeout("changeColor('yellow')", 100)
                if (this.health <= 25) {
                    document.getElementById("playerpanel-body").style.backgroundColor = "black";
                    setTimeout("changeColor('red')", 100)
                }
            }
        } else if (this.health < 0) {
            document.getElementById("pBar").classList.remove("progress-bar-warning");
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

function cleanUp() {
    document.getElementById("pName").textContent = player.name;
    document.getElementById("pBar").classList.remove("progress-bar-warning")
    document.getElementById("pBar").classList.remove("progress-bar-danger")
    document.getElementById("pBar").classList.add("progress-bar-success");
    document.getElementById("player-panel").classList.remove("panel-warning");
    document.getElementById("player-panel").classList.remove("panel-danger");
    document.getElementById("player-panel").classList.add("panel-success");
    document.getElementById("playerpanel-body").style.backgroundColor = "green";
}

function reset() {
    player.health = 100;
    player.hits = 0;
    player.name = "King Kong";
    cleanUp();
    player.update();
    player.barUpdate();

}
<<<<<<< HEAD
var progressBarSuccess =  document.getElementById("pBar").classList.add("progress-bar-success")




=======


//console.log(items.shield.modifier)
//console.log(items.sword.modifier)
>>>>>>> origin/master

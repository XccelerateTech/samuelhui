class Player {
    constructor(x) {
        this.name = x.name;
        this.health = x.health;
        this.alive = true;
        this.atkCount = 0
    }

    isDead() {
        if (this.health <= 0) {
            this.alive = false
        } else {
            this.alive = true;
        }
    }
}

let player1 = new Player({
    name: "Police",
    health: 100
})
let player2 = new Player({
    name: "Robber",
    health: 100
})


function attack(player) {
    player.health -= 10
}

function heal(player) {
    if (player.atkCount == 3) {
        player.health += 5
        player.atkCount = 0
        console.log(`${player.name} three streak attacks!! Health +5`)
    }
}


function playerAtk(x, y) {
    if (x.alive == true && y.alive == true) {
        for (;
            (x.alive == true && y.alive == true);) {
            if (Math.round(Math.random()) == 0) {
                x.atkCount = 0
                y.atkCount += 1
                attack(x)
                console.log(`${y.name} attack (10) ${x.name}.`)
                heal(y)
                console.log(`${x.name}'s HP: ${x.health} | ${y.name}'s HP: ${y.health}`)
                x.isDead()

            } else {
                y.atkCount = 0
                x.atkCount += 1
                attack(y)
                console.log(`${x.name} attack (10) ${y.name}.`)
                heal(x)
                console.log(`${x.name}'s HP: ${x.health} | ${y.name}'s HP: ${y.health}`)
                y.isDead()

            }
        }
    }
    if (x.alive == true) {
        console.log(`${x.name} win!`)
    } else {
        console.log(`${y.name} win!`)
    }
}
playerAtk(player1, player2)
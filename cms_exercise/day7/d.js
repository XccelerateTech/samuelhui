class Monster {  //how to use it: var moster1 = new Moster({name: 'Moster1', health:100 });
  constructor(x){
    this.name = x.name;
    this.health = x.health;
  }
  wounded(damage){
    if (this.health > 0){
      this.health = this.health - damage;
      if(this.health <= 0){
        console.log(this.name +" dead")
      }else{
        console.log(this.name +" health: " + this.health)
      }
    }else{
      console.log("damn, this monster is dead as fuck")
    }
  }
}
function heroAttack(monsterName){
  monsterName.wounded((Math.floor(Math.random() * (16)) + 5))
}

var monster1 = new Monster({name:"monster1", health:20})
var monster2 = new Monster({name:"monster2", health:30})

//let's try attacking moster 1 three times!
heroAttack(monster1)
heroAttack(monster1)
heroAttack(monster1)

class Animal {
    constructor(name, fly, feedMilk, swim, layEggs){
      this.name = name;
      this.fly = fly;
      this.feedMilk = feedMilk;
      this.swim = swim;
      this.layEggs = layEggs;
    }
  
    can_fly(){
      if(this.fly == true){
        return `A ${this.name} can fly`
      }else{
        return `A ${this.name} can't fly`
      }
    }
    can_feedMilk(){
      if(this.feedMilk == true){
        return `A ${this.name} can feed milk`
      }else{
        return `A ${this.name} can't feed milk`
      }
    }
    can_swim(){
      if(this.swim == true){
        return `A ${this.name} can swim`
      }else{
        return `A ${this.name} can't swim`
      }
    }
    can_layEggs(){
      if(this.layEggs == true){
        return `A ${this.name} can lay eggs`
      }else{
        return `A ${this.name} can't lay eggs`
      }
    }
  }
  
  let Bat = new Animal("Bat", true, true, false, false)
  let Fish = new Animal("Fish", false, false, true, true)
  let Whale = new Animal("Whale", false, true, true, false)
  let Bird = new Animal("Bird", true, false, false, true)
  
  console.log(Bird.can_fly())
  console.log(Bat.can_swim())
  console.log(Whale.can_layEggs())
  
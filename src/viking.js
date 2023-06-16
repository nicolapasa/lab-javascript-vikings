// Soldier
class Soldier {
    constructor(health, strength) {

        this.health=health
        this.strength=strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
         this.health-=damage
    }
}

// Viking
class Viking extends Soldier {
constructor(name,health, strength) {
    super(health, strength)
    this.name=name
     }

      receiveDamage(damage){
        this.health-=damage
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`
        }
        else{
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return "Odin Owns You All!"
    }


}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
    super(health, strength)
    }
      receiveDamage(damage){
        this.health-=damage
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`
        }
        else{
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {

    constructor(){
        this.vikingArmy=[]
        this.saxonArmy=[]
    }

    addViking(viking){
           this.vikingArmy.push(viking)
    }
     addSaxon(saxon){
           this.saxonArmy.push(saxon)
    }

    vikingAttack(){
       const damage= this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)].strength
       let indexSaxon=Math.floor(Math.random()*this.saxonArmy.length)
       this.saxonArmy[indexSaxon].receiveDamage(damage)
       if( this.saxonArmy[indexSaxon].health<0) this.saxonArmy.splice(indexSaxon, 1)
       return this.saxonArmy[indexSaxon].receiveDamage(damage)
         
    }
    saxonAttack(){
        const damage= this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)].strength
        let indexViking=Math.floor(Math.random()*this.vikingArmy.length)
        this.vikingArmy[indexViking].receiveDamage(damage)
        if( this.vikingArmy[indexViking].health<0) this.vikingArmy.splice(indexViking, 1)
        return this.vikingArmy[indexViking].receiveDamage(damage)
          
     }

     showStatus(){
        if(this.saxonArmy.length===0) return `Vikings have won the war of the century!`
        if(this.vikingArmy.length===0) return `Saxons have fought for their lives and survived another day...`
        return `Vikings and Saxons are still in the thick of battle.`
     }
}


const Odin=new Viking("Odin", 100, 10)
const Lothar=new Viking("Lothar", 100, 10)
const saxon1=new Saxon(50, 10)
const saxon2=new Saxon(50, 10)

const war=new War()

war.addViking(Odin)
war.addViking(Lothar)
war.addSaxon(saxon1)
war.addSaxon(saxon2)
console.log(war.vikingAttack())
console.log(war.saxonAttack())
console.log(war.vikingAttack())
console.log(war.saxonAttack())

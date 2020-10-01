// Blue Print of a Crab
class Crab{
    constructor(name, weapon,spaceShip, speed){
        this.name = name;
        this.weapon = weapon;
        this.spaceShip = spaceShip;
        this.speed = speed;
        this.health = 200;
    }

    // Methods allow a class to have abilities
    showStats(){
        console.log(`Name: ${this.name}\nWeapon: ${this.weapon}\nSpace Ship: ${this.spaceShip}\nSpeed: ${this.speed}\nHealth: ${this.health}`);
    }

    attack(target){
        if(target.health <= 0){
            target.health = 0;
            console.log(`${this.name} has defeated ${target.name}!!!`)
        }
        else{
            var dmg = this.speed * 2;
            target.health -= dmg;
            console.log(`${this.name} has attacked ${target.name} for ${dmg} health.`);
        }
    }
}


class Jedi extends Crab{
    constructor(name,spaceShip,speed,mCH){
        super(name,"Light Saber",spaceShip,speed);
        this.mCH = mCH;
    }

    attack(target){
        super.attack(target);
        this.health = 3 * this.mCH;
    }
}

class Sith extends Crab{
    constructor(name,spaceShip,speed,mCH){
        super(name,"Light Saber",spaceShip,speed);
        this.mCH = mCH;
    }

    attack(target){
        super.attack(target);
        var dmg = this.mCH * .03;
        target.health -= dmg;
    }
}

var obiWan = new Jedi("Obi Wan Crabnobi","Millenium Crabcon",35,3000);
var darthMullosk = new Sith("Darth Mullosk","Claw Fighter",50,2000);

obiWan.showStats();
darthMullosk.showStats();
// darthMullosk.attack(obiWan);

// obiWan.showStats();

while(obiWan.health > 0 || darthMullosk.health > 0){
    obiWan.attack(darthMullosk);
    darthMullosk.attack(obiWan);
}



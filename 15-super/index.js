// super
class Hero {
  constructor(name, hp, damage) {
    this.name = name;
    this.hp = hp;
    this.damage = damage;
  }

  applyDamage(damage) {
    this.hp -= damage;
  }

  attack(enemy) {
    enemy.applyDamage(this.damage);
  }
}
// const heroA = new Hero('A', 100, 10);
// const heroB = new Hero('B', 200, 5);
// console.log({heroA, heroB});

// heroA.attack(heroB);

// console.log({heroA, heroB});

class rangeHero extends Hero {
  constructor(name, hp, damage, range) {
    super(name, hp, damage);
    this.range = range;
  }

  attack(enemy) {
    super.attack(enemy);
    this.hp += this.damage;
  }
}

const heroA = new rangeHero('A', 100, 10, 2);
const heroB = new Hero('B', 200, 5);
console.log({heroA, heroB});

heroA.attack(heroB);

console.log({heroA, heroB});

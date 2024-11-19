import { nameValidityCheck, typeValidityCheck, isHealth } from "./dataValidityCheck";

export default class Character {
  constructor(name, type)  {
    nameValidityCheck(name);
    typeValidityCheck(type);

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    isHealth(this.health);

    this.level += 1;
    this.attack += (this.attack * 20) / 100;
    this.defence += (this.defence * 20) / 100;
    this.health = 100;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } 

    if (this.health < 0) {
      this.health = 0;
    }
  }
}

export class Bowman extends Character {
  constructor(name) {
    super(name, "Bowman");

    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name, "Swordsman");

    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name, "Magician");

    this.attack = 10;
    this.defence = 40;
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name, "Undead");

    this.attack = 25;
    this.defence = 25;
  }
}

export class Zombie extends Character {
  constructor(name) {
    super(name, "Zombie");

    this.attack = 40;
    this.defence = 10;
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name, "Daemon");

    this.attack = 10;
    this.defence = 40;
  }
}
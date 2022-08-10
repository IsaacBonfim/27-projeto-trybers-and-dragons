import Race from './Race';

class Dwarf extends Race {
  static instances = 0;

  constructor(
    private _maxLifePoints: number,
    name: string,
    dexterity: number,
  ) { 
    super(name, dexterity);

    this._maxLifePoints = 80;

    Dwarf.instances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.instances;
  }
}

export default Dwarf;

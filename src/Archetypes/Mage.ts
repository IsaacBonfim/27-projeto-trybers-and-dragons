import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _energy: EnergyType = 'mana';
  private static instances = 0;

  constructor(name: string) {
    super(name);
    Mage.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Mage;

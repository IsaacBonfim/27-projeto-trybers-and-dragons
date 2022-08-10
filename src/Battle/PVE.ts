import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  constructor(
    player: Fighter,
    private monsters: SimpleFighter[],
  ) {
    super(player);
  }

  fight(): number {
    const aux = this.monsters.length - 1;

    for (let index = 0; index <= aux; index += 1) {
      this.player.attack(this.monsters[index]);

      if (this.monsters[index].lifePoints <= 0) {
        return 1;
      }

      this.monsters[index].attack(this.player);

      if (this.player.lifePoints <= 0) {
        return -1;
      }
    }

    return 0;
  }
}

export default PVE;

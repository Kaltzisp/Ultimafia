const Card = require("../../Card");

module.exports = class BombRush extends Card {
  constructor(role) {
    super(role);

    this.meetings = {
      "Rush with Bomb": {
        states: ["Day"],
        flags: ["voting", "instant", "noVeg"],
        action: {
          labels: ["kill", "bomb"],
          run: function () {
            this.game.queueAlert(
              `:sy8d: ${this.actor.name} rushes at ${this.target.name} and explodes!`
            );

            this.actor.kill("basic", this.actor, true);

            if (this.dominates()) this.target.kill("basic", this.target, true);
          },
        },
      },
    };
  }
};
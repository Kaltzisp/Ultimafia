const Card = require("../../Card");
const Random = require("../../../../../lib/Random");

module.exports = class TrueModifier extends Card {
  constructor(role) {
    super(role);

    this.startEffects = ["TrueMode"];
  }
};

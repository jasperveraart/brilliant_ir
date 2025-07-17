'use strict';

const { RFDevice } = require('homey-rfdriver');

module.exports = class extends RFDevice {

  static CAPABILITIES = {
    onoff: 'LIGHT_TOGGLE',
    'button.light_brighter': 'LIGHT_BRIGHTER',
    'button.light_darker': 'LIGHT_DARKER',
    // Voeg overige knoppen toe
  };

  async onInit() {
    this.log(`Device initialized: ${this.getName()}`);
  }

};

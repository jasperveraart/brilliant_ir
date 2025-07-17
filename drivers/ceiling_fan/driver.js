'use strict';

const { RFDriver } = require('homey-rfdriver');
const CeilingFanSignal = require('../../lib/RFSignalBrilliant');

module.exports = class extends RFDriver {

  static SIGNAL = CeilingFanSignal;

  async onInit() {
    this.log('IR driver initialized');
  }

};

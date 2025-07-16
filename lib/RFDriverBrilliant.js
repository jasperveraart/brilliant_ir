'use strict';

const { RFDriver } = require('homey-rfdriver');
const RFSignalBrilliant = require('./RFSignalBrilliant');

module.exports = class extends RFDriver {

  static SIGNAL = RFSignalBrilliant;

};

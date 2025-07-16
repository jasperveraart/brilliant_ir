'use strict';

const RFDeviceBrilliant = require('../../lib/RFDeviceBrilliant');

module.exports = class extends RFDeviceBrilliant {

  static CAPABILITIES = {
    onoff: 'LIGHT_TOGGLE',
  }

};

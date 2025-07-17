'use strict';

const { ZigbeeDevice } = require('homey-zigbeedriver');

module.exports = class PhilipsGU10V3Device extends ZigbeeDevice {

    async onNodeInit({ zclNode }) {
        this.log('Philips GU10 V3 device initialized');

        this.registerCapability('onoff', 64);
        this.registerCapability('dim', 64);
    }

};

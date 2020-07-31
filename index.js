const compass = {
    baseUrl: 'https://findtreasure.app/api/v1/games',
    token: ''
}

const makeBoat = require('./boat');
const makeCaptain = require('./captain');
const makeNavigator = require('./navigator');

const boat = makeBoat({ compass, campaign: 'ileya' });
const captain = makeCaptain();
const navigator = makeNavigator({ patienceInSeconds: 60 }, captain, boat);

navigator.startNavigation('kcdwksc mef');

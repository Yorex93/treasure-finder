const axios = require('axios').default;
const makeDestination = require('./destination');

module.exports = function makeBoat ({ compass, campaign }) {
    const headers = {
        Authorization: `Bearer ${compass.bearerToken}`,
    }

    async function sailTo (location) {
        const coordinates = `${compass.baseUrl}/${campaign}/${location}` 
        const result = await axios.get(coordinates, { headers });
        return makeDestination({ statusCode: result.status, body: result.data })
    }

    return {
        sailTo
    }
}

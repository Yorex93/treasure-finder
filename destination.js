module.exports = function makeDestination ({ statusCode, body }) {

    function foundTreasure () {
        return statusCode == 302
    }

    function nextIslandsToVisit () {
        return [];
    }

    return {
        foundTreasure,
        nextIslandsToVisit
    }
}
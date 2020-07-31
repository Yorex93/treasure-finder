module.exports = function makeNavigator ({ patienceInSeconds = 60 }, captain, boat) {
    const isPlanningNextSiege = false;
    const treasuresFound = 0;
    const islandsToExplore = [];
    const timeout = null;

    async function sail() {
        while (!isPlanningNextSiege && islandsToExplore.length) {
            const islandToVisit = islandsToExplore[0];
            const destination = await boat.sailTo(islandToVisit);
            islandsToExplore.shift();
            await captain.handle(destination, {
                onTreasureFound: () => onTreasureFound(destination.location()),
                onPlanningNeeded: () => planNextSiege(),
                onNewLocations: (newLocations) => islandsToExplore.push(...newLocations)
            });
        }
    }

    function onTreasureFound (location) {
        console.log(`Treasure found at location ${location}`);
        treasuresFound++;
    }

    function planNextSiege () {
        isPlanningNextSiege = true;
        timeout = null;
        timeout = setTimeout(() => {
            isPlanningNextSiege = false;
            sail();
        }, patienceInSeconds * 1000);
    }

    async function startNavigation (firstLocation) {
        islandsToExplore.push(firstLocation);
        sail();
    }

    return {
        startNavigation
    }
}

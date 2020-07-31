module.exports = function makeCaptain () {
    const visitedIslands = new Map();

    async function handle (destination, callbacks) {
        visitedIslands.set(destination.location(), true);

        if(destination.foundTreasure()) {
            callbacks.onTreasureFound();
        }
        if(destination.hasNewIslands()) {
            const newIslands = [];
            destination.getNewIslands().forEach(island => {
                if(!visitedIslands.has(island)) {
                    newIslands.push(island);
                }
            });
            callbacks.onNewLocations(newIslands);
        }

        if(destination.shouldWait()) {
            callbacks.onPlanningNeeded();
        }
    
    }

    return {
        handle
    }
}
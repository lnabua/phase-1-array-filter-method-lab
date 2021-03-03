function findMatching(drivers, name) {
    return drivers.filter(obj => obj.toLowerCase().indexOf(name.toLowerCase()) !== -1)
}

//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function fuzzyMatch(drivers, name) {
    return drivers.filter(function (obj) {
        if (name === obj.slice(0, 2)) {
            return obj.toLowerCase().indexOf(name.toLowerCase()) !== -1;
        }
    });
}

function matchName(drivers, driverName) {
    return drivers.filter(function (obj) {
        if (driverName === obj) {
            return drivers[key];
        }
    });
}
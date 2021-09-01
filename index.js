const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']
const returnFirstTwoDrivers = () => drivers.slice(0,2)
const returnLastTwoDrivers = () => drivers.slice(2,4)
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(integer) {
    return ((fare) => integer * fare);
    }
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
function selectDifferentDrivers(driverArray, returnDriversParameter) {
    return returnDriversParameter(driverArray)
}
function findMatching (drivers, string){
    return drivers.filter(driver =>
        driver.toLowerCase().startsWith(string.toLowerCase())
        );
}
function fuzzyMatch(drivers, query) {
    return drivers.filter(function(driver) {
      return driver.startsWith(query);
    });
  }
function matchName(drivers, query) {
    return drivers.filter(function(driver) {
    return driver.name === query;
    });
  }
  
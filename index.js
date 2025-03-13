const findMatching = (drivers, name) => {
    return drivers.filter (driver => driver.toLowerCase() === name.toLowerCase())
}

const fuzzyMatch = (drivers, name) => {
    return drivers.filter(driver => driver.toLowerCase().startsWith(name.toLowerCase()))
}

const matchName = (drivers, name) => {
    return drivers.filter(driver => driver.name === name)
}
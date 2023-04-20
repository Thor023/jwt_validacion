require('colors')
const message = (port) => {
    console.clear()
    console.log('======================================='.red)
    console.log(`          SERVER ON PORT: ${port}         `.bgGreen.black)
    console.log('======================================='.red)
}

module.exports = message
function duckCount(){
    console.log(arguments)
    return Array.from(arguments).filter((argument) => argument.hasOwnProperty('quack')).length
}

module.exports = duckCount
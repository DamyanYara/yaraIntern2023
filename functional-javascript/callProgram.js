function duckCount(){
    console.log(arguments)
    return Array.from(arguments).filter(function(argument){
        return Object.prototype.hasOwnProperty(argument, 'quack')
    }).length
}

module.exports = duckCount
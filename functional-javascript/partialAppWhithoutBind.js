
let slice = Array.prototype.slice

function logger(namespace){
    return function(){
        console.log.apply(null, [namespace, ...arguments])
    }
}
module.exports = logger
// function Spy(target, method){
//     const spY = target[method]; 
//     const obj = {count:0}

//     target[method] = function(){
//         obj.count++
//         spY.call(this, ...arguments)
//     }
//     return spY
// }

// module.exports = Spy
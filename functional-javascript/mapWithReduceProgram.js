module.exports = function arrayMap(arr,  fn, thisArgs){
    return arr.reduce((acc, item, index, arr) => {
        acc.push(fn.call(thisArgs, item, index,arr))
        return acc    

    }, [])
}
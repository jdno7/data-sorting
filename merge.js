function merge(arr1, arr2) { 
    let a = 0
    let b = 0
    const result = []
    while (a < arr1.length && b < arr2.length)
        if (arr1[a] < arr2[b]){
            result.push(arr1[a])
            a++
        }
        else {
            result.push(arr2[b])
            b++
        }
        // console.log(a,b)
        while (a < arr1.length) {
            for (let n of arr1.slice([a])){
                result.push(n)
            }
            break
        }
        while (b < arr2.length) {
            // console.log(arr2.slice([b]))
            for (let n of arr2.slice([b])){
                result.push(n)
            }
            break
    }
    return result
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr
    const mid = Math.floor(arr.length/2)
    const left = mergeSort(arr.slice(0,mid))
    const right = mergeSort(arr.slice(mid))
    return merge(left,right)
}

module.exports = { merge, mergeSort};
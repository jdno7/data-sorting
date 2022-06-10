function insertionSort(arr) {
    if (!arr.length) return []
    let results = [arr[0]]
    // console.log(results.length)
    for(let i = 1; i < arr.length; i++){
        // console.log("now finding a spot for",arr[i])
        for(let j = 0; j < results.length; j++){
            // console.log(`is ${arr[i]} < ${results[j]}?`)
            if (arr[i] > results[results.length-1]){
                // console.log('adding',arr[i],"to the end")
                results.splice(results.length,0,arr[i])
                break
            }
            if (arr[i] <= results[j]){
                // console.log(`inserting ${arr[i]} into results at ${j}`)
                results.splice(j,0,arr[i])
                // console.log(results)
                break
            }
    }
    // console.log(results)
}
return results
}
const test1 = [4,20,12,10,7,9] 
const test2 = [77,6,9,44,15] 
const test3 = [1,2,3] 
const test4 = [] 

console.log(insertionSort(test4))

module.exports = insertionSort;
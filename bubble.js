function bubbleSort(arr) {
    
    for (let i = 0; i < arr.length; i++){
        for (let j=0; j < arr.length-i; j++){
            if (arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
              
            }
        }
        // console.log(arr)
    }
    return arr
}

const test1 = [2,66,7,8,1,-9,77]

bubbleSort(test1)

module.exports = bubbleSort;


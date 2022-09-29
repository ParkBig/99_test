function solution(arr, n) {
    let dupElement = arr.filter((ele, index) => arr.indexOf(ele) !== index);
    dupElement.forEach((element)=>arr = arr.filter((ele)=> ele !== element));
    return arr.sort((a,b)=> a[n]===b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]))
}

// console.log(solution(["brush", "sun", "brush", "bed", "car"],1))
// console.log(solution(["banana", "cat", "car", "apple", "banana", "banana"],0))
// console.log(solution(["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin"],2))


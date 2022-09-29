function solution(arr1, arr2) {
    let sum =0;
    arr1.forEach((ele,index)=>{arr2[index]>28 ? sum += (21-ele) : sum += (arr2[index]-ele)})
    return sum
}

// console.log(solution([9,9,9,9,7,9,8],[23,23,30,28,30,23,23]))

function solution(n) {
    let sum = 0;
    for (let i of String(n)) {
        sum += +i
    }
    return n.toString().split("").reverse().join("+") + `=${sum}`
}
// console.log(solution(718253))
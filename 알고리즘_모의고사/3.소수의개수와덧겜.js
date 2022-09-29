function solution(n) {
    let arr = n.split(" ").map((ele)=>+ele);
    let prime =[]
    let number = []
    for (let i of arr) {
        let sum = 0;
        if (i === 1) {
            number.push(i)
        }
        if (i>1) {
            if (i===2) {
                prime.push(i)
            } else {
                for (let j=1; j<Math.sqrt(i)+1; j++) {
                    if (i%j ===0) {
                        sum++
                    }
                    if (sum>1) {
                        number.push(i);
                        break;
                    }
                }
                if (sum ===1) {
                    prime.push(i)
                }
            }
        }
    }
    console.log(`Not소수= ${number}`)
    console.log(`소수= ${prime}`)
    return `${Math.min(...number)} ${Math.max(...prime)}`
}

// console.log(solution("97 75 88 99 95 92 73"))

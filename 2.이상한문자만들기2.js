function solution(s) {
    const upper = function (str) {
        let string = ""
        for (let i = 0; i < str.length; i++) {
            if (i % 2 === 0) {
                string += str[i].toUpperCase()
            } else {
                string += str[i].toLowerCase()
            }
        }
        return string
    }

    s = s.split(" ")
    for (let i=0; i<s.length; i++) {
        s[i] = upper(s[i])
    }

    return s.join(" ")
}

// console.log(solution("try hello world"))
// console.log(solution("yoon ji yong"))
// console.log(solution("hang hae ninety nine"))

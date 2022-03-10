//1부터 50의 자연수 중 짝수를 구하는 함수
const isEven1to50 = (num) => { 
    let result = [];
    if (0 < num < 51) { 
        for (let i = 1; i <= num; i++) { 
            if (i % 2 === 0) { 
                result.push(i)
            }
        }
    }
    return result
}

console.log(isEven1to50(50));
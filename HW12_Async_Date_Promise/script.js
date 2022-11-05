async function getRandomChinese(length) {
    let result = '';
    while (length) {
        const sign = new Promise((res) =>
            setTimeout(() => {
                res(String.fromCharCode(Date.now().toString().slice(-5)));
            }, 50)
        )
        length--;
        result += await sign;
    }
    return result;
}

getRandomChinese(4).then(res => { console.log(res) })
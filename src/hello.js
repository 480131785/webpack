function getString() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hello')
        }, 1000);
    })
}

async function Hello() {
    let string = await getString
}

export default Hello
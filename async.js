const delay = require('delay');
const tick = Date.now()
const log = (v) => console.log(`${v} Elapsed: ${Date.now() - tick} ms`)

const getFruit = async (para) => {
    const fruits = {
        pineapple: '🍍',
        peach: '🍑x',
        strawberry: '🍓',
        test: 'test'
    }
    await delay(1000);
    return fruits[para];
}





const makeSmoothie = async () => {
    const a = getFruit('strawberry')
    const b = getFruit('peach')

    const smoothie = Promise.all([a, b])
    return smoothie

}


const badSmoothie = async () => {
    try {
        const a = getFruit('pineapple');
        const b = getFruit('strawberry');
        const smoothie = await Promise.all([a, b])

        throw 'broken'

        return smoothie;

    } catch (err) {
        console.log(err)
        //return ` 😇 We are going to be fine....`  // this will store in val
        throw `🐩  it's broken`    //this will store in err

    }
}



makeSmoothie().then(log)
console.log("🦁 =============================🦁 ")

badSmoothie()
    .then(val => console.log({ val }))    // if return it's will store in val **
    .catch(err => console.log({ err }))    // if thorw it's will store in catch **


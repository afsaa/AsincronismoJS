const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve('Doing something asynchronously')
            }, 3000)
        } catch (error) {
            reject(new Error('Error', error));
        }
    })
}


const doSomething = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
        console.log('After');
    } catch (error) {
        console.error(error);
    }
}

console.log('Before');
doSomething();
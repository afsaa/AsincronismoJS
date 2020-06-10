const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("We did it")
        } else {
            reject("Ooops!")
        }
    })
}
const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve("We did it")
            }, 2000);
        } else {
            setTimeout(() => {
                reject("Ooops!")
            }, 2000);
        }
    })
}

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then((result) => {
        console.log(result)
    }).catch((err) => {
        console.error(err);
    });

const lancioDado = () => {
    return new Promise((resolve, reject) => {
        console.log('sto lanciando il dado....')
        setTimeout(() => {
            const incastrato = Math.random() < 0.2;
            if (incastrato) {
                reject('il dado si è incastrato')
            } else {
                const risultato = Math.floor(Math.random() * 6) + 1
                resolve(risultato)
            }
        }, 3000);
    });

};

lancioDado()
    .then(risultato => console.log('il risultato del langio è: ', risultato))
    .catch(error => console.error(error))
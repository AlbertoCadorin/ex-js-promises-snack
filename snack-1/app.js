const getPost = id => {
    const promessa = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(obj => resolve(obj.title))
            .catch(reject)
    });
    return promessa
};

getPost(2)
    .then(obj => console.log('titolo del libro : ', obj))
    .catch(error => console.error(error))
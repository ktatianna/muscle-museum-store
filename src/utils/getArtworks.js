import artworks from '../mock/artworks'

export const getArtworks = () => {
    return new Promise((resolve, reject) => {
        const ok = true;
        setTimeout(() => {
            if(ok) {
                resolve(artworks);
            } else {
                reject('ERROR');
            }
        }, 2000)
    })
}

export const getArtworksById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(artworks.find(artwork => artwork.id === id))
        }, 2000)
    })
}
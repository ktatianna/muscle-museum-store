import artworks from '../mock/artworks'

const getArtworks = () => {
    return new Promise((resolve, reject) => {
        const ok = true;
        setTimeout(() => {
            if(ok) {
                resolve(artworks);
            } else {
                reject('ERROR');
            }
        }, 2000);
    })
}

export default getArtworks;
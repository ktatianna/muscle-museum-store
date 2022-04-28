/*import { artworks, categories } from '../mock/artworks'

export const getArtworks = (categoryId) => {
    return new Promise((resolve, reject) => {
        const ok = true;
        setTimeout(() => {
            if(ok) {
                resolve(categoryId ? artworks.filter(artwork => artwork.category === categoryId): artworks);
            } else {
                reject('ERROR');
            }
        }, 600)
    })
}

export const getArtworksById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(artworks.find(artwork => artwork.id === id))
        }, 1000)
    })
}

export const getCategories = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 1000)
    })
}
*/

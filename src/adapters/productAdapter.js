export const createAdapterProductFromFirestore = (doc) => {
  const data = doc.data()

  const formattedProduct = {
    id: doc.id,
    title: data.title,
    category: data.category,
    description: data.description,
    image: data.image,
    medium: data.medium,
    movement: data.movement,
    price: data.price,
    stock: data.stock,
  }

  return formattedProduct
}
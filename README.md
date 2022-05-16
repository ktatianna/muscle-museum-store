# Muscle Museum Store

Este es un proyecto realizado para el curso de React Js, el cual consiste en una tienda virtual de diferentes obras de arte las cuales están organizadas por movimiento artistico. En cada una de las obras expuestas en este proyecto, se puede visualizar información de ésta, tal como el titulo, el autor, la descripción, la téctica, el movimiento artistico y un precio y unidades disponibles puestas para la funcionalidad del proyecto.

## Inicialización del proyecto

Para poder acceder al proyecto e inicializarlo, se debe seguir los siguientes comandos en tu consola:
```
git clone https://github.com/ktatianna/muscle-museum-store.git
npm install
npm start
```

## Componentes 
Los componentes principales usados en el proyecto son: 
- Alert: Este componente genera un mensaje informativo en el momento de generar la orden de compra. 
- Cart: Renderiza una tabla con la información básica de los productos agregados al carrito por el usuario y la suma total de los precios de éstos. También permite eliminar items del carrito y en caso de quedar vacío, renderiza un mensaje informativo. 
- CartWidget: Muestra en el menú principal un icono del carrito con el numero de items agregados a éste, con el cual el usuario puede acceder de manera rápida a esta ruta. En caso de estar vacío el carrito, este componente no se muestra. 
- Checkout: Registra los datos de la orden de compra a partir de un formulario y genera dicha orden. 
- Item: Muestra la información basica del producto y permite acceder a la información detallada.
- ItemCount: Permite agregar items al carrito con botones para incrementar o desincrementar la cantidad de unidades por agregar. 
- ItemDetail: Renderiza la información detallada del producto
- ItemList: Renderiza una lista de Items
- NavBar: Muestra el menú con el cual se puede navegar y acceder a las difentes rutas del proyecto. 

## Navegación 

## Firebase

Para el proyecto se usó Firebase, allí se almacenan los datos de los productos, categorias y de cada orden de compra en 3 colecciones.

El formato de los datos en cada una de las colecciones es la siguiente: 

### artworks
| Campo | Tipo |
| ------------- | ------------- |
| autor  | string  |
| category  | string |
| description | string |
| image  | string |
| medium  | string |
| movement | string |
| price  | number |
| stock  | number |
| title  | string |


### categories
| Campo | Tipo |
| ------------- | ------------- |
| description  | string  |


### orders
| Campo | Tipo |
| ------------- | ------------- |
| buyer  | map  |
| date  | timestamp  |
| items  | matriz  |
| total  | number  |

const data = [
    { id: 1, name: 'Cheddar', price: '5.99', description: 'A classic sharp cheddar cheese.', img: '/cheddar.jpg'},
    { id: 2, name: 'Brie', price: '7.99', description: 'A creamy and soft French cheese.', img: '/brie.jpg' },
    { id: 3, name: 'Gouda', price: '6.49', description: 'A mild and nutty Dutch cheese.', img: '/gouda.webp' },
    { id: 4, name: 'Blue Cheese', price: '8.99', description: 'A tangy and pungent blue-veined cheese.', img: '/blue_cheese.webp' },
    { id: 5, name: 'Swiss', price: '6.99', description: 'A nutty and holey Swiss cheese.', img: '/swiss.jpg' },
    { id: 6, name: 'Feta', price: '4.99', description: 'A crumbly and salty Greek cheese.', img: '/feta.jpg' },
    { id: 7, name: 'Camembert', price: '9.99', description: 'A creamy and rich French cheese.', img: '/camembert.webp' },
    { id: 8, name: 'Havarti', price: '7.49', description: 'A Danish semi-soft cheese with a buttery flavor.', img: '/havarti.webp' },
    { id: 9, name: 'Mozzarella', price: '5.49', description: 'A mild and melty Italian cheese.', img: '/mozzarella.jpg' },
    { id: 10, name: 'Gruyère', price: '8.49', description: 'A sweet and nutty Swiss cheese.', img: '/gruyere.jpg' },
];

export const initialize = () => {
    data.forEach(item =>
        localStorage.setItem(item.id, JSON.stringify(item))
    )
}

export const getAll = () => {
    let data = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        data.push(JSON.parse(localStorage.getItem(key)))
    }
    return data;
}

export const get = (id) => {
    return JSON.parse(localStorage.getItem(id));
}

export const addItem = (name, description, price) => {
    const id = localStorage.length + 1;
    const newItem = {
        id: id,
        name,
        description,
        price
    }
    localStorage.setItem(id.toString(), JSON.stringify(newItem));
}
 export const deleteItem = (id) => {
    const item = localStorage.getItem(id);

    if(item === null){
        return;
    }

    localStorage.removeItem(id);
}


export default {initialize, addItem, deleteItem};
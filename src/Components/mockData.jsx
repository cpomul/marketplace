
const data = [
    { id: 1, name: 'Cheddar', price: '$5.99', description: 'A classic sharp cheddar cheese.' },
    { id: 2, name: 'Brie', price: '$7.99', description: 'A creamy and soft French cheese.' },
    { id: 3, name: 'Gouda', price: '$6.49', description: 'A mild and nutty Dutch cheese.' },
    { id: 4, name: 'Blue Cheese', price: '$8.99', description: 'A tangy and pungent blue-veined cheese.' },
    { id: 5, name: 'Swiss', price: '$6.99', description: 'A nutty and holey Swiss cheese.' },
    { id: 6, name: 'Feta', price: '$4.99', description: 'A crumbly and salty Greek cheese.' },
    { id: 7, name: 'Camembert', price: '$9.99', description: 'A creamy and rich French cheese.' },
    { id: 8, name: 'Havarti', price: '$7.49', description: 'A Danish semi-soft cheese with a buttery flavor.' },
    { id: 9, name: 'Mozzarella', price: '$5.49', description: 'A mild and melty Italian cheese.' },
    { id: 10, name: 'Gruyère', price: '$8.49', description: 'A sweet and nutty Swiss cheese.' },
];

const addItem = (name, description) => {
    const newItem = {
        id: data.length + 1,
        name,
        description,
    }
    data.push(newItem);
}
export const deleteItem = (id) => {
    const index = data.findIndex(item => item.id === id);

    if (index !== -1) {
        return data.splice(index, 1);
    }

    return null;
}


export {data, addItem};
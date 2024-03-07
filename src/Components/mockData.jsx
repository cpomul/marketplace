const data = [
    {id: 1, name: "exemplu", description: "etc"}
];

const addItem = (name, description) => {
    const newItem = {
        id: data.length + 1,
        name,
        description,
    }
    data.push(newItem);
}



export {data, addItem};
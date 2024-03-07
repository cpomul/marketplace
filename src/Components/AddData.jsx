
import { addItem, data } from './mockData';
import {useState} from "react";

const AddData = () => {
    const [newItemName, setNewItemName] = useState('');
    const [newItemDescription, setNewItemDescription] = useState('');

    const handleAddItem = () => {
        addItem(newItemName, newItemDescription);
        setNewItemName('');
        setNewItemDescription('');
    }

    return(
        <>
            <div className="add-item-container">
                <input type="text"
                       value={newItemName}
                       placeholder="Name"
                       onChange={e => setNewItemName(e.target.value)}
                />
                <input
                    type="text"
                    value={newItemDescription}
                    placeholder="Description"
                    onChange={e => setNewItemDescription(e.target.value)}
                />
                <button onClick={handleAddItem}>Add Item</button>
            </div>

            <ul>
                {data.map(item => (
                    <li key={item.id} className="list-items">
                        ID: {item.id}, Name: {item.name}, Description: {item.description}
                    </li>
                ))}
            </ul>
        </>
    )
}
export default AddData;
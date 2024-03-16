import * as MuiJoy from "@mui/joy";
import * as MuiMat from "@mui/material"
import { addItem, getAll, deleteItem } from './MockDataRepository.jsx';
import {useState} from "react";
import ItemDivider from './Divider.jsx';
import SimpleAlert from "./Alert.jsx";
import {useNavigate} from "react-router-dom";

const ProductsListingPage = () => {
    const navigate = useNavigate();

    const [newItemName, setNewItemName] = useState('');
    const [newItemDescription, setNewItemDescription] = useState('');
    const [newItemPrice, setNewItemPrice] = useState('');
    const [search, setSearch] = useState('');

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;

    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const handleAddItem = () => {
        if(newItemName === '' || newItemDescription === '' || newItemPrice === ''){
            setShowSuccessAlert(true);

            setTimeout(() => {
                setShowSuccessAlert(false);
            }, 3000);
        }
        else{
            addItem(newItemName, newItemDescription, newItemPrice);
            setNewItemName('');
            setNewItemDescription('');
            setNewItemPrice('');
        }
    }

    const filteredData = getAll().filter((item) => {
        if (search === '') {
            return item;
        } else {
            return item.name.toLowerCase().includes(search.toLowerCase());
        }
    });

    const handlePageChange = (event, selectedPage) => {
        setCurrentPage(selectedPage - 1);
    };

    const pageCount = Math.ceil(filteredData.length / itemsPerPage);
    const offset = currentPage * itemsPerPage;

    return(
        <>
            <div className="add-item-container">
                <MuiJoy.Input
                    variant="outlined"
                    color="warning"
                    className="add-item-input"
                    type="text"
                    value={newItemName}
                    placeholder="Name"
                    onChange={e => setNewItemName(e.target.value)}
                />
                <MuiJoy.Input
                    variant="outlined"
                    color="warning"
                    className="add-item-input"
                    type="text"
                    value={newItemDescription}
                    placeholder="Description"
                    onChange={e => setNewItemDescription(e.target.value)}
                />
                <MuiJoy.Input
                    variant="outlined"
                    color="warning"
                    className="add-item-input"
                    type="text"
                    value={newItemPrice}
                    placeholder="Price"
                    onChange={(e) => setNewItemPrice(e.target.value)}
                />
                <MuiJoy.Button
                    className="add-item-button"
                    onClick={handleAddItem}>Add Item
                </MuiJoy.Button>
                {showSuccessAlert && <SimpleAlert />}
                <div className="searchBarContainer">
                    <MuiJoy.Input
                        color="warning"
                        size="lg"
                        className="searchBar"
                        type="text"
                        placeholder="Search items..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <MuiMat.Pagination
                        count={pageCount}
                        page={currentPage + 1} // material pagination starts from 1
                        onChange={handlePageChange}
                        color="warning"
                        className="pagination-container"
                        variant="outlined"
                        shape="rounded"
                        size="small"
                    />
                </div>
            </div>
            <ul className="list-items-container">
                {filteredData.slice(offset, offset + itemsPerPage).map((item) => (
                    <li className="list-item" key={item.id} onClick={() => navigate(`/product/${item.id}`)}>
                        <ItemDivider
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}
export default ProductsListingPage;
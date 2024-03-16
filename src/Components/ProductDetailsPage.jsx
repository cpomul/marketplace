
import {useNavigate, useParams} from 'react-router-dom';
import {deleteItem, get} from './MockDataRepository.jsx';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import {NotFoundPage} from "./NotFoundPage.jsx";
const ProductDetailsPage = () => {
    const { id } = useParams();
    const item = get(parseInt(id));
    const navigate = useNavigate();

    const handleDeleteItem = (id) => {
        deleteItem(id);
        navigate('/home')
    }

    if (!item) {
        return <NotFoundPage/>
    }

    return (
        <div className="main-container">
            <div className="product-container">
                <img src={item.img}  alt="Product Image" className='product-image'/>
                <h2 className="item-name">{item.name}</h2>
                <p className="item-description">{item.description}</p>
                <p className="item-price">Price: {item.price}</p>
            </div>
            <IconButton
                className="delete-button"
                onClick={() => handleDeleteItem(item.id)}
                aria-label="delete"
                color="primary"
            >
                <DeleteIcon />
            </IconButton>
        </div>
    );
};

export default ProductDetailsPage;

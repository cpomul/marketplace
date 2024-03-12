import * as MuiMat from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const DetailsDialog = ({ open, onClose, selectedItem, onDeleteClick }) => {
    const handleDeleteClick = () => {
        onDeleteClick(selectedItem.id);
    };

    return (
        <MuiMat.Dialog open={open} onClose={onClose}>
            <MuiMat.DialogTitle>{selectedItem && `${selectedItem.name}`}</MuiMat.DialogTitle>
            <MuiMat.DialogContent>
                {selectedItem && (
                    <div>
                        Name: {selectedItem.name}<br />
                        Description: {selectedItem.description}<br />
                        Price: {selectedItem.price}
                        <IconButton
                            className="delete-button"
                            onClick={handleDeleteClick}
                            aria-label="delete"
                            color="primary"
                            style={{ position: 'absolute', bottom: '4px', right: '8px' }}
                        >
                            <DeleteIcon />
                        </IconButton>
                        <IconButton
                            className="delete-button"
                            aria-label="delete"
                            color="primary"
                            style={{ position: 'absolute', bottom: '4px', right: '100px' }}
                        >
                            <ShoppingCartIcon />
                        </IconButton>
                    </div>
                )}
            </MuiMat.DialogContent>
        </MuiMat.Dialog>
    );
};

export default DetailsDialog;


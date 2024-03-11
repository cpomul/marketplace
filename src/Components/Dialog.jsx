
import * as MuiMat from "@mui/material";

const DetailsDialog = ({ open, onClose, selectedItem }) => {
    return (
        <MuiMat.Dialog open={open} onClose={onClose}>
            <MuiMat.DialogTitle>{selectedItem && `${selectedItem.name}`}</MuiMat.DialogTitle>
            <MuiMat.DialogContent>
                {selectedItem && (
                    <div>
                        Name: {selectedItem.name}<br />
                        Description: {selectedItem.description}<br />
                        Price: {selectedItem.price}
                    </div>
                )}
            </MuiMat.DialogContent>
        </MuiMat.Dialog>
    );
};

export default DetailsDialog;

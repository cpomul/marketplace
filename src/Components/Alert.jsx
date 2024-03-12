
import Alert from '@mui/material/Alert';
import ErrorIcon from '@mui/icons-material/Error';

export default function SimpleAlert() {
    return (
        <Alert icon={<ErrorIcon fontSize="inherit" />} severity="error">
            You must provide a name and description of your product!
        </Alert>
    );
}
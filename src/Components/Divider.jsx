
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


export default function ItemDivider({ name, price, description}) {
    return (
        <Card variant="outlined" sx={{width: 200, maxWidth: 220, height: '150px'}}>
            <Box sx={{ p: 2, position: 'relative', height: '100%', overflowY: 'auto' }}>
                <Stack direction="column" justifyContent="space-between" alignItems="center">
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography color="text.secondary" variant="body2" textAlign="center">
                        {description}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        ${price}
                    </Typography>
                </Stack>

            </Box>
        </Card>
    );
}

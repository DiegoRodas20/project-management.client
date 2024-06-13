import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const HorizontalBar = () => {
    return (
        <AppBar>
            <Container maxWidth={'xl'}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}></Box>
            </Container>
        </AppBar>
    );
}

export default HorizontalBar;
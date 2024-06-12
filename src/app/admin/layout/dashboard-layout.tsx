import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box component="main">
                <Toolbar></Toolbar>
                <Container></Container>
                {children}
            </Box>
        </Box>
    );
}

export default DashboardLayout;
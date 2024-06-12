import { Box, Container, Toolbar } from '@mui/material';
import { ReactNode } from "react";
import Header from './header';

const DashboardLayout = ({ children }: { children: ReactNode }) => {

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Header/>
            <Box component="main">
                <Toolbar></Toolbar>
                <Container></Container>
                {children}
            </Box>
        </Box>
    );
}

export default DashboardLayout;
'use client'

import { Box, Container, Toolbar } from '@mui/material';
import { ReactNode } from "react";
import Header from './header';
import DrawerTest from './drawer-test';

const DashboardLayout = ({ children }: { children: ReactNode }) => {

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Header />
            <DrawerTest />

            <Box component="main" sx={{ width: `calc(100% - 280px)`, flexGrow: 1, p: { xs: 1, sm: 3 } }}>
                <Toolbar sx={{ mt: 'inherit', mb: 'inherit' }}></Toolbar>
                <Container
                    maxWidth={'xl'}
                    sx={{
                        xs: 0,
                        position: 'relative',
                        minHeight: 'calc(100vh - 110px)',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                    {children}
                </Container>
            </Box>
        </Box>
    );
}

export default DashboardLayout;
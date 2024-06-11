import Box from '@mui/material/Box';
import { ReactNode } from "react";
import Header from './header';

const DashboardLayout = ({ children }: { children: ReactNode }) => {

    return (
        <Box sx={{ display: 'flex', width: '100%' }}></Box>
        <Header>{children}</Header>
    );
}
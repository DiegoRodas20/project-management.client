import Box from '@mui/material/Box';
import { ReactElement } from 'react';

const AuthCard = ({ children }: { children: ReactElement }) => (
    <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>{children}</Box>
);

export default AuthCard;
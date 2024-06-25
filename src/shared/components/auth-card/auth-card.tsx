import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { ReactElement } from 'react';
import './auth-card.scss';

const AuthCard = ({ children }: { children: ReactElement }) => (
    <Card>
        <Box className='auth-card'>
            {children}
        </Box>
    </Card>
);

export default AuthCard;
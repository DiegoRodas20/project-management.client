import Box from '@mui/material/Box';
import MainCard, { MainCardProps } from 'shared/components/main-card/main-card';

// ==============================|| AUTHENTICATION - CARD ||============================== //

const AuthCard = ({ children, ...other }: MainCardProps) => (
    <MainCard
        sx={{
            maxWidth: { xs: 400, md: 480 },
            margin: { xs: 2.5, md: 3 },
            '& > *': {
                flexGrow: 1,
                flexBasis: '50%'
            }
        }}
        content={false}
        {...other}
    >
        <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>{children}</Box>
    </MainCard>
);

export default AuthCard;

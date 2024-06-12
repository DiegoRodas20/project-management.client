'use client';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

const AuthBackground = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                position: 'absolute',
                filter: 'blur(140px)',
                zIndex: -1,
                bottom: 0,
                left: 0,
                top: 0,
                right: 0,
                overflow: 'hidden',
                '&:before': {
                    content: `" "`,
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    bgcolor: 'warning.lighter',
                    position: 'absolute',
                    top: 0,
                    right: 0
                }
            }}
        >
            <Box
                sx={{
                    width: 250,
                    height: 250,
                    borderRadius: '50%',
                    ml: 20,
                    position: 'absolute',
                    bottom: 180
                }}
            />
            <Box
                sx={{
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    bgcolor: theme.palette.error.light,
                    position: 'absolute',
                    bottom: 0,
                    left: -50
                }}
            />
        </Box>
    );
};

export default AuthBackground;
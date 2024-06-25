import CssBaseline from '@mui/material/CssBaseline';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import { Theme, ThemeProvider } from '@mui/material/styles';
import { ReactNode } from "react";
import createThemeOptions from './functions/create-theme-options';

export default function ThemeCustomization({ children }: { children: ReactNode }) {

    const theme: Theme = createThemeOptions();

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
}
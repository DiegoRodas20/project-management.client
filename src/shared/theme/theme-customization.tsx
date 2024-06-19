import CssBaseline from '@mui/material/CssBaseline';
import { Theme, ThemeProvider } from '@mui/material/styles';
import { ReactNode } from "react";
import createThemeOptions from './create-theme-options';

export default function ThemeCustomization({ children }: { children: ReactNode }) {

    const theme: Theme = createThemeOptions();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                {children}
            </CssBaseline>
        </ThemeProvider>
    );
}
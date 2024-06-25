import { PaletteMode } from '@mui/material';
import { ThemeOptions, createTheme } from '@mui/material/styles';
import { ThemeMode } from '../enums/theme-mode.enum';
import { PaletteThemeProps } from '../types/palette.type';
import PaletteTheme from './palette-theme';


const Palette = (mode: ThemeMode) => {

    const paletteColor: PaletteThemeProps = PaletteTheme(mode);

    const options: ThemeOptions = {
        palette: {
            mode: mode as PaletteMode,
            common: {
                black: '#000',
                white: '#fff'
            },
            ...paletteColor,
            action: {
                disabled: paletteColor.secondary.light
            }
        }
    }

    const theme = createTheme(options);

    return theme;
}

export default Palette;
import CssBaseline from '@mui/material/CssBaseline';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import { Theme, ThemeOptions, ThemeProvider, TypographyVariantsOptions, createTheme } from '@mui/material/styles';
import { ReactNode, useMemo } from 'react';
import { HEADER_HEIGHT } from '../config';
import useConfig from '../hooks/useConfig';
import { ThemeMode } from '../types/config';
import { CustomShadowProps } from '../types/theme';
import getWindowScheme from '../utils/getWindowScheme';
import { NextAppDirEmotionCacheProvider } from './emotionCache';
import Palette from './palette';
import CustomShadows from './shadows';
import Typography from './typography';

type ThemeCustomizationProps = {
  children: ReactNode;
};

export default function ThemeCustomization({ children }: ThemeCustomizationProps) {

  const { themeDirection, mode, presetColor, fontFamily, themeContrast } = useConfig();

  let themeMode: any = mode;

  if (themeMode === ThemeMode.AUTO) {

    const autoMode = getWindowScheme();

    if (autoMode) { themeMode = ThemeMode.DARK; }
    else { themeMode = ThemeMode.LIGHT; }
  }

  const theme: Theme = useMemo<Theme>(() => Palette(themeMode, presetColor, themeContrast), [themeMode, presetColor, themeContrast]);

  const themeTypography: TypographyVariantsOptions = useMemo<TypographyVariantsOptions>(
    () => Typography(themeMode, fontFamily, theme), [themeMode, fontFamily]);

  const themeCustomShadows: CustomShadowProps = useMemo<CustomShadowProps>(() => CustomShadows(theme), [theme]);

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1440
        }
      },
      direction: themeDirection,
      mixins: {
        toolbar: {
          minHeight: HEADER_HEIGHT,
          paddingTop: 8,
          paddingBottom: 8
        }
      },
      palette: theme.palette,
      shape: {
        borderRadius: 8
      },
      customShadows: themeCustomShadows,
      typography: themeTypography
    }),
    [themeDirection, theme, themeTypography, themeCustomShadows]
  );

  const themes: Theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
        <ThemeProvider theme={themes}>
          <CssBaseline enableColorScheme />
          {children}
        </ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </StyledEngineProvider>
  );
}

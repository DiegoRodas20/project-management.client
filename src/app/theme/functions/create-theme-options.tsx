import { Theme, ThemeOptions, TypographyVariantsOptions, createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import Options from "../configuration/options";
import useConfig from "../hooks/useConfig";
import Palette from "../configuration/palette";
import Typography from "../configuration/typography";

const createThemeOptions = () => {
  
  const { fontFamily, mode } = useConfig();

  const palette: Theme = useMemo<Theme>(() => Palette(mode), [mode]);

  const typography: TypographyVariantsOptions = useMemo<TypographyVariantsOptions>(() => Typography(fontFamily), [fontFamily]);

  const options: ThemeOptions = useMemo<ThemeOptions>(() => Options(palette, typography), [palette, typography]);

  const theme = createTheme(options);

  return theme;
};

export default createThemeOptions;

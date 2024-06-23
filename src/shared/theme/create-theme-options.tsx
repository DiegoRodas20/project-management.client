import { Theme, ThemeOptions, TypographyVariantsOptions, createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import useConfig from "../hooks/use-config";
import Options from "./options";
import Palette from "./palette";
import Typography from "./typography";

const createThemeOptions = () => {
  
  const { fontFamily, mode } = useConfig();

  const palette: Theme = useMemo<Theme>(() => Palette(mode), [mode]);

  const typography: TypographyVariantsOptions = useMemo<TypographyVariantsOptions>(() => Typography(fontFamily), [fontFamily]);

  const options: ThemeOptions = useMemo<ThemeOptions>(() => Options(palette, typography), [palette, typography]);

  const theme = createTheme(options);

  return theme;
};

export default createThemeOptions;

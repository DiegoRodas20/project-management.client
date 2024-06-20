import { ThemeOptions, createTheme } from "@mui/material/styles";
import useConfig from "../hooks/use-config";
import { useMemo } from "react";

const createThemeOptions = () => {
  const { fontFamily, mode } = useConfig();

//   const themeOptions: ThemeOptions = useMemo(() => ());

  const theme = createTheme();

  return theme;
};

export default createThemeOptions;

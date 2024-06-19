import { createTheme } from "@mui/material/styles";
import useConfig from "../hooks/use-config";

const createThemeOptions = () => {
    
    const { fontFamily, mode } = useConfig();

    const theme = createTheme();

    return theme;
};

export default createThemeOptions;

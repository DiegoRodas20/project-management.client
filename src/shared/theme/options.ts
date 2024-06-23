import { Theme, ThemeOptions, TypographyVariantsOptions } from "@mui/material/styles";
import { HEADER_HEIGHT } from "./configuration";

const Options = (theme: Theme, typography: TypographyVariantsOptions): ThemeOptions => ({
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 1024,
            lg: 1266,
            xl: 1440
        }
    },
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
    typography: typography
})

export default Options;
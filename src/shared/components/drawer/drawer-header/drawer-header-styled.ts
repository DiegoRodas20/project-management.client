import { styled, Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";

interface Props {
    open: boolean;
}

const DrawerHeaderStyled = styled(Box, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ open }: Props) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: open ? "flex-start" : "center",
}));

export default DrawerHeaderStyled;

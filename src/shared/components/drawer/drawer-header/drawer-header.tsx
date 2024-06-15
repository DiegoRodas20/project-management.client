import Logo from "../../logo/logo";
import DrawerHeaderStyled from "./drawer-header-styled";

const DrawerHeader = ({ open }: { open: boolean }) => {
    return (
        <DrawerHeaderStyled
            open={true}
            sx={{
                minHeight: 74,
                width: { xs: "100%", lg: 280 + 50 },
                paddingTop: { xs: "10px", lg: "0" },
                paddingBottom: { xs: "18px", lg: "0" },
                paddingLeft: { xs: "24px", lg: "0" },
            }}>
            <Logo sx={{ width: open ? 'auto' : 52, height: 'auto' }} />
        </DrawerHeaderStyled>
    );
};

export default DrawerHeader;

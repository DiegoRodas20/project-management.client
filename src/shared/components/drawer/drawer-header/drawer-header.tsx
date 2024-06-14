import Logo from "../../logo/logo";
import DrawerHeaderStyled from "./drawer-header-styled";

interface Props {
    open: boolean;
}

const DrawerHeader = ({ open }: Props) => {
    return (
        <DrawerHeaderStyled
            open={true}
            sx={{
                minHeight: "unset",
                width: { xs: "100%", lg: 280 + 50 },
                paddingTop: { xs: "10px", lg: "0" },
                paddingBottom: { xs: "18px", lg: "0" },
                paddingLeft: { xs: "24px", lg: "0" },
            }}>
            <Logo/>
        </DrawerHeaderStyled>
    );
};

export default DrawerHeader;

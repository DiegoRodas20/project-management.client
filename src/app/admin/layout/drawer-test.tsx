import DrawerHeader from "@/shared/components/drawer/drawer-header/drawer-header";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

interface Props {
    window?: () => Window;
}

const DrawerTest = ({ window }: Props) => {
    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box
            component="nav"
            sx={{ flexShrink: { md: 0 }, zIndex: 1200 }}
            aria-label="mailbox folders">
            <Drawer
                container={container}
                variant="temporary"
                open={true}
                ModalProps={{ keepMounted: true }}
                sx={{
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: 280,
                        borderRight: `1px solid #00000`,
                        backgroundImage: "none",
                        boxShadow: "inherit",
                    },
                }}>
                <DrawerHeader open={true}></DrawerHeader>
            </Drawer>
        </Box>
    );
};

export default DrawerTest;

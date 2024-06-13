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
                    display: { xs: 'block', lg: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 280,
                        borderRight: `1px solid #BEC8D0`,
                        backgroundImage: 'none',
                        boxShadow: 'inherit'
                    }
                }}>

            </Drawer>
        </Box>
    )
};

export default Drawer;

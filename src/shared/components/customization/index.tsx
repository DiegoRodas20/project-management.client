import { HEADER_HEIGHT } from "@/app/theme/configuration/configuration";
import CloseIcon from "@mui/icons-material/Close";
import SettingsIcon from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

const Customization = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            <Fab
                component="div"
                size="large"
                variant="circular"
                sx={{
                    borderRadius: 0,
                    borderTopLeftRadius: "50%",
                    borderBottomLeftRadius: "50%",
                    borderTopRightRadius: "4px",
                    borderBottomRightRadius: "4px",
                    top: "14%",
                    position: "fixed",
                    right: 0,
                    zIndex: 1200,
                    bgcolor: "background.paper",
                    border: `4px solid ${theme.palette.background.paper}`,
                    borderRight: "none",
                    "&:hover": {
                        bgcolor: "primary.lighter",
                    },
                }}>
                <IconButton onClick={handleToggle} aria-label="settings toggler">
                    <SettingsIcon />
                </IconButton>
            </Fab>
            <Drawer
                onClose={handleToggle}
                sx={{ zIndex: 2001 }}
                anchor="right"
                open={open}
                PaperProps={{
                    sx: {
                        width: 350,
                    },
                }}>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    spacing={1.5}
                    sx={{ p: 2.5 }}>
                    <Typography variant="h5">Settings</Typography>
                    <IconButton color="error" sx={{ p: 0 }} onClick={handleToggle}>
                        <CloseIcon />
                    </IconButton>
                </Stack>
                <Box sx={{ p: 3, height: `calc(100vh - ${HEADER_HEIGHT}px)` }}>
                    <Grid container spacing={2.5}>
                        <Grid item xs={12}>
                            <Stack>
                                <Typography variant="subtitle1">Theme Mode</Typography>
                                <Typography variant="caption">
                                    Choose light or dark mode
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12}>
                            Options
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                    </Grid>
                </Box>
            </Drawer>
        </>
    );
};

export default Customization;

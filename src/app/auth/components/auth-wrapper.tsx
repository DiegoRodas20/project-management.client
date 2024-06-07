import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ReactElement } from "react";
import AuthBackground from "./auth-background";
import AuthCard from "./auth-card";


export default function AuthWrapper({ children }: { children: ReactElement }) {
    return (
        <Box sx={{ minHeight: "100vh" }}>
            <AuthBackground></AuthBackground>
            <Grid
                container
                direction="column"
                justifyContent="center"
                sx={{ minHeight: "100vh" }}>
                <Grid item xs={12}>
                    <Grid
                        item
                        xs={12}
                        container
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            minHeight: {
                                xs: "calc(100vh - 210px)",
                                sm: "calc(100vh - 134px)",
                                md: "calc(100vh - 112px)",
                            },
                        }}>
                        <Grid item>
                            <AuthCard>{children}</AuthCard>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
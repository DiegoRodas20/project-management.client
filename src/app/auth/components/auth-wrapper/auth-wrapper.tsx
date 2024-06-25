import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ReactElement } from "react";
import AuthBackground from "../auth-background/auth-background";
import AuthCard from "../auth-card/auth-card";
import "./auth-wrapper.scss";

const AuthWrapper = ({ children }: { children: ReactElement }) => (

    <Box className="auth-wrapper">
        <AuthBackground />
        <Grid container className="grid1">
            <Grid item xs={12}>
                <Grid item xs={12} container className="grid2">
                    <Grid item>
                        <AuthCard>{children}</AuthCard>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box>

);

export default AuthWrapper;

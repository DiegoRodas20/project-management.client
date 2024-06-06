import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function SignIn() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
          sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
          <Typography variant="h3">Sign In</Typography>
          <Typography
            component={Link}
            href={""}
            variant="body1"
            sx={{ textDecoration: "none" }}
            color="primary"
            passHref>
              Dont have an account?
            </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}

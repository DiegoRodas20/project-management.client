import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const SignIn = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="baseline"
          sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
          <Typography variant="h3">Login</Typography>
        </Stack>
      </Grid>

      <Grid item xs={12}>
        <form>
          <Grid container spacing={3}>

            {/* Email */}
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="email-login">Email Address</InputLabel>
                <OutlinedInput
                  id="email-login"
                  type="email"
                  placeholder="Enter email address"
                  fullWidth
                />
              </Stack>
            </Grid>

            {/* Password */}
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="password-login">Password</InputLabel>
                <OutlinedInput
                  id="password-login"
                  type="password"
                  placeholder="Enter email address"
                  fullWidth
                />
              </Stack>
            </Grid>

            {/* Button */}
            <Grid item xs={12}>
              <Button
                disableElevation
                disabled={false}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="primary">
                Login
              </Button>
            </Grid>

          </Grid>
        </form>
      </Grid>

    </Grid>
  );
}

export default SignIn;
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const SignIn = () => {
  return (
    <Grid container spacing={3}>

      <Grid item xs={12}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
          sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
          <Typography variant="h3">Sign In</Typography>
        </Stack>
      </Grid>

      <Grid item xs={12}>
        <form>
          {/* Email */}
          <Grid item xs={12} paddingBottom={2}>
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
          <Grid item xs={12} paddingBottom={5}>
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

          {/* Button Login */}
          <Grid item xs={12}>
            <Button
              disableElevation
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="primary">
              Login
            </Button>
          </Grid>
        </form>
      </Grid>

    </Grid>
  );
}

export default SignIn;
import React from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import CheckBox from "@material-ui/core/Checkbox";
import { Button, FormControlLabel, Link, TextField } from "@material-ui/core";

function SignIn() {
 return (
  <Grid align="center">
   <Grid sm={7} md={5} lg={3}>
    <Paper>
     <Avatar>
      <LockOutlinedIcon />
     </Avatar>
     <Typography variant="h3">Sign In</Typography>

     <Grid>
      <TextField label="Email" placeholder="Enter Email" />
     </Grid>
     <Grid>
      <TextField label="Password" placeholder="Enter Password" type="password" />
     </Grid>
     <Grid>
      <FormControlLabel
       control={<CheckBox color="primary" />}
       label="Remember Me"
      />
     </Grid>
     <Grid>
       <Button color="primary" size="small" fullWidth variant="contained">Sign In</Button>
     </Grid>
     <Typography>
       <Link>Forgot password ?</Link>
     </Typography>
     <Typography> Don't have an account? 
       <Link href="/signup" >Sign Up</Link>
     </Typography>
    </Paper>
   </Grid>
  </Grid>
 );
}

export default SignIn;

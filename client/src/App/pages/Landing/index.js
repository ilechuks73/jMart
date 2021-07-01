import React from "react";
import { useHistory } from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { theme } from "../../config/theme";
import { ArrowRight } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
 container: {
  position: "fixed",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
 },
 // paper:{
 //   backgroundColor: theme.palette.primary.main,
 //   height: "100%"
 // },
 MuiPaper: {
  backgroundColor: theme.palette.primary.main,
  width: "100%",
  height: "100%",
 },
 button: {
  margin: theme.spacing(4, 0, 0, 0),
 },
}));

function Landing() {
 const classes = useStyles(theme);
 const history = useHistory();
 return (
  <Grid className={classes.container}>
   <Paper className={classes.MuiPaper}>
    <Typography 
    align={"center"} 
    variant={"h2"}>
     Yoopec
    </Typography>
    <Typography 
    align={"center"} 
    variant={"h4"}>
     Store
    </Typography>

    <Button
     className={classes.button}
     variant="contained"
     color={"secondary"}
     fullWidth
     onClick={() => {
      history.push("/home");
     }}
    >
     Start Shoppping
    </Button>
   </Paper>
  </Grid>
 );
}

export default Landing;

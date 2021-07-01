import React from "react";
import { useHistory } from "react-router-dom";
import { cartContext } from "../../contexts/cartContext";

import Fade from "@material-ui/core/Slide";

import { Typography, Grid, Button, makeStyles } from "@material-ui/core";
import Header from "./components/Header";
const useStyles = makeStyles((theme) => ({
 container: {
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 99,
  backgroundColor: "white",
 },
}));

function Cart() {
 const classes = useStyles();
 const { cart, setCart } = React.useContext(cartContext);
 return (
  <Fade in={cart.visibility} direction="top" >
   <Grid className={classes.container}>
    <Header />
    <Grid container>
     <Typography variant="p">{`Your cart items is ${0}`}</Typography>
     <Grid item></Grid>
    </Grid>
    <Grid>
     <Button
      color="primary"
      fullWidth
      disableElevation={true}
      variant="contained"
     >
      {"Check Out"}
     </Button>
    </Grid>
   </Grid>
  </Fade>
 );
}

export default Cart;

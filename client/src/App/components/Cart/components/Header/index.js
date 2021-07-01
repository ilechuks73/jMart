import React from "react";
import { useHistory } from "react-router-dom";


import { cartContext } from "../../../../contexts/cartContext";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { IconButton } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

function Header() {
 const history = useHistory();
 const { cart, setCart } = React.useContext(cartContext);
 console.log(history);
 return (
  <AppBar position={"relative"}>
   <Toolbar>
    <IconButton
     edge="start"
     color="inherit"
     onClick={() => {
      setCart({ ...cart, visibility: false });
     }}
    >
     <ChevronLeftIcon />
    </IconButton>
    <Typography variant="h6" noWrap>
     {"Cart"}
    </Typography>
   </Toolbar>
  </AppBar>
 );
}

export default Header;

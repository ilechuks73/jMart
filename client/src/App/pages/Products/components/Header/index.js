import React from "react";
import { useHistory } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { IconButton, Badge, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {
 ShoppingCart as ShoppingCartIcon,
 ChevronLeft as ChevronLeftIcon,
 Search as SearchIcon,
} from "@material-ui/icons";

const useStyles = makeStyles({
 title: {
  flexGrow: 1,
 },
});

function Header() {
 const history = useHistory();
 const classes = useStyles();
 console.log(history);
 return (
  <AppBar position={"relative"}>
   <Toolbar>
    <IconButton
     edge="start"
     color="inherit"
     onClick={() => {
      history.goBack();
     }}
    >
     <ChevronLeftIcon />
    </IconButton>
    <Typography variant="h6" noWrap className={classes.title}>
     {"Products"}
    </Typography>
    <IconButton
     aria-label="Show cart items"
     color="inherit"
     onClick={() => history.push("/cart")}
    >
     <Badge badgeContent={2} color="secondary">
      <ShoppingCartIcon />
     </Badge>
    </IconButton>
    <IconButton color="inherit">
     <SearchIcon />
    </IconButton>
   </Toolbar>
  </AppBar>
 );
}

export default Header;

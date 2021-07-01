import React from "react";
import {useHistory} from 'react-router-dom' 

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { IconButton } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

function Header() {
  const history = useHistory()
  console.log(history)
 return (
  <AppBar position={"relative"} >
   <Toolbar>
    <IconButton edge="start" color="inherit" onClick={()=>{
      history.goBack()
    }}>
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

import React from "react";
import {useHistory} from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles";
import {
 Grid as MuiGrid,
 Typography,
 List as MuiList,
 ListItem as MuiListItem,
 Drawer as MuiDrawer,
} from "@material-ui/core";

import { globalContext } from "../../contexts/globalContext";
import Avatar from "../Avatar";

const useStyles = makeStyles({
 list: {
  width: 250,
 },
 fullList: {
  width: "auto",
 },
 drawer: {
  backgroundColor: "blue",
 },
});

export default function Drawer() {
 const classes = useStyles();
 const history = useHistory()
 const { drawerState, setDrawerState } = React.useContext(globalContext);

 return (
  <MuiDrawer
   className={classes.drawer}
   open={drawerState.visibility}
   onClose={() => {
    setDrawerState({ visibility: false });
   }}
  >
   <MuiGrid align={"center"}>
    <Avatar />
   </MuiGrid>
   <MuiList className={classes.list}>
    <MuiListItem onClick={()=>{history.push("/home")}}>
     <Typography>{"Home"}</Typography>
    </MuiListItem>
    <MuiListItem onClick={()=>{history.push("/promo")}}>
     <Typography>{"Promotions"}</Typography>
    </MuiListItem>
    <MuiListItem>
     <Typography>{"Notifications"}</Typography>
    </MuiListItem>
    <MuiListItem onClick={()=>{history.push("/orders")}}>
     <Typography>{"My Orders"}</Typography>
    </MuiListItem>
    <MuiListItem onClick={()=>{history.push("/cart")}}> 
     <Typography>{"Cart"}</Typography>
    </MuiListItem>
    <MuiListItem>
     <Typography>{"My Account"}</Typography>
    </MuiListItem>
    <MuiListItem>
     <Typography>{"Settings"}</Typography>
    </MuiListItem>
   </MuiList>
  </MuiDrawer>
 );
}

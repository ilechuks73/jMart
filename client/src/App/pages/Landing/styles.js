import { makeStyles as MuiMakeStyles } from "@material-ui/core";

export const useStyles = MuiMakeStyles((theme) => {
 return {
  container: {
   backgroundColor: theme.palette.common.white,
   position: "fixed",
   padding: 0,
   left: 0,
   right: 0,
   top: 0,
   bottom: 0,
  },
  l1: {
   padding: theme.spacing(3, 3, 0, 3),
   width: "100%",
   height: "95%",
  },
  l11: {
   height: "100%",
   overflow: "hidden",
  },
  l111: {
   height: "inherit",
  },
  l12:{
    
  },
  l2: {
   height: "5%",
   padding: theme.spacing(0, 3),
  },

  b1:{
    borderRadius: theme.shape.borderRadius(3.5)
  },
  ib1:{
    backgroundColor: theme.palette.common.black,
    color:theme.palette.common.white,
    margin: theme.spacing(0,2)
    
  }
 };
});

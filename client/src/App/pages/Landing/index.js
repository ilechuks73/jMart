import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
 Button as MuiButton,
 IconButton as MuiIconButton,
 Grid as MuiGrid,
 Container as MuiContainer,
 Paper as MuiPaper,
 Typography as MuiTypography,
 makeStyles as MuiMakeStyles,
} from "@material-ui/core";
import {
 ArrowRight as MuiArrowRightIcon,
 AccountCircle as MuiAccountCircleIcon,
 ShoppingBasketOutlined as MuiShoppingBasketOutlinedIcon,
} from "@material-ui/icons";

import { useStyles } from "./styles";

import { image1 } from "../../images";

function Landing() {
 const classes = useStyles();
 const history = useHistory();

 useEffect(function () {
  console.log(__dirname);
 }, []);

 return (
  <MuiContainer maxWidth={false} className={classes.container}>
   <MuiGrid container={true} maxWidth={false} className={classes.l1}>
    <MuiGrid item={true} md={4} className={classes.l11}>
     <img src={image1} alt={"landing"} className={classes.l111} />
    </MuiGrid>
    <MuiGrid item={true} md={8} className={classes.l12}>
     <MuiGrid md={12} container={true} justify={"flex-end"} className={classes.l121}>
      <MuiButton variant={"outlined"} className={classes.b1}>
       {"My Account"}
      </MuiButton>
      <MuiIconButton
       className={classes.ib1}
       children={<MuiShoppingBasketOutlinedIcon />}
      />
     </MuiGrid>
    </MuiGrid>
   </MuiGrid>
   <MuiGrid
    container={true}
    direction={"row"}
    alignContent={"center"}
    className={classes.l2}
   >
    <MuiTypography>Next</MuiTypography>
    <MuiArrowRightIcon />
   </MuiGrid>
  </MuiContainer>
  // <MuiGrid className={}>
  //  <MuiPaper className={}>
  //   <MuiTypography align={"center"} variant={"h2"}>
  //    Yoopec
  //   </MuiTypography>
  //   <muiTypography align={"center"} variant={"h4"}>
  //    Store
  //   </muiTypography>

  //   <MuiButton
  //    className={}
  //    variant="contained"
  //    color={"secondary"}
  //    fullWidth
  //    onClick={() => {
  //     history.push("/home");
  //    }}
  //   >
  //    Start Shoppping
  //   </MuiButton>
  //  </MuiPaper>
  // </MuiGrid>
 );
}

export default Landing;

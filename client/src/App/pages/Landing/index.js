import {useEffect} from "react";
import { useHistory } from "react-router-dom";
import {
 Button as MuiButton,
 Grid as MuiGrid,
 Container as MuiContainer,
 Paper as MuiPaper,
 Typography as MuiTypography,
 makeStyles as MuiMakeStyles,
} from "@material-ui/core";
import { ArrowRight as MuiArrowRight } from "@material-ui/icons";

import { useStyles } from "./styles";

import {image1} from "../../images"

const path = require("path")

function Landing() {
 const classes = useStyles();
 const history = useHistory();

useEffect(function(){
  console.log(path.dirname(), __dirname)
}, [])

 return (
  <MuiContainer maxWidth={false} className={classes.container}>
   <MuiGrid container={true}>
    <MuiGrid item={true} md={6}>
      <img src={image1} alt={'landing iamge'} />
    </MuiGrid>
    <MuiGrid item={true} md={6}></MuiGrid>
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

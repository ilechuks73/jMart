import {makeStyles as MuiMakeStyles} from "@material-ui/core"

export const useStyles = MuiMakeStyles((theme)=>{
  return({
    container: {
      backgroundColor : theme.palette.primary.main,
      position: "fixed",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    }
  })
})
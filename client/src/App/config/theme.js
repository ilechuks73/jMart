import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

export const theme = createMuiTheme({
  palette : {
    primary : {
      main: '#e65564',
      
    },
    secondary:{
      main: '#ff0303'
    }
  },
  shape:{
    borderRadius: function(num){
      return 5*num
    }
  }
})
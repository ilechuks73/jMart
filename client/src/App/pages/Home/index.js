import React from 'react'
import Header from "../../components/Header"
import Drawer from "../../components/Drawer"
import { Grid, Typography } from '@material-ui/core'
import Hero from './components/Hero'
import Cart from '../../components/Cart'
import {cartContext} from "../../contexts/cartContext"

function Home() {
  const {cart, setCart} = React.useContext(cartContext)
  return (
    <div>
      <Header/>
      <Drawer />
      <Cart/>
      <Grid container>
        <Grid item xs={12}>
         <Hero />
        </Grid>
        <Typography variant="h6">
          {"Foods You May Enjoy"}
        </Typography>
      </Grid>
    </div>
  )
}

export default Home

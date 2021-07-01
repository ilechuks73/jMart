import { Card, CardContent, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
  container: {
    backgroundImage: `url()`,
    backgroundColor: `blue`,
    padding: '10px'
  }
})

function Hero() {
  const classes = useStyles()
  return (
    <Card className={classes.container}>
      <CardContent>
        <Typography variant="h1">
          {"HERO"}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Hero

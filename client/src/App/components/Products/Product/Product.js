import React ,{useState,useEffect} from 'react'
import {Card,CardMedia,CardContent,CardActions,Typography,IconButton, makeStyles, Button} from "@material-ui/core";
import { AddShoppingCart } from '@material-ui/icons';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '100%',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    cardActions: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    cardContent: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  }));

  export default function Product({ product }) {
    const [products,setproducts]=useState([]);
    const [hasError,setError] =useState(false);
    async function getProducts(){
      const res=await fetch(`https://pos.eocambo.com/api/products/1196520494051841/16`)
      res
         .json()
         .then(res=>{
           console.log(res.data)
           setproducts(res.data)
         })
         .catch((error)=>{
           setError(error);
         })
    }
    /*async function addtoCart(){
      try {
        const response =await fetch(`http://localhost:4000/cart`,{
          method:"POST",
          body:JSON.stringify({
            productId: id,
            quantity: quantity,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        let data = await response.json();
        alert("Item Added To Cart");
        console.log(data);
      } catch (err) {
        alert("Something Went Wrong");
        console.log(err);
      }
        
      } */
      useEffect(()=>{
        getProducts();
      },[])
      console.log(products)
    const classes=useStyles(); 

    return (

      <Card className={classes.root}>
        <CardMedia className={classes.media} image="" title={product.name} />
          <CardContent>
            <div className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                ${product.price}
              </Typography>
            </div>
            
          </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add to Cart" >
            <AddShoppingCart />
          </IconButton>
        </CardActions>
    </Card>
    )
}

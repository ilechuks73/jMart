import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import HomePage from "./pages/Home";
import CategoryPage from "./pages/Category";
import LandingPage from "./pages/Landing";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import { GlobalStore } from "./contexts/globalContext";
import { CartStore } from "./contexts/cartContext";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./config/theme";
import ProductsPage from "./pages/Products";

function App() {
 return (
  <GlobalStore>
   <CartStore>
    <MuiThemeProvider theme={theme}>
     <BrowserRouter>
      <Route exact path="/">
        <Redirect to="/welcome" />
      </Route>
       <Route path="/welcome">
        <LandingPage />
       </Route>
       <Route path="/home">
        <HomePage />
       </Route>
       <Route path="/category">
        <CategoryPage />
       </Route>
       <Route path="/signin">
        <SignInPage />
       </Route>
       <Route path="/signup">
        <SignUpPage />
       </Route>
       <Route path="/products">
        <ProductsPage />
       </Route>
      
     </BrowserRouter>
    </MuiThemeProvider>
   </CartStore>
  </GlobalStore>
 );
}

export default App;

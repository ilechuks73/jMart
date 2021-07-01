import React from "react";

export const cartContext = React.createContext();

export function CartStore({children}) {

  const [cart, setCart] = React.useState({
    visibility: false,
    items: []
  })

  return (
    <cartContext.Provider value={{cart, setCart}}>
      {children}
    </cartContext.Provider>
  )
}

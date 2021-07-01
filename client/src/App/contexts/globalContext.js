import React from "react";

export const globalContext = React.createContext();

export const GlobalStore = ({ children }) => {
  const [modal_state, set_modal_state] = React.useState({
    visibility: "hidden",
    content: null,
  });

  const [notificationState, setNotificationState] = React.useState({
    visibility : false,
    content: null
  });
  const [drawerState, setDrawerState] = React.useState({
    visibility : false
  })

  return (
    <globalContext.Provider value={{drawerState, setDrawerState, modal_state, set_modal_state }}>
      {children}
    </globalContext.Provider>
  );
};

// export const useModal = (visibilty, content) => {
//   const { set_modal_state } = React.useContext(ComponentContext);
//   return () => {
//     set_modal_state({
//       visibilty: visibilty,
//       content: content,
//     });
//   };
// };

// export const useNotification = (visibilty, content) =>{
//   const {set_notification_state} = React.useContext(ComponentContext)

//   return ()=>{
//     set_notification_state({
//       visibilty: "visible",
//       content: content
//     })
//   }
// }
// import {
//     createContext,
//     useContext,
//     useReducer,
//   } from "react";
  
//   export const ChatContext = createContext();
  
//   export const ChatContextProvider = ({ currentUser }) => {
//     // const { currentUser } = useContext(AuthContext);
//     const INITIAL_STATE = {
//       chatId: "null",
//       user: {},
//     };
  
//     const chatReducer = (state, action) => {
//       switch (action.type) {
//         case "CHANGE_USER":
//           return {
//             user: action.payload,
//             chatId:
//               currentUser.id > action.payload.id
//                 ? currentUser.id + action.payload.id
//                 : action.payload.id + currentUser.id,
//           };
  
//         default:
//           return state;
//       }
//     };
  
//     const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);
  
//     return (
//       <ChatContext.Provider value={{ data:state, dispatch }}>
//         {currentUser}
//       </ChatContext.Provider>
//     );
//   };
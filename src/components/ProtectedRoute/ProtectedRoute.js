import React from 'react';
// import { Route, Redirect } from "react-router-dom";
import { Route, Navigate } from "react-router-dom";

// const ProtectedRoute = ({ component: Component, ...props }) => {
//   return (
//     <Route>
//       {
//         () => props.isLoggedIn === true
//           ? <Component {...props} />
//           : <Navigate to="/dashboard" replace={true} />
//         // : <Redirect to="./sign-in" />
//       }
//     </Route>
//   )
// }
const ProtectedRoute = ({
  isLoggedIn,
  redirectPath = '/',
  children,
}) => {
  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
export default ProtectedRoute;
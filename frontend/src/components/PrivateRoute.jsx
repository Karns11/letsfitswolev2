// import { Outlet, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// const PrivateRoute = () => {
//   const { userInfo } = useSelector((state) => state.auth);

//   // return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
//   if (!userInfo) {
//     return <Navigate to="/" replace />;
//   }
//   return <Outlet />;
// };

// export default PrivateRoute;

import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;

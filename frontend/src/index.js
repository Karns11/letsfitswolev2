import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
// import HomeScreen from "./screens/HomeScreen";
// import LoginScreen from "./screens/LoginScreen";
import "bootstrap/dist/css/bootstrap.min.css";
// import RegisterScreen from "./screens/RegisterScreen";
import { Provider } from "react-redux";
import store from "./store";
// import MainScreen from "./screens/MainScreen";
// import PrivateRoute from "./components/PrivateRoute";
// import ProfileScreen from "./screens/ProfileScreen";
// import WorkoutScreen from "./screens/WorkoutScreen";
// import AddFriendsScreen from "./screens/AddFriendsScreen";
// import FriendScreen from "./screens/FriendScreen";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route index={true} path="/" element={<HomeScreen />} />
//       <Route path="/login" element={<LoginScreen />} />
//       <Route path="/register" element={<RegisterScreen />} />
//       <Route path="" element={<PrivateRoute />}>
//         <Route path="/mainscreen" element={<MainScreen />} />
//         <Route path="/profile" element={<ProfileScreen />} />
//         <Route path="/users/workout/:id" element={<WorkoutScreen />} />
//         <Route path="/profile/addfriends" element={<AddFriendsScreen />} />
//         <Route path="/profile/friends/:friendId" element={<FriendScreen />} />
//       </Route>
//     </Route>
//   )
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/users/homePage";
import { ROUTERS } from "./utils/router";
import ProfilePage from "./pages/users/profilePage";
import Product from "pages/users/product";

const renderUserRouter = () => {
  const userRouter = [
    {
      path: ROUTERS.USER.HOME,
      component: <HomePage />,
    },
    {
      path: ROUTERS.USER.PROFILE,
      component: <ProfilePage />,
    },
    {
      path: ROUTERS.USER.STORE,
      component: <ProfilePage />,
    },
    {
      path: ROUTERS.USER.PRODUCT,
      component: <Product />,
    },
  ];

  return (
    <Routes>
      {userRouter.map((item, index) => (
        <Route key={index} path={item.path} element={item.component} />
      ))}
    </Routes>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;

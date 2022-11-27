import AccountSetting from "../views/pages/account";
import Anorganik from "../views/pages/anorganik";
import Home from "../views/pages/home";
import ListPengepul from "../views/pages/list";
import Login from "../views/pages/login";
import Organik from "../views/pages/organik";
import ChangePassword from "../views/pages/password";
import Register from "../views/pages/register";
import Setting from "../views/pages/setting";

const routes = {
  "/": Home, // Main Page
  "/list": ListPengepul,
  "/organik": Organik,
  "/anorganik": Anorganik,
  "/login": Login,
  "/register": Register,
  "/setting/:id": Setting,
  "/setting/:id/account": AccountSetting,
  "/setting/:id/password": ChangePassword,
};

export default routes;

import Cookies from "js-cookie";

class CookieStorage {
  setLogin = (token:string) => {
    Cookies.set("token", token);
  };
  getLogin = () => {
    if (Cookies.get("token")) {
      return true;
    } else {
      return false;
    }
  };
  logout = () => {
    Cookies.remove("token");
    Cookies.remove("client_id");
  };
}

export default CookieStorage;
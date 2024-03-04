import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SiteRoutes from "./SiteRoutes";
import { useNavigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user"))?? null);
  }, []); //kullanıcı sayfayı yenilerse logout yapmaması için gerekli kod
  

  const handleLogin = () => {
    const user = { id: 1, name: "mert" };
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <>
      <Navbar user={user} handleLogout={handleLogout} />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <SiteRoutes handleLogin={handleLogin} user={user} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

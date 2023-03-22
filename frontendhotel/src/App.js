import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import AddNewRoom from "./pages/rooms/AddNewRoom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Rooms from "./pages/rooms/Rooms";
import { useCookies } from 'react-cookie'
import Staffs from "./pages/staffs/Staffs";
function App() {
  const { darkMode } = useContext(DarkModeContext);
  const [cookies, setCookie] = useCookies(['Name']);
 
  const [user, setUser] = useState("");
  console.log(user);
  useEffect(() => {
    if(cookies.Name == "undefined"){
      setUser("");
      console.log("User already")
    }else{
      setUser(cookies.Name);
    }
    
  },[cookies]);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={user ? <Home />: <Login/>} />
            <Route path="login" element={user ? <Home /> : <Login/>} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="rooms">
              <Route index element={<Rooms />} />
              <Route
                path="addnewroom"
                element={<AddNewRoom inputs={userInputs} title="Add New room" />}
              />
            </Route>
            <Route path="staffs">
              <Route index element={<Staffs />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

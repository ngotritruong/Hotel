import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import AddNewRoom from "./pages/rooms/addnewrooms/AddNewRoom";
import UpdateRoom from "./pages/rooms/updaterooms/UpdateRoom";

import AddNewStaff from "./pages/staffs/addnewstaff/AddNewStaff";
import UpdateStaff from "./pages/staffs/updatestaff/UpdateStaff";
import ViewStaff from "./pages/staffs/viewstaff/ViewStaff";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs} from "./formSource";
import "./style/dark.scss";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Rooms from "./pages/rooms/Rooms";
import { useCookies } from 'react-cookie'
import Staffs from "./pages/staffs/Staffs";
import Customer from "./pages/customer/Customer";
import AddNewCustomer from "./pages/customer/addNewCustomer/AddNewCustomer";
import ViewCustomer from "./pages/customer/viewCustomer/ViewCustomer";
import UpdateCustomer from "./pages/customer/updateCustomer/UpdateCustomer";
import Reservation from "./pages/reservation/Reservation";
import AddReservation from "./pages/reservation/addreservation/AddReservtion";
import UpdateReservation from "./pages/reservation/updatereservation/UpdateReservation";
function App() {
  const { darkMode } = useContext(DarkModeContext);
  const [cookies, setCookie] = useCookies(['Name']);
 
  const [user, setUser] = useState("");
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
                element={<AddNewRoom title="Add New Room"/>}
              />
              <Route
                path="updateroom"
                element={<UpdateRoom title="Update Room"/>}
              />
            </Route>
            <Route path="staffs">
              <Route index element={<Staffs />} />
              <Route
                path="addnewstaff"
                element={<AddNewStaff title="Add New Staff"/>}
              />
              <Route
                path="updatestaff"
                element={<UpdateStaff title="Update Staff"/>}
              />
              <Route
                path="viewstaff"
                element={<ViewStaff/>}
              />
            </Route>
            <Route path="customer">
              <Route index element={<Customer />} />
              <Route
                path="addnewcustomer"
                element={<AddNewCustomer title="Add New Staff"/>}
              />
              <Route
                path="updatecustomer"
                element={<UpdateCustomer title="Update Customer"/>}
              />
              <Route
                path="viewcustomer"
                element={<ViewCustomer/>}
              />
            </Route>
            <Route path="reservation">
              <Route index element={<Reservation />} />
              <Route
                path="addreservation"
                element={<AddReservation title="Add New Staff"/>}
              />
              <Route
                path="updatereservation"
                element={<UpdateReservation title="Update Customer"/>}
              />
              
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

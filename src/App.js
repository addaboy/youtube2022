import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import DepList from "./pages/list/DepList";
import New_Dept from "./pages/departments/New_Dept";
import DoctorsList from "./pages/list/DoctorsList";
import PharmaList from "./pages/list/PharmaList";
import LabList from "./pages/list/LabList";
import AdminList from "./pages/list/AdminList";
import New_Doctors from "./pages/doctors/New_Doctors";
import Pharmacists from "./pages/pharmacists/Pharmacists";
import Laboratory from "./pages/laboratory/Laboratory";
import Admins from "./pages/admins/Admins";


function App() {
  const { darkMode } = useContext(DarkModeContext);

  const {currentUser } = useContext(AuthContext)

  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/login" />
   
  }

 

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route index element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            } />
            <Route path="users">
              <Route index element={
                <RequireAuth>
                  <List />
                </RequireAuth>
              } />
              <Route path=":userId" element={
                <RequireAuth>
                  <Single />
                </RequireAuth>
              } />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={userInputs} title="Add New User" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="departments">
              <Route index element={
                <RequireAuth>
                  <DepList />
                </RequireAuth>
              } />
              <Route
                path="new_dept"
                element={
                  <RequireAuth>
                    <New_Dept inputs={productInputs} title="Add New Department" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="doctors">
              <Route index element={
                <RequireAuth>
                  <DoctorsList />
                </RequireAuth>
              } />
              <Route
                path="new_doctors"
                element={
                  <RequireAuth>
                    <New_Doctors inputs={userInputs} title="Add New Doctor" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="pharmacy">
              <Route index element={
                <RequireAuth>
                  <PharmaList />
                </RequireAuth>
              } />
              <Route
                path="pharmacists"
                element={
                  <RequireAuth>
                    <Pharmacists inputs={userInputs} title="Add New Pharmacist" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="labs">
              <Route index element={
                <RequireAuth>
                  <LabList />
                </RequireAuth>
              } />
              <Route
                path="laboratory"
                element={
                  <RequireAuth>
                    <Laboratory inputs={userInputs} title="Add New Laboratory" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="adminstration">
              <Route index element={
                <RequireAuth>
                  <AdminList />
                </RequireAuth>
              } />
              <Route
                path="admins"
                element={
                  <RequireAuth>
                    <Admins inputs={userInputs} title="Add New Admins" />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

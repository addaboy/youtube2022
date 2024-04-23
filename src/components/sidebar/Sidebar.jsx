import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState, useEffect } from "react";
import { db } from "../../firebase";


const Sidebar = () => {

const [data, setData] = useState('');





  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">HFHMS</span>
        </Link>
      </div>
      <hr />
      <div className="center">
      <div className="currentUser">
          <span className="welcome">Welcome, </span><span className="uname">Admin</span>
          </div>
        <ul>
          <p className="title">MAIN</p>
          <li>
          <Link to="/" style={{ textDecoration: "none" }}>
            <DashboardIcon className="icon" />
            <span>Admin Dashboard</span>
            </Link>
          </li>
          <p className="title">ACTORS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <li>
          <Link to="/doctors" style={{ textDecoration: "none" }}>
            <CreditCardIcon className="icon" />
            <span>Doctors</span>
            </Link>
          </li>
          <li>
          <Link to="/pharmacy" style={{ textDecoration: "none" }}>
            <InsertChartIcon className="icon" />
            <span>Pharmacist</span>
            </Link>
          </li>
          <li>
          <Link to="/labs" style={{ textDecoration: "none" }}>
            <InsertChartIcon className="icon" />
            <span>Laboratory</span>
            </Link>
          </li>
          <li>
          <Link to="/adminstration" style={{ textDecoration: "none" }}>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Admins</span>
            </Link>
          </li>
          <p className="title">SERVICES</p>
          <Link to="/departments" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Departments</span>
            </li>
          </Link>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;

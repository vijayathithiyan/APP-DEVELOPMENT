import React from "react";
import "../assets/css/Dashboard.css";
import { ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RedeemSharpIcon from "@mui/icons-material/RedeemSharp";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { selectUser } from "./redux/UserSlice";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const drawerWidth = "250px";
  const user = useSelector(selectUser);
  const email = user.user && user.user.email ? user.user.email : "Guest";

 
  
  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <div className="navbar">
        {/* Navbar content */}
        <ul>
          <li>
            <a href="#organization">{email}</a>
          </li>
          <li>
            <a href="#volunteer">About</a>
          </li>
          <li>
            <a href="login">Logout</a>
          </li>
        </ul>
      </div>

      <div className="sidebar">
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "rgb(49, 49, 48)",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto", color: "white" }}>
            <List>
              {[
                {
                  text: "Dashboard",
                  icon: <DashboardIcon sx={{ color: "white" }} />,
                },
                {
                  text: "Volunteers",
                  icon: <HomeIcon sx={{ color: "white" }} />,
                  route: "/home",
                },
                {
                  text: "Users",
                  icon: <RedeemSharpIcon sx={{ color: "white" }} />,
                },
                {
                  text: "Analytics",
                  icon: <AccountCircleRoundedIcon sx={{ color: "white" }} />,
                },
              ].map((item, index) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Grid Container */}
        <div className="grid-container">
          {/* Grid Items */}
          <div className="grid-item">
            <h2>No of events</h2>
            <p>3</p>
          </div>

          <div className="grid-item">
            <h2>No of events enrolled</h2>
            <p>20</p>
          </div>

          <div className="grid-item">
            <h2>Max.No of volunteers possible</h2>
            <p>50</p>
          </div>
        </div>

        {/* Event Table */}
        <table className="event-table">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Volunteers Enrolled</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Event 1</td>
              <td>25 volunteers enrolled</td>
            </tr>
            <tr>
              <td>Event 2</td>
              <td>15 volunteers enrolled</td>
            </tr>
            <tr>
              <td>Event 3</td>
              <td>10 volunteers enrolled</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <footer className="footer">&copy; 2023 Your Organization Name</footer>
    </div>
  );
};

export default Dashboard;

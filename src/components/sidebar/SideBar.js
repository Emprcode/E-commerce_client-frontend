import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FaShirt } from "react-icons/fa6";
import { PiPantsFill } from "react-icons/pi";
import { GiRunningShoe } from "react-icons/gi";
import { IoMdGlasses } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { BsMenuButtonWideFill } from "react-icons/bs";

export const SideBar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const menuItems = [
    { text: "Jerseys", icon: <FaShirt size={25} /> },
    { text: "Shorts", icon: <PiPantsFill size={25} /> },
    { text: "Boots", icon: <GiRunningShoe size={25} /> },
    // { text: "Headwares", icon: <FaHatCowboy size={25} /> },
    { text: "Accessories", icon: <IoMdGlasses size={25} /> },
  ];
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List className="mt-2">
        <ListItem disablePadding>
          <ListItemButton component={Link} to={`/`}>
            <ListItemText
              primary={
                <Typography variant="h4" fontWeight="bold">
                  aceXsports
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List className="fw-bold">
        {menuItems.map(({ text, icon }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              component={Link}
              to={`/kits-${String(text).toLowerCase()}`}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          // "New Arrivals",
          "Shop All Kits",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={`/all-kits`}>
              <ListItemIcon>
                {index % 2 === 0 ? <MdDashboard /> : <BsMenuButtonWideFill />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

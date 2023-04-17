import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export const SideBar =()=> {
  const { collapseSidebar } = useProSidebar();

  return (
    <div id="app" style={({ height: "100vh" })}>
      <Sidebar style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={({ textAlign: "center" })}
          >
            {" "}
            <h4>The AceAttire</h4>
          </MenuItem>

          <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>TOPS</MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}>BOTTOMS</MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>FOOTWARES</MenuItem>
         
        </Menu>
      </Sidebar>
      {/* <main>
        <h1 style={{ color: "white", marginLeft: "5rem" }}>
          React-Pro-Sidebar
        </h1>
      </main> */}
    </div>
  );
}


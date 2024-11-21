import styles from "./Header-module.scss";
import { Grid, Link } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faRightFromBracket,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Header() {
  // drawer
  const [isInputVisible, setInputVisible] = useState(false);

  const handleSearchClick = () => {
    setInputVisible(!isInputVisible);
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List></List>
    </Box>
  );

  return (
    <Grid className="header" container spacing={2}>
      <Grid className={cx("no_pt", "header_pp")} item md={2} sm={3} xs={3}>
        {/* logo  */}
        <a href={"/"}>
          <img
            className="Header_img"
            src={"https://www.mcivietnam.com/media/home/new-logo.png"}
            alt={"logo"}
          />
        </a>
        {/* drawer  */}
        <div className="drawer">
          {["top"].map((anchor) => (
            <React.Fragment key={anchor}>
              <FontAwesomeIcon
                className="header_menu_drawer"
                onClick={toggleDrawer(anchor, true)}
                icon={faBars}
              >
                {anchor}
              </FontAwesomeIcon>
              <Button></Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      </Grid>
      {/* nav link  */}
      <Grid item md={6} xs={1} className="header_nav">
        <ul className="list_header_item">
          <li className="item_header">
            Khóa học
            <FontAwesomeIcon className="Header_icon-li" icon={faCaretDown} />
          </li>
          <li className="item_header">Lịch Đào Tạo</li>
          <li className="item_header">
            Doanh nghiệp
            <FontAwesomeIcon className="Header_icon-li" icon={faCaretDown} />
          </li>
          <a href={"/Blog"}>
            <li className="item_header">Blog</li>
          </a>
          <li className="item_header">
            Về chúng tôi
            <FontAwesomeIcon className="Header_icon-li" icon={faCaretDown} />
          </li>
        </ul>
      </Grid>

      {/* option */}
      <Grid item md={4} sm={4} xs={6} className="header_list_profile">
        <FontAwesomeIcon
          icon={faSearch}
          className="Header_icon_search"
          onClick={handleSearchClick}
        />
        {isInputVisible && (
          <input placeholder="search" className="header_search" />
        )}
        <button className="Search_Button">Đăng Nhập</button>
        <FontAwesomeIcon className="Search_Icon" icon={faRightFromBracket} />
      </Grid>
    </Grid>
  );
}

export default Header;

import React from "react";
import { Container, IconButton } from "~/containers";
import "./NavBar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from '@mui/icons-material/Login';

const NavBar = () => {
  // Menu
  const Menu = () => {
    return (
      <div className="navbarMenu">
        <input type="checkbox" id="checkMenu" />
        <label for="checkMenu">
          <IconButton>
            <MenuIcon />
          </IconButton>
        </label>
        <div className="navListMenuOn">
          <div className="item">Trang chủ</div>
          <div className="item">Giới thiệu</div>
          <div className="item">Sản phẩm</div>
          <div className="item">Blog</div>
          <div className="item"><LoginIcon/> &nbsp; Đăng nhập</div>
        </div>
      </div>
    );
  };

  // Brand
  const Brand = ({ children }) => {
    return <div className="brand">{children}</div>;
  };

  // NavList
  const NavList = () => {
    return (
      <div className="navList">
        <div className="item">Trang chủ</div>
        <div className="item">Giới thiệu</div>
        <div className="item">Sản phẩm</div>
        <div className="item">Blog</div>
      </div>
    );
  };

  // Search
  const Search = () => {
    return (
      <div className="searchBar">
        <input
          className="input"
          type="text"
          placeholder="Bạn đang tìm gì?"
        ></input>
        <div className="buttonSubmit">
          <SearchIcon />
        </div>
      </div>
    );
  };

  // Right NavBar
  const NavBarRight = () => {
    return (
      <div className="navBarRight">
        <div className="loginButton">Đăng nhập</div>
        <IconButton>
          <LocalMallIcon />
        </IconButton>
      </div>
    );
  };

  return (
    <div className="navbar">
      <Container>
        <Menu />
        <Brand>Tech</Brand>
        <NavList />
        <Search />
        <NavBarRight />
      </Container>
    </div>
  );
};

export default NavBar;

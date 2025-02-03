import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faHeart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const [menuOpen, setMenuOpen] = useState(false); // 메뉴 상태 관리
  const [activeMenu, setActiveMenu] = useState(""); // 활성화된 메뉴 상태 관리

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const menuList = ["Top", "Pants", "Outer", "Shoes", "Dress"]; // 언어 및 통화 메뉴

  return (
    <div className="navbar-container">
      {/* 로고 */}
      <div className="navbar-logo">
        <Link to="/">GLOOMYDAY</Link>
      </div>

      {/* 햄버거 메뉴 */}
      <div className="hamburger" onClick={toggleMenu}>
        <div>MENU</div>
      </div>

      {/* 메뉴 및 아이콘 */}
      <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
        {menuList.map((menu, index) => (
          <span
            key={index}
            className={`menu-item ${activeMenu === menu ? "active" : ""}`}
            onClick={() => handleMenuClick(menu)}
          >
            {menu}
          </span>
        ))}
        <div className="navbar-icons">
          <div className="icon">
            <FontAwesomeIcon icon={faSearch} className="icon-img" />
            <span className="icon-label">SEARCH</span>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faUser} className="icon-img" />
            <span className="icon-label">ACCOUNT</span>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faHeart} className="icon-img" />
            <span className="icon-label">WISH</span>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faShoppingBag} className="icon-img" />
            <span className="icon-label">CART</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
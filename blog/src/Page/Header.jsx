import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
        <nav className="head_menu">
          <div id = "logo_div">
            <Link to ="/" id="logo">
                <img src={"/img/DC_inside_logo.png"} id="App-logo" alt="react" />
            </Link>
          </div>
          <input type="text" id="search_page" name="search" autoComplete="off" placeholder="갤러리 & 통합검색"/>
          {/* onclick시 search의 내용을 서버에 전달하여 내용에 포함된 내용을 가져와 출력 */}
          <button type="button" id="search_btn">
            검색
          </button>
        </nav>
        <div className="menu_bar">
          <ul>
            <li>갤러리</li>
            <li>마이너갤</li>
            <li>미니갤</li>
            <li>갤로그</li>
            <li>디시뉴스</li>
          </ul>
        </div>
    </header>
  );
}

export default Header;
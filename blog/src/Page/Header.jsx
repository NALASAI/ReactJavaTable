import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Head_Footer.css";

function Header() {
  return (
    <header>
        <nav>
            <Link to ="/" className="logo">
                로고
            </Link>
            <input type="text" placeholder="갤러리 & 통합검색"/>
        </nav>
        <nav>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </nav>
    </header>
  );
}

export default Header;
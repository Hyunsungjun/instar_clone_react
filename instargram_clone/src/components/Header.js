import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.svg"; //정의 추적을 해보았는데 리액트 내에서 svg를 포함한 이미지 확장자를 처리해주는 부분이 구현 되어 있었다.
import camera from "../assets/camera.svg";

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
        <Link to="/">
          <img src={logo} alt="InstaLogo" />
        </Link>
        <input type="box"/>
        <Link to="/new">
          <img src={camera} alt="camera" />
        </Link>
      </div>
    </header>
  );
}

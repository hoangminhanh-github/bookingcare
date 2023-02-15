import Image from "next/image";
import React from "react";
import { AiFillQuestionCircle } from "react-icons/ai";

const LOGO = require("src/assets/images/logo.svg");

const Navbar = () => {
  return (
    <div
      className="container"
      style={{
        width: "70%",
        display: "flex",
        margin: "auto",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Image
        src={LOGO}
        alt=""
        style={{ color: "transparent", width: "168px", height: "50px" }}
      ></Image>
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <span>Hỗ trợ</span>
        <AiFillQuestionCircle color="#46C3D2"></AiFillQuestionCircle>
      </div>
    </div>
  );
};

export default Navbar;

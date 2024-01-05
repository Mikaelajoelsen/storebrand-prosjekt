import React from "react";
import { FaBars } from "react-icons/fa6";
export default function Header() {
  return (
    <div>
      <img src="/storebrand-logo.svg" />
      <div className="nav-icon">
        <FaBars></FaBars>
      </div>
    </div>
  );
}

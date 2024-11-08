import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import loc from "../assets/localization";

function Header() {
  return (
    <header>
      <div className="container-header">
        <span>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <div>
          <h1 className="crimson-text-regular common" >{loc.commonDasro}</h1>
        </div>
        <span>
          <FontAwesomeIcon icon={faBars} />
        </span>
      </div>

      <ul className="container-menu">
        <li className="montserrat-menu">
          <a href="" >{loc.headerProducts}</a>
        </li>
        <li>
          <a href="">{loc.headerAbout}</a>
        </li>
        <li>
          <a href="">{loc.headerFeedback}</a>
        </li>
        <li>
          <a href="">{loc.headerOrder}</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header>
      <div class="container-header">
        <span>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <div>
          <h1>Dasrô</h1>
        </div>
        <span>
          <FontAwesomeIcon icon={faBars} />
        </span>
      </div>

      <ul class="container-menu">
        <li>
          <a href="">PRODUTOS</a>
        </li>
        <li>
          <a href="">SOBRE NÓS</a>
        </li>
        <li>
          <a href="">FEEDBACK</a>
        </li>
        <li>
          <a href="">ENCOMENDAS</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;

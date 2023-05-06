import React from "react";
import "./Navbar.css";
import img1 from "../Assets/EstrellaTera_logo-01 1.png";
import { useDispatch, useSelector } from "react-redux";
import { connectionAction } from "../../redux/connection/actions";
// import {change} from "../../redux/action/action"

const Navbar = () => {
  const dispatch = useDispatch();
  const addr = useSelector((state) => state.connected.connection);
  // console.log(addr);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container d-flex justify-content-between">
          <a class="navbar-brand me-md-5 me-0" href="#">
            <img src={img1} width="70" alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse   " id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  What is ETA
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Comission
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link "
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  ETA Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link "
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Telegram
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link "
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Discord
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link "
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Faq
                </a>
              </li>
            </ul>

            <button
              class="  button_connect"
              type="submit"
              onClick={() => {
                dispatch(connectionAction());
              }}
            >
              {addr}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

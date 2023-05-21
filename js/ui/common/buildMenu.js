import { isLoggedIn, getToken } from "../../helpers/storage.js";
import * as listeners from "../../listeners/auth/index.js";

export default function buildMenu(pathname) {
  const menu = document.querySelector("#menu");

  if (isLoggedIn()) {
    const name = getToken();

    menu.innerHTML += `<li class="nav-item">
                        <a class="nav-link ${
                          pathname === "/" || pathname === "/index.html"
                            ? "active"
                            : ""
                        }" href="/">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link ${
                          pathname === "/profile/" ? "active" : ""
                        }" href="/profile">Dashboard</a>
                      </li>
                      <li class="nav-item">
                        <button class="btn btn-primary" id="logout">Log out ${name}</button>
                      </li>`;

    listeners.logoutListener();
  } else {
    menu.innerHTML += `<li class="nav-item">
                        <a class="nav-link ${
                          pathname === "/" || pathname === "/index.html"
                            ? "active"
                            : ""
                        }" href="/">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link ${
                          pathname === "/index.html" ? "active" : ""
                        }" href="/index.html">Login</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link ${
                          pathname === "/auth/register.html" ? "active" : ""
                        }" href="/auth/register.html">Register</a>
                      </li>`;
  }
}

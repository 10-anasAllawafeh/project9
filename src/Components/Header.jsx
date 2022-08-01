import React from 'react';
import { Link,BrowserRouter } from 'react-router-dom';
import { UilUser } from '@iconscout/react-unicons';

function Header() {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">
      <BrowserRouter>

      <a
        href="/"
        className="logo d-flex align-items-center me-auto me-lg-0"
      >
        {/* Uncomment the line below if you also wish to use an image logo */}
        {/* <img src="assets/img/logo.png" alt=""> */}
        <h1>
          Zakie<span>.</span>
        </h1>
      </a>
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/Menu">Menu</a>
          </li>
          <li>
            <a href="/">Gallery</a>
          </li>
          <li className="dropdown">
            <a href="/">
              <span>Drop Down</span>{" "}
              <i className="bi bi-chevron-down dropdown-indicator" />
            </a>
            <ul>
              <li>
                <a href="/">Drop Down 1</a>
              </li>
              <li className="dropdown">
                <a href="/">
                  <span>Deep Drop Down</span>{" "}
                  <i className="bi bi-chevron-down dropdown-indicator" />
                </a>
                <ul>
                  <li>
                    <a href="/">Deep Drop Down 1</a>
                  </li>
                  <li>
                    <a href="/">Deep Drop Down 2</a>
                  </li>
                  <li>
                    <a href="/">Deep Drop Down 3</a>
                  </li>
                  <li>
                    <a href="/">Deep Drop Down 4</a>
                  </li>
                  <li>
                    <a href="/">Deep Drop Down 5</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/">Drop Down 2</a>
              </li>
              <li>
                <a href="/">Drop Down 3</a>
              </li>
              <li>
                <a href="/">Drop Down 4</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/About">About us</a>
          </li>
          <li>
            <a href="/Contact">Contact us</a>
          </li>
          <li>
            <Link to="/profile">
            <a href="/profile"> <UilUser/></a>
            </Link>
          </li>
         
        </ul>
      </nav>
      {/* .navbar */}
      <a className="btn-book-a-table" href="">
        Book a Table
      </a>
      <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
      </BrowserRouter>
    </div>
    
  </header>
  )
}

export default Header
import React from "react";
import styled from "styled-components";

function Navigation() {
  return (
    <Nav>
      <Logo>
        <img src="images/Logo.png" alt="" />
      </Logo>
      <div>
        <h1>Table of contents</h1>
        <ol>
          <li>Playtron</li>
          <li>
            Game Launch
            <ol>
              <li>Response Example</li>
              <li>Response Example</li>
            </ol>
          </li>
          <li>
            Game Launch
            <ol>
              <li>Response Example</li>
              <li>Response Example</li>
              <li>Response Example</li>
              <li>Response Example</li>
            </ol>
          </li>
          <li>
            Game Launch
            <ol>
              <li>Response Example</li>
            </ol>
          </li>
        </ol>
      </div>
    </Nav>
  );
}

export default Navigation;

const Nav = styled.nav`
  background-color: #001529;
  max-width: 400px;
  height: 100vh;
  color: white;
  position: fixed;
  
  h1 {
    font-size: 18px;
    padding-left: 20px;
    padding-right: 40px;
  }

  ol {
    counter-reset: item;
    font-size: 16px;
    line-height: 32px;
    cursor: pointer;
  }

  ol > li {
    counter-increment: item;
    padding-right: 30px;
  }

  ol ol > li {
    display: block;
    opacity: 0.8;
    margin-left: -40px;
    border-left: 1px solid rgba(203, 212, 225, 0.3);
    padding-left: 5px;
  }

  ol ol > li:before {
    content: counters(item, ".") ". ";
  }
`;

const Logo = styled.div`
  border-bottom: 1px solid rgba(203, 212, 225, 0.1);
  img {
    width: 156px;
    margin: 20px 0;
    padding: 0 20px;
  }
`;

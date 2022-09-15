import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

function Navigation() {
  return (
    <Nav>
      <Logo>
        <img src="images/Logo.png" alt="" />
      </Logo>
      <Content>
        <h1>Table of contents</h1>
        <ol>
          <li>
            <NavLink
              to="integrationprocess"
              spy={true}
              smooth={true}
              offset={30}
              duration={100}
            >
              Integration process
            </NavLink>
          </li>
          <li>
            <NavLink
              to="walletintegration"
              spy={true}
              smooth={true}
              offset={30}
              duration={100}
            >
              Wallet Integration
            </NavLink>
            <ol>
              <li>
                <NavLink
                  to="playerinfo"
                  spy={true}
                  smooth={true}
                  offset={30}
                  duration={100}
                >
                  Player info
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="bet"
                  spy={true}
                  smooth={true}
                  offset={30}
                  duration={100}
                >
                  Bet
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="win"
                  spy={true}
                  smooth={true}
                  offset={30}
                  duration={100}
                >
                  Win
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="cancel"
                  spy={true}
                  smooth={true}
                  offset={30}
                  duration={100}
                >
                  Cancel
                </NavLink>
              </li>
            </ol>
          </li>
          <li>
            <NavLink
              to="leaderboard"
              spy={true}
              smooth={true}
              offset={30}
              duration={100}
            >
              Leaderboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="deposit"
              spy={true}
              smooth={true}
              offset={30}
              duration={100}
            >
              Deposit of the Freespins
            </NavLink>
          </li>
        </ol>
      </Content>
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
  font-family: 'Roboto', sans-serif;
  font-weight: 500;

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

export const Content = styled.div``;
export const NavLink = styled(Link)`
  &.active {
    color: #1890ff;
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

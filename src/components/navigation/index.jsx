import React from "react";
import { Link } from "react-scroll";
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
          <li>
            <Link
              to="integrationprocess"
              spy={true}
              smooth={true}
              offset={30}
              duration={500}
            >
              Integration process
            </Link>
          </li>
          <li>
            <Link
              to="walletintegration"
              spy={true}
              smooth={true}
              offset={30}
              duration={500}
            >
              Wallet Integration
            </Link>
            <ol>
              <li>
                <Link
                  to="playerinfo"
                  spy={true}
                  smooth={true}
                  offset={30}
                  duration={500}
                >
                  Player info
                </Link>
              </li>

              <li>
                <Link
                  to="bet"
                  spy={true}
                  smooth={true}
                  offset={30}
                  duration={500}
                >
                  Bet
                </Link>
              </li>

              <li>
                <Link
                  to="win"
                  spy={true}
                  smooth={true}
                  offset={30}
                  duration={500}
                >
                  Win
                </Link>
              </li>

              <li>
                <Link
                  to="cancel"
                  spy={true}
                  smooth={true}
                  offset={30}
                  duration={500}
                >
                  Cancel
                </Link>
              </li>
            </ol>
          </li>
          <li>
            <Link
              to="leaderboard"
              spy={true}
              smooth={true}
              offset={30}
              duration={500}
            >
              Leaderboard
            </Link>
          </li>
          <li>
            <Link
              to="deposit"
              spy={true}
              smooth={true}
              offset={30}
              duration={500}
            >
              Deposit of the Freespins
            </Link>
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

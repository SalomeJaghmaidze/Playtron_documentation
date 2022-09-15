import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Headline>
      <h1>Playtron</h1>
      <p>Game integration technical document</p>
    </Headline>
  );
}

export default Header;

const Headline = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 20%);
  padding:30px 10px 0 10px;
  margin-left: 300px;
  font-family: 'Roboto', sans-serif;

  h1 {
    font-size: 32px;
    font-weight: 500;
    color: #230f6e;
    margin: 0;
    weight: 500;
  }
  p {
    margin: 0;
    margin-bottom: 15px;
    font-size: 14px;
  }
`;

import React from 'react'
import styled from "styled-components";

function Walletintegration() {
  return (
    <Container id='walletintegration'>
      <Heading>2. Wallet Integration</Heading>
      <Content>
        <p>Wallet endpoint URL should be provided by operator. The following Instant Games methods should be available:</p>
        <List>
            <li>❏ /playerInfo</li>
            <li>❏ /bet</li>
            <li>❏ /win</li>
            <li>❏ /cancel</li>
        </List>
      </Content>
    </Container>
  )
}

export default Walletintegration

const Container = styled.div`
  padding: 20px 60px;
  margin-left: 250px;
  overflow: hidden;

  table {
  }

  p {
    font-size: 18px;
    color: #444444;
  }
`;

const Heading = styled.h2`
  margin-top: 20px;
  font-weight: 500;
  font-size: 32px;
  line-height: 22px;
  color: #230f6e;
`;

const List = styled.ul`
list-style-type: none;
line-height: 30px;
padding: 0 20px;

`
const Content = styled.div`
  margin-left: 30px;
`;


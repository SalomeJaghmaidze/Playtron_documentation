import React from "react";
import styled from "styled-components";

function PlayerInfo() {
  return (
    <Container id="playerinfo">
      <Heading>2.1 /Player Info</Heading>
      <Content>
        <Description>
          <p>
            This method will be called to get player details (including balance)
            by sessionToken passed to the game client.
          </p>
        </Description>
        <Token>
          <p>{"{"}</p>
          <p>
            {" "}
            "sessionToken" : <span>"valid-session-token"</span>
          </p>
          <p>{"{"}</p>
        </Token>
        <Table>
          <thead>
            <tr>
              <th>Property Name</th>
              <th>Description</th>
              <th>Type</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>sessionToken</td>
              <td>Player’s session token</td>
              <td>String (255)</td>
              <td>Value passed upon game launch as a query parameter</td>
            </tr>
          </tbody>
        </Table>

        <Token>
          <p>{"{"}</p>
          <p>
            "country" : <span>"GE"</span>, <br></br>
            "currency" : <span>"USD"</span>, <br></br>
            "balance" : <span>100000</span>, <br></br>
            "userName" : <span>"name"</span>, <br></br>
            "accountId" : <span>"020304"</span> <br></br>
          </p>
          <p>{"{"}</p>
        </Token>
        <Table>
          <caption>Response from the operator should include:</caption>
          <thead>
            <tr>
              <th>Property Name</th>
              <th>Description</th>
              <th>Type</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>accountId</td>
              <td>Unique player identifier</td>
              <td>String (255)</td>
              <td>
                Unique player’s identifier (received from the platform on
                /playerInfo call)
              </td>
            </tr>
            <tr>
              <td>balance</td>
              <td>Player’s balance</td>
              <td>Long</td>
              <td>Balance in minor units. Mostly in cents</td>
            </tr>
            <tr>
              <td>currency</td>
              <td>Player’s currency</td>
              <td>String (3)</td>
              <td>ISO-4217-3 format</td>
            </tr>
            <tr>
              <td>country</td>
              <td>Player’s country</td>
              <td>String (2)</td>
              <td>ISO-3166-1 alpha-2 format</td>
            </tr>
            <tr>
              <td>userName</td>
              <td>Player’s display name</td>
              <td>String (255)</td>
              <td>String format</td>
            </tr>
          </tbody>
        </Table>
      </Content>
    </Container>
  );
}

export default PlayerInfo;

const Container = styled.div`
  padding: 20px 60px;
  margin-left: 250px;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
  
  table {
  }

  p {
    font-size: 18px;
    color: #444444;
  }
`;

const Heading = styled.h2`
  margin-top: 20px;
  margin-bottom: 40px;
  font-weight: 500;
  font-size: 32px;
  line-height: 22px;
  color: #230f6e;
`;

const Description = styled.div``;

const Table = styled.table`
  width: 928px;
  Font size: 20px;
  text-align: left;
  border-spacing: 0;

  th {
    background-color: rgba(203, 212, 225, 0.5);
    padding: 15px 20px;
    border: 0.5px solid #CBD4E1;
    border-opacity: 50%;
    color: #230F6E;
  }

  td {
    width: 25%;
    border: 1px solid #CBD4E1;
    border-opacity: 50%; 
    text-align: left;
    vertical-align: top;
    padding: 5px 20px;
  }

  caption {
    text-align: left;
    margin-bottom: 10px;
  }

  p {
    border: 1px solid red;
    width: 100%;
  }
`;

const Token = styled.div`
  padding: 10px;
  background-color: #f6f7f9;
  width: 900px;
  margin: 20px 0;
  font-size: 18px;
  span {
    color: #f2758b;
  }
  p {
    margin: 0;
  }
`;

const Content = styled.div`
  margin-left: 30px;
`;

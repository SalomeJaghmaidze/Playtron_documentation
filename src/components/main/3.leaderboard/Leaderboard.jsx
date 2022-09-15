import React from "react";
import styled from "styled-components";

function Leaderboard() {
  return (
    <Container id="leaderboard">
      <Heading>3. Leaderboard</Heading>
      <Content>
        <Description>
          <p>
            To display Leaderboad on the game section, Playtron will provide API
            url with leaderboard information.
          </p>
          <Url>
          <p>url: {'{'}game-provider-url{'}'}/api/players/GetLeaderBoard</p>
          </Url>
          <p>Request example:</p>
        </Description>
        <Token>
          <p>{"{"}</p>
          <p>
            "startDate" : <span>"2021-08-01"</span>, <br></br>
            "endDate" : <span> "2021-09-30"</span>, <br></br>
            "minimalBet" : <span>“1”</span>, <br></br>
            "minimalMultiplier" : <span>"Round-ID"</span>, <br></br>
            "amount" : <span>“1.1”</span> <br></br>
            "size" : <span> “100”</span> <br></br>
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
              <td>startDate</td>
              <td>Stard date of requested information</td>
              <td>Date</td>
              <td>ISO 8601</td>
            </tr>
            <tr>
              <td>endDate</td>
              <td>End date of requested information</td>
              <td>Date</td>
              <td>ISO 8601</td>
            </tr>
            <tr>
              <td>minimalBet</td>
              <td>Minimal bet of requested information</td>
              <td>String (255)</td>
              <td>
                Minimal bet is determinated by per operator /country / currency
              </td>
            </tr>
            <tr>
              <td>minimalMultiplier</td>
              <td>Minimal multiplayer of requested information</td>
              <td>String (255)</td>
              <td>Minimal multiplayer is 1.0</td>
            </tr>
            <tr>
              <td>size</td>
              <td>Quantity of requested information</td>
              <td>String (255)</td>
              <td>Requested size is determinated by per game type</td>
            </tr>
            <tr>
              <td>currency</td>
              <td>Currency of transaction</td>
              <td>String (3)</td>
              <td>Currency of transaction</td>
            </tr>
          </tbody>
        </Table>

        <Token>
          <p>{"{"}</p>
          <p>
            "accountId" : <span>"101636"</span>, <br></br>
            "userName" : <span> "TEST_636"</span>, <br></br>
            "gameCount" : <span>”1861”</span>, <br></br>
            "totalCashOut" : <span> ”55052.8500”</span>, <br></br>
            "lastCashOutDate" : <span>"2021-09-14T22:01:53.425624"</span>{" "}
            <br></br>
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
              <td>accountId</td>
              <td>Player’s identifier</td>
              <td>String (255)</td>
              <td>
                Unique player’s identifier (received from the platform on
                /playerInfo call)
              </td>
            </tr>
            <tr>
              <td>userName</td>
              <td>Player’s display name</td>
              <td>String (255)</td>
              <td>String format</td>
            </tr>
            <tr>
              <td>gameCount</td>
              <td>gameCount</td>
              <td>String (255)</td>
              <td>Minimum 1 round should count in requested information</td>
            </tr>

            <tr>
              <td>totalCashOut</td>
              <td>totalCashOut</td>
              <td>String (255)</td>
              <td>Information will be displayed by users currency</td>
            </tr>

            <tr>
              <td>lastCashOutDate</td>
              <td>Exact date/time of last cashout</td>
              <td>String (255)</td>
              <td>ISO 8601</td>
            </tr>
          </tbody>
        </Table>
      </Content>
    </Container>
  );
}

export default Leaderboard;

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

  span {
    color: #f2758b;
  }
`;

const Content = styled.div`
  margin-left: 30px;
`;

const Url = styled.div`
  padding: 10px;
  background-color: #f6f7f9;
  width: 900px;

  a {
    text-decoration: none;
    color: black;
  }
`;

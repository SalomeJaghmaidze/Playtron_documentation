import React from "react";
import styled from "styled-components";

function IntegrationProcess() {
  return (
    <Container>
      <Heading>1. Integration Process</Heading>
      <Content>
        <Description>
          <p>
            Launched games are embedded either to iframe. For mobile channel
            lobbyUrl parameter is passed to the launch URL and should be used
            for player
            <br></br>redirection after ending of the game session. A game can be
            launched provider side based on the game launch URL template
            provided by the Playtron.
          </p>
          <p>
            Playtron should provide a way to launch an individual product by the
            identifier in the format described below.
          </p>
          <p>The template should be of the form:</p>
          {/* <Url>
            <p>
            https://<game_provider_base_url>?<query_parameters>
            </p>
          </Url> */}
          <p>Where:</p>
          <p>
            ❏ game_provider_base_url is a base URL where game launch controller
            is hosted
          </p>
          <p>
            ❏ query_parameters is a set of query parameters needed for a
            specific game to launch
          </p>
        </Description>

        <Table>
          <caption>Table 1. Query parameters supported</caption>
          <thead>
            <tr>
              <th>Parameter Name</th>
              <th>Description</th>
              <th>Type</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>cid</td>
              <td>Casino product id</td>
              <td>String (255)</td>
              <td>
                Casino identifier. Issued by operator. Same on stage and prod
                environment
              </td>
            </tr>
            <tr>
              <td>productId</td>
              <td>Game product id</td>
              <td>String (255)</td>
              <td>
                Product id to be launched (game identifier). GameId provided by
                the provider
              </td>
            </tr>
            <tr>
              <td>sessionToken</td>
              <td>Player session token</td>
              <td>String (255)</td>
              <td>
                Session token which identifies unique player id on the operator
                side. Generated by operator
              </td>
            </tr>
            <tr>
              <td>lang</td>
              <td>Language code</td>
              <td>String (2)</td>
              <td>Language code in ISO 639-1 format</td>
            </tr>
            <tr>
              <td>lobbyUrl</td>
              <td>Player redirect URL</td>
              <td>Encoded URL string</td>
              <td>
                URL to redirect the player to upon clicking in-game "Home"
                button. Present for mobile channel only.
              </td>
            </tr>
            <tr>
              <td>targetChannel</td>
              <td>Game target channel</td>
              <td>String</td>
              <td>
                Defines game target channel. Possible values: desktop | mobile
              </td>
            </tr>
            <tr>
              <td>consumerId</td>
              <td>Game the provider integration identifier</td>
              <td>String</td>
              <td>Unique game the provider integration identifier</td>
            </tr>
            <tr>
              <td>currency</td>
              <td>Optional Player currency</td>
              <td>String</td>
              <td>Player currency. Param is turned off by default</td>
            </tr>
          </tbody>
        </Table>

        <div>
        <p>
            <b>NOTE: </b>List of params described above is not changeable.
          </p>
        <p>Example of final game launch URL:</p>
          <Url>
            <a href="">
              https://playtrongamesurl.com/launch?cid=parimatch&productId=horseRacing&sessionToken=QKxPbLysFwF45rc56q1A9T4WVag0YCDtpoUSXpqP9Sjv-RNv1P4N1TJCmgeFu4qK&lang=en&lobbyUrl=https%3A%2F%2Fm.casino.com%2Flobby&targetChannel=desktop&consumerId
              =provider-name&currency=USD
            </a>
          </Url>
          <div>
            <p>
              Once the game is launched then the Playtron should produce wallet
              requests to:
            </p>
            <Requests>
              <p>❏ Player’s balance and currency in the game client</p>
              <p>❏ Placing / settling / cancelling bets</p>
              <p>
                ❏ Notify wallet that match/round was closed and no more
                placing/settlements of bets are expected
              </p>
            </Requests>
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default IntegrationProcess;

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

const Url = styled.div`
  padding: 10px;
  background-color: #f6f7f9;
  width: 900px;

  a {
    text-decoration: none;
    color: black;
  }
`;

const Content = styled.div`
  margin-left: 30px;
`;

const Requests = styled.div`
  margin-left: 20px;
`;

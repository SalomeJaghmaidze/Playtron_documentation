import React from "react";
import styled from "styled-components";

function Cancel() {
  return (
    <Container id="cancel">
      <Heading>2.4 /Cancel</Heading>
      <Content>
        <Description>
          <p>
            When there is need to revoke bet transaction then the game provider
            should call <b>cancel</b>.
          </p>
          <p>Request example:</p>
        </Description>
        <Token>
          <p>{"{"}</p>
          <p>
            "sessionToken" : <span>"valid-session-token"</span>, <br></br>
            "accountId" : <span> "Name"</span>, <br></br>
            "transactionId" : <span>"3949829374"</span>, <br></br>
            "roundId" : <span>"Round-ID"</span>, <br></br>
            "amount" : <span>1000</span> <br></br>
            "currency" : <span>"EUR"</span> <br></br>
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
              <td>transactionId</td>
              <td>Game transaction id</td>
              <td>String (255)</td>
              <td>Unique transaction id on game the provider’s side</td>
            </tr>
            <tr>
              <td>roundId</td>
              <td>round id</td>
              <td>String (255)</td>
              <td>Round id on game the provider’s side</td>
            </tr>
            <tr>
              <td>amount</td>
              <td>Transaction amount to process</td>
              <td>Long</td>
              <td>Amount of transaction in currency’s minor units</td>
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
            "status" : <span>“false”</span>, <br></br>
            "balance" : <span> “9000”</span>, <br></br>
            “currency” : <span>“USD”</span>, <br></br>
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
              <td>status</td>
              <td>Status on ongoing transaction</td>
              <td>String (255)</td>
              <td>
                It is generated according to the relevant situation. For
                example, if the user does not have enough balance, etc.
              </td>
            </tr>
            <tr>
              <td>balance</td>
              <td>Player’s remaining balance</td>
              <td>Long</td>
              <td>In minor units</td>
            </tr>
            <tr>
              <td>currency</td>
              <td>Currency of transaction</td>
              <td>String (3)</td>
              <td>Currency of transactions</td>
            </tr>
          </tbody>
        </Table>
      </Content>
    </Container>
  );
}

export default Cancel;

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
    color: #F2758B;
  }
`;

const Content = styled.div`
  margin-left: 30px;
`;

import React from "react";
import styled from "styled-components";

function Depositfreespins() {
  return (
    <Container id="deposit">
      <Heading>4. Deposit of the Freespins</Heading>
      <Content>
        <Description>
          <p>
            For deposit freespin to users, operator have to make request to
            provided url by Playtron:
          </p>
          <Url>
            <p>url: {'{'}game-provider-url{'}'}/api/freespins/Deposit</p>
          </Url>
          <p>Request example:</p>
        </Description>
        <Token>
          <p>{"{"}</p>
          <p>
          "partnerName" : <span>"provider"</span>, <br></br>
          "password" : <span> "*******"</span>, <br></br>
          "accountId" : <span>"1234"</span>, <br></br>
          "amount" : <span> “2”</span>, <br></br>
          "currency" : <span>"whatever"</span><br></br>
          ""quantity" : <span>“10”,</span><br></br>
          "validfor" : <span>“7, //days”</span><br></br>
          "transactionId" : <span>"unicid"</span><br></br>
          </p>
          <p>{"{"}</p>
          <p></p>
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
              <td>partnerName</td>
              <td>Operators name</td>
              <td>String (255)</td>
              <td>Unique partners’s identifier</td>
            </tr>
            <tr>
              <td>password</td>
              <td>Access password</td>
              <td>String (255)</td>
              <td>Password will be provided by Playtron</td>
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
              <td>amount</td>
              <td>Amount of total freespin nominal</td>
              <td>String (255)</td>
              <td>Freespin nominals can be created by operator</td>
            </tr>
            <tr>
              <td>currency</td>
              <td>Currency of transaction</td>
              <td>String (3)</td>
              <td>Currency of transaction</td>
            </tr>
            <tr>
              <td>quantity</td>
              <td>Quantity of nomimals</td>
              <td>String (255)</td>
              <td>Minimum quantity should be 1</td>
            </tr>
            <tr>
              <td>validFor</td>
              <td>Quantity of days/monts</td>
              <td>String (255)</td>
              <td>How long freespins will be valid for user</td>
            </tr>
            <tr>
              <td>transactionId</td>
              <td>Game transaction id</td>
              <td>String (255)</td>
              <td>Unique transaction id on game the provider’s side</td>
            </tr>
          </tbody>
        </Table>
      </Content>
    </Container>
  );
}

export default Depositfreespins;

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

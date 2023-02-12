import React from "react";
import styled from "styled-components";
import { Image, Button } from "semantic-ui-react";
import user from "../Images/user2.jpg";
import { Link } from "react-router-dom";

function ContactDetails(props) {
  const { name, email } = props.location.state.contact;

  return (
    <div>
      <Container>
        <Image className="image" src={user} alt="" fluid />
        <div>
          <div>{name}</div>
          <div>{email}</div>
        </div>
        <Link to="/">
          <Button
            className="back"
            content="Back to main page"
            icon="right arrow"
            labelPosition="right"
          />
        </Link>
      </Container>
    </div>
  );
}

export default ContactDetails;

const Container = styled.div`
  margin: auto;
  width: 300px;
  .image {
    border-radius: 15px 15px 0 0;
  }
  div {
    padding: 5px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: linear-gradient(45deg, #433ca0, #4ec3c9);
    border-radius: 0 0 15px 15px;
    div {
      background: none;
      font-size: 20px;
      font-family: sans-serif;
      line-height: 1.1;
      color: #fff;
    }
  }
  .back {
    margin: 20px 25%;
  }
`;

import React from "react";
import { Link } from "react-router-dom";
import { Image, Icon } from "semantic-ui-react";
import styled from "styled-components";
import user from "../Images/user2.jpg";

function ContactCard({ contact }) {
  const { id, name, email } = contact;

  return (
    <Container>
      <div>
        <Image className="Image" src={user} alt="" avatar />
        <Link to={{ pathname: `/contact/${id}`, state: { contact: contact } }}>
          <div>
            <h1>{name}</h1>
            <h2>{email}</h2>
          </div>
        </Link>
      </div>
      <div>
        <Link to="/edit" state={{ contact: contact }}>
          <Icon className="edit" name="edit" size="big" color="blue" />
        </Link>
        <Link to={{ pathname: `/delete/${id}` }}>
          <Icon className="trash" name="trash" size="big" color="red" />
        </Link>
      </div>
    </Container>
  );
}

export default ContactCard;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 10px 0;
  padding: 20px 20px;
  background-image: linear-gradient(45deg, #433ca0, #4ec3c9);
  color: #fff;
  border-radius: 15px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  div {
    display: flex;
    .Image {
      position: relative;
      top: 8px;
    }
    div {
      flex-direction: column;
      margin: 0 0 0 15px;
      color: #fff;
      h1 {
        margin: 0;
        font-size: 20px;
        :hover {
          text-decoration: underline;
        }
      }
      h2 {
        margin: 0;
        font-size: 15px;
        :hover {
          text-decoration: underline;
        }
      }
    }
  }
  .trash:hover {
    color: rgb(196, 30, 58) !important;
  }
  @media (max-width: 1120px) {
    margin: 20px 0;
  }
  .edit {
    padding: 0 40px 0 0;
    :hover {
      color: #433ca0 !important;
    }
  }
`;

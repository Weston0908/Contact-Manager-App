import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "semantic-ui-react";
import { useContactsCrud } from "../context/ContactsCrudContext";

function DeleteContact(props) {
  const { id } = useParams();
  const { removeContact } = useContactsCrud();
  const navigate = useNavigate();

  const confirmDelete = () => {
    removeContact(id);
    navigate("/");
  };

  return (
    <div>
      <Container>
        <h1>Are you sure you want to delete this contact ?</h1>
        <div>
          <Button
            className="back"
            content="Yes"
            icon="checkmark"
            labelPosition="right"
            onClick={confirmDelete}
          />
          <Link to="/">
            <Button
              className="back"
              content="No"
              icon="close"
              labelPosition="right"
            />
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default DeleteContact;

const Container = styled.div`
  h1 {
    text-align: center;
  }
  div {
    text-align: center;
  }
`;

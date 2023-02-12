import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import "semantic-ui-css/semantic.min.css";
import { Button, Icon } from "semantic-ui-react";
import { useContactsCrud } from "../context/ContactsCrudContext";

function EditContact() {
  const { state } = useLocation();
  const [newContact, setNewContact] = useState(state.contact ?? []);
  const { editContact } = useContactsCrud();
  const navigate = useNavigate();

  const handleEditContact = (e) => {
    e.preventDefault();
    if (!newContact.name.trim() || !newContact.email.trim()) {
      alert("The information are missing!");
      return;
    }
    editContact(newContact);
    navigate("/");
  };

  return (
    <AddContactContainer>
      <AddContactForm onSubmit={handleEditContact}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Key in your name"
            id="name"
            value={newContact.name}
            onChange={(e) => {
              setNewContact({ ...newContact, name: e.target.value });
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Key in your email"
            id="email"
            value={newContact.email}
            onChange={(e) => {
              setNewContact({ ...newContact, email: e.target.value });
            }}
          ></input>
        </div>
        <Button icon labelPosition="right" className="Button" type="submit">
          Update your contact
          <Icon name="right arrow" />
        </Button>
      </AddContactForm>
    </AddContactContainer>
  );
}

export default EditContact;

const AddContactContainer = styled.div`
  margin: 0 0 10px 0;
  padding: 20px 0;
  background-image: linear-gradient(45deg, #433ca0, #4ec3c9);
  border-radius: 15px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  height: 220px;
`;

const AddContactForm = styled.form`
  margin: 10px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    margin: 5px 0;
    font-size: 20px;
    font-family: sans-serif;
    display: flex;
    align-items: center;
    width: 100%;
    label {
      padding: 0 10px;
      color: #fff;
    }
    input {
      margin: 0 15px 0 3px;
      padding: 8px 5px;
      border: 0;
      border-radius: 5px;
      width: 100%;
    }
  }
  .Button {
    margin: 20px 0 0 0;
  }
`;

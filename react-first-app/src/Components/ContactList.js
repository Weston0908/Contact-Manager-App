import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import { Button, Icon, Input } from "semantic-ui-react";
import styled from "styled-components";
import { useContactsCrud } from "../context/ContactsCrudContext";

function ContactList() {
  const { contact, retrieveContact, searchItem, searchResponse, handleSearch } =
    useContactsCrud();

  const inputRef = useRef("");

  const handleChange = (e) => {
    e.preventDefault();
    handleSearch(inputRef.current.inputRef.current.value);
  };

  const displayContact = (searchItem.length < 1 ? contact : searchResponse).map(
    (item) => {
      return <ContactCard key={item.id} contact={item} />;
    }
  );

  useEffect(() => {
    retrieveContact();
  }, []);

  return (
    <div>
      <Container>
        <h1>Contact List</h1>
        <Input
          className="search"
          icon="search"
          placeholder="Search your contact"
          ref={inputRef}
          value={searchItem}
          onChange={handleChange}
        />
        <Link to="/add">
          <Button icon labelPosition="right">
            <Icon name="add" />
            Add Contact
          </Button>
        </Link>
      </Container>
      {contact.length > 0 ? displayContact : "No contact available"}
    </div>
  );
}

export default ContactList;

const Container = styled.div`
  margin: 0 0 10px 0;
  padding: 15px 15px;
  background-image: linear-gradient(45deg, #433ca0, #4ec3c9);
  border-radius: 15px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    margin: 0;
    font-size: 30px;
    font-weight: 600;
    font-family: sans-serif;
    line-height: 1;
    color: #fff;
    text-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    white-space: nowrap;
  }
  .search {
    width: 100%;
    margin: 0 30px;
  }
`;

import React from "react";
import styled from "styled-components";

function Header() {
  return <ContactManager>Contact Manager</ContactManager>;
}

export default Header;

const ContactManager = styled.div`
  margin: 20px 0;
  padding: 30px 30px;
  background-image: linear-gradient(45deg, #433ca0, #4ec3c9);
  font-size: 40px;
  font-family: sans-serif;
  font-weight: 600;
  line-height: 1;
  color: #fff;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  border-radius: 15px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
`;

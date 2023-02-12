import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";
import ContactDetails from "./Components/ContactDetails";
import DeleteContact from "./Components/DeleteContact";
import EditContact from "./Components/EditContact";
import styled from "styled-components";
import { ContactsCrudContextProvider } from "./context/ContactsCrudContext";

function App() {
  return (
    <>
      <Router>
        <Container>
          <Header />
          <ContactsCrudContextProvider>
            <Routes>
              <Route exact path="/" element={<ContactList />} />
              <Route path="/add" element={<AddContact />} />
              <Route path="/contact/:id" element={<ContactDetails />} />
              <Route path="/delete/:id" element={<DeleteContact />} />
              <Route path="/edit" element={<EditContact />} />
            </Routes>
          </ContactsCrudContextProvider>
        </Container>
      </Router>
    </>
  );
}

export default App;

const Container = styled.div`
  margin: 0 20px;
`;

// const Container = styled.div`
//   display: grid;
//   grid-template-areas: 'left right';
//   grid-template-columns: minmax(600px, 2fr) minmax(0, 3fr);
//   column-gap: 25px;
//   margin: 0 20px;
//   @media (max-width: 1120px ) {
//     display: flex;
//     flex-direction: column;
//   }
// `

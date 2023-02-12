import { createContext, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import api from "../api/api";

const contactsCrudContext = createContext();

export function ContactsCrudContextProvider({ children }) {
  const [contact, setContact] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [searchResponse, setSearchResponse] = useState([]);

  const retrieveContact = async () => {
    const response = await api.get("/contact");
    if (response.data) setContact(response.data);
  };

  const handleSubmit = async (newContact) => {
    const request = {
      id: uuidv4(),
      ...newContact,
    };
    const response = await api.post("/contact", request);
    setContact([...contact, response.data]);
  };

  const removeContact = async (id) => {
    await api.delete(`/contact/${id}`);
    const newContact = contact.filter((item) => {
      return item.id !== id;
    });
    setContact(newContact);
  };

  const editContact = async (item) => {
    const response = await api.put(`/contact/${item.id}`, item);
    const { id } = response.data;
    setContact((prevState) =>
      prevState.map((item) => {
        return item.id === id ? { ...response.data } : item;
      })
    );
  };

  const handleSearch = (searchTerm) => {
    setSearchItem(searchTerm);
    const searchResult = contact.filter((item) => {
      return [item.name, item.email]
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
    setSearchResponse(searchResult);
  };

  const value = {
    contact,
    searchItem,
    searchResponse,
    retrieveContact,
    handleSubmit,
    removeContact,
    editContact,
    handleSearch,
  };

  return (
    <contactsCrudContext.Provider value={value}>
      {children}
    </contactsCrudContext.Provider>
  );
}

export function useContactsCrud() {
  return useContext(contactsCrudContext);
}

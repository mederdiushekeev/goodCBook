import axios from "axios";
import { createContext, useContext, useState } from "react";

export const contactsContext = createContext();

const ContactsContextProvider = ({ children }) => {
  let API = "http://localhost:8000/contacts";

  const [contacts, setContacts] = useState([]);

  const [oneContactInfo, setOneContactInfo] = useState(null);

  //! add contact
  async function addContacts(newContact) {
    await axios.post(API, newContact);
  }

  //! get contacts
  async function getContacts() {
    let { data } = await axios.get(API);
    setContacts(data);
  }

  //! delete
  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContacts();
  }

  //! get one contact info
  async function getOneContactInfo(id) {
    let { data } = await axios.get(`${API}/${id}`);
    setOneContactInfo(data);
  }

  //! update
  async function updateContactInfo(id, editedContact) {
    await axios.patch(`${API}/${id}`, editedContact);
  }

  const values = {
    addContacts,
    contacts,
    getContacts,
    deleteContact,
    getOneContactInfo,
    oneContactInfo,
    updateContactInfo,
  };
  return (
    <contactsContext.Provider value={values}>
      {children}
    </contactsContext.Provider>
  );
};

export default ContactsContextProvider;

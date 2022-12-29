import React, { useContext, useEffect } from "react";
import { contactsContext } from "../../ContactsContextProvider";
import ContactCard from "../ContactCard/ContactCard";

const ContactsList = () => {
  const { getContacts, contacts } = useContext(contactsContext);
  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="bg bg-info" style={{ height: "100vh" }}>
      <h1 className="text-center text-white">Contact Book</h1>
      <div className="container d-flex flex-wrap justify-content-between">
        {contacts.map((item) => (
          <ContactCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ContactsList;

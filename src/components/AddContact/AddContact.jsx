import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { contactsContext } from "../../ContactsContextProvider";

const AddContact = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

  let { addContacts } = useContext(contactsContext);

  let navigate = useNavigate();

  function handleValues() {
    let newContact = {
      name,
      lastName,
      phone,
      image,
      id: Date.now(),
    };
    addContacts(newContact);
  }

  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex flex-column align-items-center bg bg-info"
    >
      <h1 className="text-dark">Add Contact</h1>
      <Form.Control
        onChange={(e) => setName(e.target.value)}
        className="mb-2 w-50"
        placeholder="name"
      />
      <Form.Control
        onChange={(e) => setLastName(e.target.value)}
        className="mb-2 w-50"
        placeholder="lastName"
      />
      <Form.Control
        onChange={(e) => setPhone(e.target.value)}
        className="mb-2 w-50"
        placeholder="phone"
      />
      <Form.Control
        onChange={(e) => setImage(e.target.value)}
        className="mb-2 w-50"
        placeholder="image"
      />
      <Button
        onClick={() => {
          handleValues();
          navigate("/");
        }}
        className="w-50 "
        variant="dark"
      >
        add
      </Button>
    </div>
  );
};

export default AddContact;

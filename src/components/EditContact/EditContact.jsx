import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { contactsContext } from "../../ContactsContextProvider";

const EditContact = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

  let navigate = useNavigate();

  let { id } = useParams();

  const { oneContactInfo, getOneContactInfo, updateContactInfo } =
    useContext(contactsContext);

  useEffect(() => {
    getOneContactInfo(id);
  }, []);

  useEffect(() => {
    if (oneContactInfo) {
      setName(oneContactInfo.name);
      setLastName(oneContactInfo.lastName);
      setPhone(oneContactInfo.phone);
      setImage(oneContactInfo.image);
    }
  }, [oneContactInfo]);

  const handleValues = () => {
    const editedContact = {
      name,
      lastName,
      phone,
      image,
      id: Date.now(),
    };
    if (!name.trim() || !lastName.trim() || !phone.trim() || !image.trim()) {
      alert(`заполните поля`);
      return;
    }
    updateContactInfo(id, editedContact);
  };
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex flex-column align-items-center bg bg-info"
    >
      <h1 className="text-dark">Edit Contact</h1>
      <Form.Control
        onChange={(e) => setName(e.target.value)}
        className="mb-2 w-50"
        placeholder="name"
        value={name}
      />
      <Form.Control
        onChange={(e) => setLastName(e.target.value)}
        className="mb-2 w-50"
        placeholder="lastName"
        value={lastName}
      />
      <Form.Control
        onChange={(e) => setPhone(e.target.value)}
        className="mb-2 w-50"
        placeholder="phone"
        value={phone}
      />
      <Form.Control
        onChange={(e) => setPhone(e.target.value)}
        className="mb-2 w-50"
        placeholder="image"
        value={image}
      />
      <Button
        onClick={() => {
          navigate("/");
          handleValues();
        }}
        className="w-50 "
        variant="dark"
      >
        Save changes
      </Button>
    </div>
  );
};

export default EditContact;

import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { contactsContext } from "../../ContactsContextProvider";

const ContactCard = ({ name, lastName, phone, image, id }) => {
  const { deleteContact } = useContext(contactsContext);

  let navigate = useNavigate();
  return (
    <div>
      <Card
        className="mt-5"
        style={{ width: "18rem", backgroundColor: "yellow" }}
      >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Name : {name}</Card.Title>
          <Card.Title>Last name : {lastName}</Card.Title>
          <Button className="btn btn-warning mt-3" variant="primary">
            {phone}
          </Button>
        </Card.Body>

        <Card.Body>
          <Button
            onClick={() => deleteContact(id)}
            className="me-3"
            variant="danger"
          >
            DELETE
          </Button>
          <Button onClick={() => navigate(`/edit/${id}`)} variant="primary">
            EDIT
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactCard;

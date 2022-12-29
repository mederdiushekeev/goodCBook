import React from "react";
import { Route, Routes } from "react-router-dom";
import AddContact from "./components/AddContact/AddContact";
import ContactsList from "./components/ContactsList/ContactsList";
import EditContact from "./components/EditContact/EditContact";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<ContactsList />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit/:id" element={<EditContact />} />
      </Routes>
    </div>
  );
};

export default App;

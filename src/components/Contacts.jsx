import React, { useEffect, useState } from "react";
import { Container, Grid, TextField, Typography, Button } from "@mui/material";
import Contact from "./Contact";
import { getContacts } from "../api";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getContacts().then((data) => {
      data.sort((a, b) => a.name.localeCompare(b.name));
      setContacts(data);
    });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="md">
      <Typography id="contacts" variant="h4" component="h1" sx={{ pt: 1 }}>
        Contacts
      </Typography>
      <TextField
        label="Search by name"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleSearch}
        sx={{ my: 2 }}
      />
      <Grid container spacing={2}>
        {filteredContacts.map((contact) => (
          <Grid item xs={12} md={6} key={contact.id}>
            <Contact key={contact.id} contact={contact} />
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="center">
        <Grid item>
          <Button
            variant="outlined"
            color="inherit"
            href={`#contacts`}
            sx={{ m: 2 }}
          >
            Back to top
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contacts;

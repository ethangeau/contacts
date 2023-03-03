import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Avatar,
  Collapse,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Contact = ({ name, email, address, phone, website, company }) => {
  const { street, suite, city, zipcode } = address;

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card elevation={5} sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={<Avatar>{name.charAt(0)}</Avatar>}
        action={
          <IconButton onClick={handleExpandClick} aria-label="show detail">
            <ExpandMoreIcon />
          </IconButton>
        }
        title={name}
        subheader={email}
      />
      <Collapse in={expanded} timeout="auto">
        <CardContent>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Phone: {phone}
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Address: {`${street}, ${suite}, ${city}, ${zipcode}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Website: {website}
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Company: {company.name}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Contact;

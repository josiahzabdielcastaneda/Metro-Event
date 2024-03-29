import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ParticipantsDialog from './ParticipantsDialog'; // Assuming you'll create this component
import RequestDialog from './RequestsDialog'; // Assuming you'll create this component
import CancelDialog from './CancelDialog';

import axios from 'axios';
import { useState, useEffect } from 'react';


const CreatedEventCard = ({ eventDetails }) => {
  const { event_id, event_date, event_location, event_name, event_organizer, event_status } = eventDetails;
  const date = new Date(event_date);
  const formattedDate = date.toLocaleDateString(); // Format the date as a string
  const [upvotes, setUpvotes] = useState(0);
  const [openParticipantsDialog, setOpenParticipantsDialog] = React.useState(false);
  const [openRequestDialog, setOpenRequestDialog] = React.useState(false);

  const handleParticipantsDialogOpen = () => {
    setOpenParticipantsDialog(true);
  };

  const handleParticipantsDialogClose = () => {
    setOpenParticipantsDialog(false);
  };

  const handleRequestDialogOpen = () => {
    setOpenRequestDialog(true);
  };

  const handleRequestDialogClose = () => {
    setOpenRequestDialog(false);
  };

  useEffect(() => {
    axios
      .get('http://localhost:8081/api/upvotecount', {
        params: {
          event_id: event_id,
        },
      })
      .then((response) => {
        setUpvotes(response.data.upvotes);
      })
      .catch((error) => {
        console.error('Error fetching upvote count:', error);
      });
  }, [event_id]); // Include event_id in the dependency array

  return (
    <Card
      variant="outlined"
      sx={{
        width: 400,
        overflow: 'auto',
        resize: 'horizontal',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Avatar src="./josiah.png" size="lg" />
      </Box>
      <CardContent>
        <Typography level="title-lg">{event_name}</Typography>
          <Typography level="body-sm">
            Event ID: {event_id}
          </Typography>
          <Typography level="body-sm">
            Date: {formattedDate}
          </Typography>
          <Typography level="body-sm">
            Location: {event_location}
          </Typography>
          <Typography level="body-sm">
            Organizer: {event_organizer}
          </Typography>
          <Typography level="body-sm">
           Status: {event_status}
          </Typography>
      </CardContent>
      <CardActions buttonFlex="0 1 120px">
        <IconButton variant="outlined" color="neutral" sx={{ mr: 'auto' }}>
          <FavoriteBorder />
        </IconButton>
        <Button variant="solid" color="primary" onClick={() => handleRequestDialogOpen(event_id)}>
          Requests
        </Button>
        <Button variant="solid" color="primary" onClick={handleParticipantsDialogOpen}>
          Participants
        </Button>
        <CancelDialog />
      </CardActions>
      <ParticipantsDialog open={openParticipantsDialog} onClose={handleParticipantsDialogClose} />
      <RequestDialog open={openRequestDialog} onClose={handleRequestDialogClose} />
    </Card>
  );
}

export default CreatedEventCard;

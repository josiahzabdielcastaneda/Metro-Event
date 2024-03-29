import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { useState, useEffect } from 'react';
import axios from 'axios';

const JoinedEventCard = (eventDetails,user) => {
  const { event_id, event_date, event_location, event_name, event_organizer, event_status } = eventDetails;
  const date = new Date(event_date);
  const formattedDate = date.toLocaleDateString(); // Format the date as a string
  const [upvotes, setUpvotes] = useState(0);

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

  const handleUpvote = () => {
    const username = 'noeljr'; // Example username

    axios.post('http://localhost:8081/api/upvoteEvent', {
        event_id: event_id,
        username: user
    })
    .then(response => {
        alert(response.data.message)
    })
    .catch(error => {
        console.error('Error upvoting event:', error);
    });
};
  return (
    <Card
      variant="outlined"
      sx={{
        width: 360,
        // to make the card resizable
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
          {upvotes}
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default JoinedEventCard;
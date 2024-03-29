import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from '@mui/material';
import { useLocation } from 'react-router';
import axios from 'axios';

export default function EventFormDialog() {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState(location.state?.username || '');
  const [eventName, setEventName] = React.useState('');
  const [eventLocation, setLocation] = React.useState('');
  const [eventDate, setEventDate] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createEvent = (event) => {
    event.preventDefault();

    axios.post("http://localhost:8081/create_event", {
      username: user,
      eventdate: eventDate,
      eventlocation: eventLocation,
      eventname: eventName,
    })
    .then((response) => {
      const message = "You are not authorized to create events";
      console.log(response.data[0][0].Message); 
      if(message === response.data[0][0].Message)
        alert(message);
      else
        alert("Event created!");
    })
    .catch((err) => {
      console.log("Error with creating event:", err);
      alert("Could not create event :c")
    });
  };

  return (
    <React.Fragment>
      <Link onClick={handleClickOpen} style={{ cursor: 'pointer' }}>
        Create Event
      </Link>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm" // Set the maximum width of the dialog
        fullWidth // Ensure the dialog takes up the full width
      >
         <DialogTitle>Create Event</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a new event, please fill out the following information.
          </DialogContentText>
          
          <TextField
            autoFocus
            required
            margin="dense"
            id="eventName"
            name="eventName"
            label="Event Name"
            fullWidth
            variant="standard"
            onChange={(e) => {setEventName(e.target.value)}}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="eventType"
            name="eventType"
            label="Event Type"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="eventLocation"
            name="eventLocation"
            label="Event Location"
            fullWidth
            variant="standard"
            onChange={(e) => {setLocation(e.target.value)}}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="eventDate"
            name="eventDate"
            label="Event Date yyyy/mm/dd"
            fullWidth
            variant="standard"
            onChange={(e) => {setEventDate(e.target.value)}}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={createEvent}>Create</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

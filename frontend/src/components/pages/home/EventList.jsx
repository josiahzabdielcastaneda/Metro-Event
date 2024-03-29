import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AllEventCard from './AllEvents/AllEventCard';
import JoinedEventCard from './JoinedEvents/JoinedEventCard';
import CreatedEventCard from './CreatedEvents/CreatedEventCard';
import RequestedEventCard from './AllEvents/RequestedEventCard';
// import FormDialog from '././CreatedEventCard
import IconBreadcrumbs from '../user/IconBreadcrumbs';
// import BasicButtons from '../common/BasicButtons';
import { useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const EventList = (props) => {
  let location = useLocation();
  const [open, setOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [createdEvents, setCreatedEvents] = useState([]);
  const [joinedEvents, setJoinedEvents] = useState([]);
  const [requestedEvents, setRequestedEvents] = useState([]);
  const [user, setUser] = useState(location.state?.username || '');
  

  useEffect(() => {
    if(props.option === 1) {
      // Fetch events from API // allevents
      console.log(user);
      axios.get(`http://localhost:8081/api/allevents/${user}`)
      .then(response => {
        // Set the events state with the fetched data
        setEvents(response.data);
        console.log(events + "allevents");
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
    } else if(props.option === 3) {
      axios.get(`http://localhost:8081/api/createdevents/${user}`)
      .then(response => {
        // Set the events state with the fetched data
        setCreatedEvents(response.data);
        console.log(response.data[0] + "createdevents");
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
    } else if(props.option === 2) {
      axios.get(`http://localhost:8081/api/joinedevents/${user}`)
      .then(response => {
        // Set the events state with the fetched data
        setJoinedEvents(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
    } else if(props.option === 4) {
      axios.get(`http://localhost:8081/api/requestedevents/${user}`)
      .then(response => {
        // Set the events state with the fetched data
        setRequestedEvents(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
    }

  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div className='eventlist-container'>
      <Box sx={{ flexGrow: 1 }}>
        {/* <Grid container sx={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
        <IconBreadcrumbs />
        <FormDialog />
        </Grid> */}
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 13 }} sx={{ justifyContent: 'center',  }}>
          
          {/* ALL EVENTS */}
          {props.option === 1 && (
            events.map((event, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <AllEventCard eventDetails={event} user={user} />
              </Grid>
            ))
          )}

          {/* JOIN EVENTS */}
          {props.option === 2 && (
            joinedEvents.map((event, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <JoinedEventCard eventDetails={event} user={location.state.username}/>
              </Grid>
            ))
          )}
              
          {/* CREATED EVENTS */}
          {props.option === 3 && (
            createdEvents.map((event, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <CreatedEventCard eventDetails={event} user={location.state.username} />
              </Grid>
            ))
          )}

          {/* REQUESTED EVENTS */}
          {props.option === 4 && (
            requestedEvents.map((event, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <RequestedEventCard eventDetails={event} user={location.state.username} />
              </Grid>
            ))
          )}

        </Grid>
      </Box>
    </div>
  );
}

export default EventList;
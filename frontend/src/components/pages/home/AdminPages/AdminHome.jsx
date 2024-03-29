import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ApproveOrganizerCard from './AdminOrganizers/RequestOrganizerCard';
import GiveAdminCard from './AdminUsers/GiveAdminCard';
import AdminBreadcrumbs from '../admin/AdminBreadcrumbs';
import { useEffect } from 'react';
import axios from 'axios';

const AdminHome = (props) => {
  const [requestOrganizer, setRequestOrganizer] = useState([]);
  const [giveAdmin, setGiveAdmin] = useState([]);

  useEffect(() => {
    if(props.option === 5) {
      // Fetch events from API
      axios.get('http://localhost:8081/api/requestOrganizer')
      .then(response => {
        // Set the events state with the fetched data
        setRequestOrganizer(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
    } else if(props.option === 6) {
      axios.get('http://localhost:8081/api/listUser')
      .then(response => {
        // Set the events state with the fetched data
        setGiveAdmin(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
    }

  }); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container sx={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
        <AdminBreadcrumbs />
      </Grid>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 13 }} sx={{ justifyContent: 'center',  }}>

        {props.option === 5 && (
          requestOrganizer.map(event => (
            <Grid item xs={2} sm={4} md={4} key={event.event_id}>
              <RequestOrganizerCard requestDetails={event} />
            </Grid>
          ))
        )}

        {props.option === 6 && (
          giveAdmin.map(event => (
            <Grid item xs={2} sm={4} md={4} >
              <GiveAdminCard userDetails={event} />
            </Grid>
          ))
        )}

      </Grid>
    </Box>
  );
}

export default AdminHome;
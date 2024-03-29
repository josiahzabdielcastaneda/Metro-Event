import * as React from 'react';
// import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
// import GrainIcon from '@mui/icons-material/Grain';
import EventFormDialog from '../home/EventFormDialog';
import RequestOrganizerDialog from '../home/RequestOrganizerDialog';
import { NavLink, Outlet, useNavigation } from 'react-router-dom';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs() {
  const navigate = useNavigation();

  function handleEvent() {
      navigate('/events');
  }
  function handleEvent() {
    navigate('/my');
}
  return (
    <>
    <div className="breadcrumbs-container" role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <NavLink to="joined">Organizer Request</NavLink>
        <NavLink to="my">User List</NavLink>
      </Breadcrumbs>
    </div>
    <Outlet/>
    </>
  );
}
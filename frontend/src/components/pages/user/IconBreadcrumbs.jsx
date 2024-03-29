import * as React from 'react';
// import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
// import GrainIcon from '@mui/icons-material/Grain';
import EventFormDialog from '../home/EventFormDialog';
import RequestOrganizerDialog from '../home/RequestOrganizerDialog';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs() {
  const navigate = useNavigate();
  const location = useLocation();
  // const {username, isAuth} = location.state;


// useEffect(() => {
//   console.log(username + " => " + isAuth);
// }, [username,isAuth]);
  return (
    <>
    <div className="breadcrumbs-container" role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <NavLink to={{ pathname: './.', state: {username:'user1', isAuth:true} }}>All Event</NavLink>
        {/* <NavLink to={Outlet}>All Event</NavLink> */}
        <NavLink to="requested">Requested Events</NavLink>
        <NavLink to="joined">Events Joined</NavLink>
        <NavLink to="my">My Events</NavLink>
          {/* <a onClick={() => {setLink1(true)}}>All Events</a>
          <a>Joined Events</a> */}
      </Breadcrumbs>
    </div>
    <Outlet/>
    </>
  );
}
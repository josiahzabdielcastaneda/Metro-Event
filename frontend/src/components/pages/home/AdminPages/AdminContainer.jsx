import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AdminHome from './AdminHome';

const AdminContainer = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} style={{ marginTop: '20px', marginBottom: '20px' }}>
        <AdminHome />
      </Container>
    </React.Fragment>
  );
}

export default AdminContainer;
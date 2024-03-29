import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ParticipantsDialog = ({ open, onClose }) => {
  // Sample list of requests (replace with your actual data)
  const requests = [
    { firstName: 'John', middleName: 'Doe', lastName: 'Smith' },
    { firstName: 'Jane', middleName: 'E', lastName: 'Doe' },
    { firstName: 'Alice', middleName: 'F', lastName: 'Johnson' },
    { firstName: 'Alice', middleName: 'F', lastName: 'Johnson' },
    { firstName: 'Alice', middleName: 'F', lastName: 'Johnson' },
    { firstName: 'Alice', middleName: 'F', lastName: 'Johnson' },
  ];

  const handleAccept = (request) => {
    // Handle accept action
    console.log(`Accepted request from ${request.firstName} ${request.lastName}`);
  };

  const handleCancel = (request) => {
    // Handle cancel action
    console.log(`Cancelled request from ${request.firstName} ${request.lastName}`);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Participants</DialogTitle>
      <DialogContent>
        {requests.map((request, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', border: '1px solid #ccc', paddingBottom: '12px', borderRadius: '5px', padding: '16px', margin: '14px 0' }}>
            <Typography style={{ flex: 1, textAlign: 'center' }}>
              {request.firstName} {request.middleName} {request.lastName}
            </Typography>
          </div>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ParticipantsDialog;

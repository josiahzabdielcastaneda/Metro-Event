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

const RequestOrganizerCard = ({ requestDetails }) => {
  const { request_id, username } = requestDetails

  const handleDenyButton = () => {
    const requestData = {
      request_id: request_id, 
    };
    axios.post('http://localhost:8081/api/denyOrganizerRequest', requestData)
    .then(response => {
      // Handle the response from the API
      alert(response.data.message);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  const handleAcceptButton = () => {
    const requestData = {
      request_id: request_id, 
    };
    axios.post('http://localhost:8081/api/acceptOrganizerRequest', requestData)
    .then(response => {
      // Handle the response from the API
      alert(response.data.message);
    })
    .catch(error => {
      console.error('Error:', error);
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
        <Typography level="body-sm">
          Request ID: {request_id}
        </Typography>
        <Typography level="body-sm">
          Username: {username}
        </Typography>
      </CardContent>
      <CardActions buttonFlex="0 1 120px">
      <Button variant="outlined" color="neutral" onClick={handleDenyButton}>
          Deny Organizer
        </Button>
        <Button variant="outlined" color="neutral" onClick={handleAcceptButton}>
          Accept Organizer
        </Button>
      </CardActions>
    </Card>
  );
}

export default RequestOrganizerCard;
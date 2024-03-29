import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

const GiveAdminCard = ({ userDetails }) => {
  const { username, user_type } = userDetails

  const handleAdminButton = () => {
    const requestData = {
      request_id: request_id, 
    };
    axios.post('http://localhost:8081/api/makeAdmin', requestData)
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
      </Box>
      <CardContent>
        <Typography level="body-sm">
          Username: {username}
        </Typography>
        <Typography level="body-sm">
          User Type: {user_type}
        </Typography>
      </CardContent>
      <CardActions buttonFlex="0 1 120px">
        <Button variant="outlined" color="neutral" onClick={handleAdminButton}>
          Make Admin
        </Button>
      </CardActions>
    </Card>
  );
}

export default GiveAdminCard;
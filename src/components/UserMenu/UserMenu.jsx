import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth.operations';
import { useAuth } from 'hooks';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '40px',
      }}
    >
      <Typography variant="h6" component="div">
        Welcome, {user.name}
      </Typography>
      <Button
        onClick={() => dispatch(logOut())}
        type="button"
        variant="outlined"
        color="error"
        sx={{
          // border: '1px solid white',
          backgroundColor: 'red',
          color: 'white',
        }}
      >
        Logout
      </Button>
    </Box>
  );
};

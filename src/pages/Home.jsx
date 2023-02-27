import { LoginForm } from 'components/LoginForm/LoginForm';
import { NavLink } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Home() {

  return (
    <>
        <Box
          sx={{
            minHeight: 'calc(100vh - 60px)',
            marginTop: '-150px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <LoginForm />

          <Typography
            variant="h6"
            component="h6"
            sx={{ color: '#1976d2', marginTop: '4px' }}
          >
            Don't have an account yet?
          </Typography>
          <NavLink
            to="/register"
            style={{
              marginTop: '8px',
              color: '#1976d2',
              width: '364px',
              textAlign: 'center',
              fontWeight: '400',
              border: '1px solid #1976d2',
            }}
          >
            <Typography variant="h6" component="h6">
              Register
            </Typography>
          </NavLink>
        </Box>
    </>
  );
}
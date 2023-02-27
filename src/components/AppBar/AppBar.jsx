import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';

export const AppBarComponent = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '60px',
          padding: '0 30px',
          backgroundColor: 'rgb(0, 128, 255)',
        }}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </AppBar>
    </Box>
  );
};

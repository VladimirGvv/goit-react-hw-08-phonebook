import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth.operations';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container maxWidth="xs">
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          minHeight: 'calc(100vh - 60px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          '& .MuiTextField-root': { width: '396px' },
        }}
        autoComplete="off"
      >
        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontWeight: '600',
            color: 'rgb(0, 128, 255)',
            marginBottom: '12px',
          }}
        >
          Phonebook
        </Typography>
        <Typography
          variant="h5"
          component="h5"
          sx={{
            fontWeight: '600',
            color: 'rgb(0, 128, 255)',
            marginBottom: '12px',
          }}
        >
          Create new accaunt
        </Typography>
        <TextField
          type="text"
          name="name"
          label="Username"
          variant="outlined"
          margin="dense"
          size="small"
        />
        <TextField
          type="email"
          name="email"
          label="Email"
          variant="outlined"
          margin="dense"
          size="small"
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          variant="outlined"
          margin="dense"
          size="small"
        />
        <Button
          type="submit"
          variant="outlined"
          fullWidth={true}
          sx={{ marginTop: '8px' }}
        >
          Register
        </Button>
      </Box>
    </Container>
  );
};

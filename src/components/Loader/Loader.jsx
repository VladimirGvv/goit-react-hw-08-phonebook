import { RotatingLines } from 'react-loader-spinner';
import Box from '@mui/material/Box';

export const Loader = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
      }}
    >
      <RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>
    </Box>
  );
};

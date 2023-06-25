import * as React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '../components/Paper';
import image from '../../../images/loginBackground.jpg'

function AppForm(props) {
  const { children } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition:'center',
        backgroundAttachment: 'fixed',
        mt: 8,
        height: '100%'
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ mt: 5, mb: 7 }}>
          <Paper
            background="light"
            sx={{ py: { xs: 4, md: 8 }, px: { xs: 3, md: 6 }, opacity: '0.7'}}
          >
            {children}
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

AppForm.propTypes = {
  children: PropTypes.node,
};

export default AppForm;

import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Typography, Box } from '@mui/material';

import WebApp from './WebApp';

import './App.css';


function App() {
  return (
    <Container component="main" maxWidth="lg">
      <Box sx={{
        marginTop: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Typography component="h1" variant="h5">CanvasMusic</Typography>
      <WebApp></WebApp>
      </Box>
    </Container>
  );
}

export default App;

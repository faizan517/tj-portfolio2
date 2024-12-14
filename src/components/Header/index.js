import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Fonts } from '../../utils/Fonts';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '50px',
  backdropFilter: 'blur(10px)',
  background: 'linear-gradient(to right, #d2d2e0, #d2d2e0)',
  padding: '8px 24px',
  boxShadow: theme.shadows[2],
}));

const StyledLogo = styled('div')(() => ({
  width: '40px',
  height: '40px',
  backgroundColor: 'white',
  borderRadius: '50%',
}));

const MenuLink = styled(Button)(() => ({
  color: '#000',
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: '500',
  ...Fonts.Inter,
}));

const WhatsAppButton = styled(Button)(() => ({
  backgroundColor: '#000',
  color: '#fff',
  borderRadius: '50px',
  padding: '10px 20px',
  ...Fonts.Inter,
  '&:hover': {
    backgroundColor: '#222',
  },
}));

function Header() {
  return (
    <AppBar position="fixed" sx={{ bgcolor: 'transparent', boxShadow: 0, mt: '28px' }}>
      <Container maxWidth="lg">
        <StyledToolbar>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <StyledLogo />
            <Box sx={{ display: 'flex', gap: 4, ml: 4 }}>
              <MenuLink>Home</MenuLink>
              <MenuLink>Work</MenuLink>
              <MenuLink href='about'> About</MenuLink>
              <MenuLink>Contact</MenuLink>
              <MenuLink>Resume</MenuLink>
            </Box>
          </Box>
          <WhatsAppButton>
            WhatsApp  →
          </WhatsAppButton>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

export default Header;

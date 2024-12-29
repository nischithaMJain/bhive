import React, { lazy, Suspense } from 'react'
import logo from '../../assets/logo.png'
import Loading from '../Loading/Loading';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CallIcon from '@mui/icons-material/Call';
import './Header.css'
const Image = lazy(() => (import('../Image/Image')));

const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className='d-flex justify-content-between header' >
          <Suspense fallback={<Loading />}>
            <Image src={logo} alt="Behive logo" height={40} width={125} />
          </Suspense>
          <CallIcon className='call' />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;

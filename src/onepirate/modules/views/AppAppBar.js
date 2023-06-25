import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import { useNavigate, Link } from 'react-router-dom';
import AppBar from '../components/AppBar';
import { useSelector } from 'react-redux'
import Toolbar from '../components/Toolbar';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';


export function findNoOfItems(obj) {
  let number = 0
  for (const keys in obj) {
    number += obj[keys].qty
  }
  return number
}

const rightLink = {
  fontSize: 20,
  marginLeft: '7px',
  color: 'black',
};
const searchbarstyle = {
  height: '40px',
  marginLeft: '15px',
  fontSize: '18px',
  paddingLeft: '7px',
  border: '1px solid lightgray',
  background: '#f5f5f5',
  flexGrow: 1
}

function AppAppBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const searchBar = useRef()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);

  const inputChange = () => {
    setSearchTerm(searchBar.current.value)
  }

  const makeRequestToSearchForProduct = () => {
    navigate(`/search/?name=${searchTerm}`)

  }
  const cart = useSelector(({ cart }) => {
    return cart
  })


  const noOfCartItem = findNoOfItems(cart) 

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', bgcolor: 'white', borderBottom: '2px solid #f5f5f5', }}>
          <Box sx={{ alignItems: 'center',flexGrow:1}}>      
            <Link
              to="/"
            >
              <Typography
                sx={{ ml: 0, fontSize: 24, color: 'black', textDecoration: 'none', fontWeight: 'bold',fontFamily: 'varela round' }}
              >eMART.</Typography>
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Link to='/cart'>
              <Badge badgeContent={noOfCartItem} color="primary">
                <ShoppingCartOutlinedIcon style={{ color: 'black' }} />
              </Badge>
            </Link>
            <input
              ref={searchBar}
              style={searchbarstyle}
              type='search' placeholder='search for products'
              value={searchTerm}
              onChange={inputChange} />
            <Button variant="contained"
              onClick={makeRequestToSearchForProduct}
              sx={{ ml: 1, bgcolor: '#FF3366','&: hover':{bgcolor: '#FF3366'} }}>
              SEARCH
            </Button>
            <Link to="/signIn" >
              <Typography sx={rightLink}>Login</Typography>
            </Link>
            <Link to="/signUp" >
              <Typography sx={rightLink}>Sign Up</Typography>
            </Link>

          </Box>
        </Toolbar>
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            Close me!
          </Alert>
        </Collapse>
      </AppBar>
    </div>
  );
}

export default AppAppBar;

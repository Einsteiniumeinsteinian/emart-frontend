import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const SMLinkStyles = {color:'white',textAlign: 'center',padding: '5px',borderRadius: '10px',marginRight:'7px'}
const listStyle = {fontFamily:'varela round',lineHeight:'2'}

const Footer = () => {
    return (
        <Box sx={{ display: 'flex',flexDirection:{xs:'column',md:'row'}, p: 5, bgcolor: '#fff5f8',justifyContent: 'space-between'}}>
            <Box sx={{order: {xs:'2',md:'0'}}}>
                <Typography variant='h3' sx={{ mb: 5,fontFamily: 'varela round' }}>eMart.</Typography>
                <Typography variant='h6' sx={{fontSize: '15px',fontFamily:'varela round'}}>
                    There are many variations of passages of Lorem Ipsum available,<br/>
                    but the majority have suffered alteration in some form,<br/>
                      or randomised words which don't look even slightly believable.
                </Typography>
                <Box sx={{ display: 'flex', mt: 3,  }}>
                    <span style={{ background: 'rgb(59, 89, 153)', ...SMLinkStyles }}><FacebookIcon sx={{verticalAlign:'middle'}} /></span>
                    <span style={{ background: 'rgb(228, 64, 95)', ...SMLinkStyles  }}><InstagramIcon sx={{verticalAlign:'middle'}} /></span>
                    <span style={{ background: 'rgb(85, 172, 238)', ...SMLinkStyles  }}><TwitterIcon sx={{verticalAlign:'middle'}} /></span>
                    <span style={{ background: 'rgb(230, 0, 35)', ...SMLinkStyles  }}><PinterestIcon  sx={{verticalAlign: 'middle'}}/></span>
                </Box>
            </Box>
            <Box sx={{padding: '0px 10px',width:{md:'30%',xs: '100%'}}}>
                <Typography variant='h5' sx={{ mb: 5, fontWeight: 'bold',textAlign: 'center'}}>Useful links</Typography>
                <Box sx={{display:'flex',justifyContent: 'space-between'}}>
                <ul style={{listStyleType: 'none',paddingLeft: '0px'}}>
                    <li style={listStyle}>Home</li>
                    <li style={listStyle}>Men Fashion</li>
                    <li style={listStyle}>Acessories</li>
                    <li style={listStyle}>Order Tracking</li>
                </ul>
                <ul style={{listStyleType: 'none',paddingLeft: '0px'}}>
                    <li style={listStyle}>Cart</li>
                    <li style={listStyle}>Women Fashion</li>
                    <li style={listStyle}>My Account</li>
                    <li style={listStyle}>Terms</li>
                </ul>
                </Box>
            </Box>
            <Box >
            <Typography variant='h5' sx={{ mb: 7,  fontWeight: 'bold',textAlign: 'center' }}>Contact</Typography>
            <p style={{fontFamily: 'varela round'}}><LocationOnIcon sx={{mr: 2.1,verticalAlign: 'middle'}} /> 244 Whistledown lane, Leicester</p>
            <p style={{fontFamily: 'varela round'}}><PhoneIcon  sx={{mr: 2.1,verticalAlign: 'middle'}} /> +234 56789</p>
            <p style={{fontFamily: 'varela round'}}><MailOutlineIcon  sx={{mr: 2.1,verticalAlign: 'middle'}}/>contact@site.dev</p>
            </Box>

        </Box>
    )
}

export default Footer
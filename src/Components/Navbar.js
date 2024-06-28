import React from 'react'
import Logo from './clapper-icon-website-logo-png-removebg-preview.png'
import { Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <Box w='100%' color='#FC6E51' sx={{
                fontSize: '32px',
                '@media screen and (max-width: 600px)': {
                    fontSize: '24px'
                },
            }} fontWeight={'600'} display={'flex'} alignItems={'center'} gap={'25.6px'}>
                <Link to='/'>
                    <Box boxSize='80.64px' display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <Image src={Logo} alt='Dan Abramov' />
                    </Box>
                </Link>
                <Link style={{ textTransform: 'uppercase' }} to='/'>Movies</Link>
                <Link to='/WatchList' style={{ textTransform: 'uppercase' }} >WatchList</Link>
            </Box>
        </>
    )
}

export default Navbar
// src\Components\Navbar.js
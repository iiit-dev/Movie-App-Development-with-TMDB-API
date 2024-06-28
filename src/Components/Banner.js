import React from 'react'
import { Box, Center } from '@chakra-ui/react'

const Banner = () => {
    const basicBoxStyles = {
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        textShadow: '0 0 20px black',
        fontWeight: 'bold',
        fontSize: '24px',
        background:
            'url(https://images4.alphacoders.com/909/909185.jpg) center/cover no-repeat',
    }
    return (
        <>
            <Box sx={basicBoxStyles} w='100%' h={'511px'}>
                <Box opacity={'60%'} bg={'Black'} w={'100%'}>Avengers: Infinity War
                </Box>
            </Box>
        </>
    )
}

export default Banner
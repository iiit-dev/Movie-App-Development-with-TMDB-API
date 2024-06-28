import React from 'react'
import { Box } from '@chakra-ui/react'
const MovieOverview = ({overview}) => {
    return (
        <Box textAlign='center'>
            {overview}
        </Box>
    )
}

export default MovieOverview
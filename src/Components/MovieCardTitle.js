import React from 'react'
import { Box } from '@chakra-ui/react'

const MovieCardTitle = ({ original_title }) => {
    return (
        <Box
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={2}
            fontSize={'16px'}
            textAlign='center'
        >
            {original_title}
        </Box>
    )
}

export default MovieCardTitle
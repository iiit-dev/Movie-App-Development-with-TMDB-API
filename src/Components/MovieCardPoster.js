import React from 'react'
import { Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
const MovieCardPoster = ({poster_path}) => {
    const property = {
        imageUrl: `https://image.tmdb.org/t/p/original/${poster_path}`,
        imageAlt: 'Rear view of modern home with pool',
    }
    return (
            <Box display='flex' justifyContent='center'>
                <Image objectFit={'contain'} boxSize='250px' src={property.imageUrl} alt={property.imageAlt} />
            </Box>
    )
}

export default MovieCardPoster
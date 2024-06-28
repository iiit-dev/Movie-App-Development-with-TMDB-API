import React from 'react'
import { Box, Badge, Image } from '@chakra-ui/react'
import MovieCardPoster from './MovieCardPoster'
import MovieCardOverview from './MovieCardOverview'
import MovieCardTitle from './MovieCardTitle'
const MovieCard = (props) => {
    const available = (movieObj) => {
        for (let i = 0; i < props.watchList.length; i++) {
            if (props.watchList[i].id === movieObj.id) {
                return true;
            }
        }
        return false;
    };
    return (
        <div>
            <Box border={'1.5px solid black'} display={'flex'} p={'1vw'} flexDirection={'column'} alignItems={'center'} gap={'12.8px'} justifyContent={'space-evenly'} m={'12.8px'} h={'384px'} w={'300px'} borderRadius='lg' overflow='hidden' >
                <MovieCardPoster poster_path={props.movieObj.poster_path} />
                <Box display={'flex'} p={'12.8px'} flexDirection={'column'} alignItems={'center'} gap={'12.8px'} justifyContent={'space-evenly'}>
                    <Box display='flex' alignItems='baseline' justifyContent='center'>
                        {
                            available(props.movieObj)
                                ?
                                <Badge fontSize={'14.08px'} textAlign={'center'} width={'230.4px'} onClick={() => (props.removeTitle(props.movieObj))} className='movieCardBadge' borderRadius='full' px='2' colorScheme='red'>
                                    Remove From WatchList
                                </Badge>
                                :
                                <Badge fontSize={'14.08px'} textAlign={'center'} width={'230.4px'} onClick={() => (props.addTitle(props.movieObj))} className='movieCardBadge' borderRadius='full' px='2' colorScheme='teal'>
                                    Add To WatchList
                                </Badge>
                        }
                        
                    </Box>
                    <MovieCardTitle original_title={props.movieObj.original_title} />
                </Box>
            </Box>
        </div>
    )
}

export default MovieCard
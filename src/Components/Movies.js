import React, { useState, useEffect } from 'react'
import { Box, Text } from '@chakra-ui/react'
import MovieCard from './MovieCard'
import Pagination from './Pagination'
import axios from 'axios'
const Movies = (props) => {
  const popularMoviesApiKey = 'https://api.themoviedb.org/3/movie/popular?api_key=7b307a215984058463d1a9913619573c&language=en-US&page=1'
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const pgIn = () => {
    setPage(page + 1)
  }
  const pgDec = () => {
    if (page === 1) {
      setPage(1)
    }
    else {
      setPage(page - 1)
    }
  }
  useEffect(
    () => {
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=7b307a215984058463d1a9913619573c&language=en-US&page=${page}`).
      then(
        (response) => {
          setMovies(response.data.results)
          console.log(response.data.results )
        }
      );
    
    }, [page]);
  const movieCollection = movies.map((movie) => { return <MovieCard watchList={props.watchList} removeTitle={props.removeTitle} movieObj={movie} addTitle={props.addTitle} /> })
  // PAGINATION

  return (
    <div>
      <Text fontSize='30px' p={'1.28px'} textAlign={'center'} color={'#FC6E51'} fontWeight={'700'} >Popular Movies</Text>
      <Box display={'flex'} gap={'25.6px'} minH={'100vh'} flexWrap={'wrap'} alignItems={'center'} justifyContent={'space-evenly'} >
        {movieCollection}
      </Box>
      <Pagination page={page} pgIn={pgIn} pgDec={pgDec} />
    </div>
  )
}

export default Movies

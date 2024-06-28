import React, { useEffect } from 'react'
import { Table, Thead, Tbody, TableCaption, TableContainer, Tr, Th, Td, Box, Flex } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { Input } from '@chakra-ui/react'
import { Image, Text } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useState } from 'react'
import { ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons'
import genreID from './GenreIdList'
const WatchList = ({ watchList, setWatchList, removeTitle }) => {

  const [genreCategories, setGenreCategories] = useState(['All Genre'])
  useEffect(
    () => {
      let temp = watchList.map((movieObj) => genreID[movieObj.genre_ids[0]]);
      temp = new Set(temp)
      setGenreCategories(['All Genres', ...temp])
      console.log(temp)
    }, [watchList]
  )
  const [currentGenre, setCurrentGenre] = useState([])

  let filterGenre = (genre) => {
    setCurrentGenre(genre)
  }
  const [search, setSearch] = useState('')
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  const emptyOrNot = () => {
    if (watchList.length === 0) { return true }
    return false
  }
  const inputStyle = {
    padding: '15px',
    width: '630px',
    border: '2px solid #FF642E',
    borderRadius: '10px',
    outline: 'none',
    margin: '0 10px',
  }
  const sortIncreasing = () => {
    let sortedInc = watchList.sort((movie1, movie2) => {
      return movie1.vote_average - movie2.vote_average
    })
    setWatchList([...sortedInc])
  }
  const sortDecreasing = () => {
    let sortedDec = watchList.sort((movie1, movie2) => {
      return movie2.vote_average - movie1.vote_average
    })
    setWatchList([...sortedDec])
  }
  useEffect(
    () => {

    }, [watchList]
  )
  return (
    <Box minH={'100vh'}>
      <Box mx={'auto'} w={'90%'} >
        {
          genreCategories.
            map
            (
              (genre) => <button onClick={() => filterGenre(genre)}
                style={{
                  width: 'fit-content',
                  // height:'35px',
                  // fontSize: currentGenre === genre ? '18px' : '18px',
                  fontWeight: currentGenre === genre ? '600' : '600',
                  backgroundColor: currentGenre === genre ? '#FF8300' : 'white',
                  color: currentGenre === genre ? 'white' : 'black',
                  margin: currentGenre === genre ? '12.8px' : '12.8px',
                  border: currentGenre === genre ? '1.5px solid black' : '1.5px solid black',
                  padding: currentGenre === genre ? '4.1px 16px' : '4.1px 16px',
                  borderRadius: currentGenre === genre ? '10px' : '10px'
                }}

              >
                {genre}
              </button>
            )
        }
      </Box>

      <Box mt={'10px'} display={'flex'} mb={'25.6px'} justifyContent={'center'}>
        <input type="text" onChange={handleSearch} value={search} placeholder='Search movies in watchlist...' style={inputStyle} />
      </Box>
      <TableContainer>
        <Table variant='striped' colorScheme='orange'>
          <TableCaption>{emptyOrNot() ? 'Your WatchList is Empty' : 'Your WatchList'} </TableCaption>
          <Thead>
            <Tr>
              <Th textAlign={'center'}>Name</Th>
              <Th display={'flex'} justifyContent={'space-evenly'} alignContent={'center'}>
                <ArrowUpIcon onClick={sortIncreasing} fontSize={'19.2px'} />
                <Text marginTop={'2px'}>Ratings</Text>
                <ArrowDownIcon onClick={sortDecreasing} fontSize={'19.2px'} /></Th>
              <Th textAlign={'center'}>Genre</Th>
              <Th textAlign={'center'}></Th>
            </Tr>
          </Thead>
          <Tbody>
            {watchList.filter((movieObj) => {
              if (currentGenre === 'All Genres') {
                return true
              }
              else {
                return genreID[movieObj.genre_ids[0]] === currentGenre
              }
            }).filter((movieObj) => (movieObj.title.toLowerCase().includes(search.toLocaleLowerCase()))).map((movieObj) => (
              <Tr key={movieObj.id}>
                <Td textAlign={'center'} sx={{ '@media(max-width:700px)': { flexDir: 'column', gap: '5px' } }} flexDirection={'row'} display={'flex'} alignItems={'center'} justifyContent={''} gap={'10'}>
                  <Image
                    boxSize='175px'
                    objectFit='contain'
                    src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                    alt={movieObj.original_title}
                  />
                  <Text fontWeight={600}>{movieObj.original_title}</Text>
                </Td>
                <Td textAlign={'center'}>{movieObj.vote_average.toFixed(1)}</Td>
                <Td textAlign={'center'}>{genreID[movieObj.genre_ids[0]]}</Td>
                <Td textAlign={'center'}> <DeleteIcon cursor={'pointer'} onClick={() => (removeTitle(movieObj))} fontSize={'20px'} color={'red'} /> </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default WatchList

// why isnt the code above able to render my watchlist
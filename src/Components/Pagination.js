import React, { useState } from 'react'
// import { useState } from 'react';
import { Box, Text } from '@chakra-ui/react'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
const Pagination = (props) => {
  return (
    <Box display={'flex'} justifyContent={'center'} m={'1vw'}>
      <Box display={'flex'} alignItems={'center'} p={'1vw'} justifyContent={'space-evenly'} w={'20%'}>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} as='button' fontSize={'20px'} borderRadius='md' bg='tomato' color='white' px={4} h={8} onClick={props.pgDec}>
          <ArrowBackIcon />
        </Box>
        <Text fontWeight={700} fontSize={'18px'}>{props.page}</Text>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} as='button' fontSize={'20px'} borderRadius='md' bg='tomato' color='white' px={4} h={8} onClick={props.pgIn}>
          <ArrowForwardIcon />
        </Box>
      </Box>
    </Box>
  )
}

export default Pagination
// import React from 'react'

// const Pagination = () => {
//   return (
//     <div>Pagination</div>
//   )
// }

// export default Pagination
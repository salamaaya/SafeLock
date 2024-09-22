import React from 'react'
import { Button } from '@chakra-ui/react';

const GreenButton = ( {text} ) => {
  return (
    <Button 
      bg={'#749857'} 
      color={'#E0CFB6'}
      _hover={{bg:'#365E32'}}
      fontSize={'xl'}
      w={'10vw'}
      padding={'20px'}>

        {text}
        
    </Button>
  )
}

export default GreenButton;
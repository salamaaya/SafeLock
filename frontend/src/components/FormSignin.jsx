import {useState, React} from 'react'
import { Button, useDisclosure, Collapse, Box, FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react';
import PasswordInput from './PasswordInput';

const FormSignin = ( {text}, {form} ) => {
  const { isOpen, onToggle } = useDisclosure()
  const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  return (
    <>
      <Button 
        onClick={ onToggle }
        bg={'#749857'} 
        color={'#E0CFB6'}
        _hover={{bg:'#365E32'}}
        fontSize={'xl'}
        w={'10vw'}
        px={'20'}>
          {text}
      </Button>

      <Collapse in={isOpen} animateOpacity>
        <Box 
            boxShadow='lg'
            p='40px'
            color='white'
            mt='4'
            bg='#749857'
            rounded='md'
            shadow='lg'>
            <FormLabel>Email/Username</FormLabel>
            <Input boxShadow='lg' bg='#E0CFB6' type='email' value={input} onChange={handleInputChange} placeholder='Email/Username' />

            <FormLabel>Password</FormLabel>
            <PasswordInput/>
        </Box>
    </Collapse>
  </>
  )
}

export default FormSignin;
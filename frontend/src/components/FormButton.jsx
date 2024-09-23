import {useState, React} from 'react'
import { Button, useDisclosure, Collapse, Box, FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react';
import PasswordInput from './PasswordInput';

const FormButton = ( {text}, {form}) => {
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
        padding={'20px'}>
          {text}
      </Button>

      <Collapse in={isOpen} animateOpacity>
        <Box 
            p='40px'
            color='white'
            mt='4'
            bg='#749857'
            rounded='md'
            shadow='lg'>
            <FormLabel>Email</FormLabel>
            <Input bg='#E0CFB6' type='email' value={input} onChange={handleInputChange} placeholder='Email' />
            <PasswordInput/>
        </Box>
    </Collapse>
  </>
  )
}

export default FormButton;
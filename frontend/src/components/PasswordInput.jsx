import {useState, React} from 'react'
import { Input, InputRightElement, Button, Box, FormLabel } from '@chakra-ui/react';

const PasswordInput = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const [input, setInput] = useState('')
    const handleInputChange = (e) => setInput(e.target.value)
  return (
         <Box 
            color='white'
            mt='4'
            bg='#749857'
            rounded='md'
         >
            <FormLabel>Password</FormLabel>
            <Input bg='#E0CFB6' type={show ? 'text' : 'password'} value={input} onChange={handleInputChange} placeholder='Password' />
            <Button h='1.75rem' size='sm' bg={'#749857'} _hover={{bg:'#365E32'}} w={'5vw'} onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
            </Button>
        </Box>

  )
}

export default PasswordInput;

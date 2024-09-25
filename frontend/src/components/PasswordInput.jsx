import {useState, React} from 'react'
import { Input, Button, HStack } from '@chakra-ui/react';

const PasswordInput = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const [input, setInput] = useState('')
    const handleInputChange = (e) => setInput(e.target.value)
  return (
         <>
            <HStack>
              <Input boxShadow='lg' bg='#E0CFB6' type={show ? 'text' : 'password'} value={input} onChange={handleInputChange} placeholder='Password' />
              <Button h='1.75rem' size='sm' _hover={{bg:'#365E32'}} w={'5vw'} onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
              </Button>
            </HStack>
        </>

  )
}

export default PasswordInput;

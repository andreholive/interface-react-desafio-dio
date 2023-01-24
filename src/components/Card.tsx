import {useState} from 'react';
import { Box, Center, Input } from "@chakra-ui/react"
import { login } from "../services/login"
import { DButton } from './DButton';

export const Card = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    
    return (
            <Box backgroundColor='#fff' borderRadius='25px' padding='15px'>
                <Center>
                    <h1>Faça o Login</h1>  
                </Center>
                <Input onChange={(e) => setEmail(e.target.value)} value={email} placeholder='email' />
                <Input onChange={(e) => setPassword(e.target.value)} value={password} placeholder='password' type='password' />
                <Center>
                    <DButton onClick={() => login(email)}/>
                </Center>
            </Box>
    )
}
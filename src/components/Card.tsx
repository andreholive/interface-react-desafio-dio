import {useState, useEffect} from 'react';
import { Box, Center, Input } from "@chakra-ui/react"
import { login } from "../services/login"
import { DButton } from './DButton';
import {api, UserData} from '../api';

export const Card = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [userData, setUserData] = useState<undefined | UserData>();

    useEffect(()=> {
        const getData = async () => {
            const data:UserData = await api;
            setUserData(data)
        }
        getData();
    },[]);
    
    return (
            <Box backgroundColor='#fff' borderRadius='25px' padding='15px'>
                {userData===undefined && <h1>Loading...</h1>}
                <Center>
                    <h1>Faça o Login</h1>  
                </Center>
                <p>{userData?.name}</p>
                <Input onChange={(e) => setEmail(e.target.value)} value={email} placeholder='email' />
                <Input onChange={(e) => setPassword(e.target.value)} value={password} placeholder='password' type='password' />
                <Center>
                    <DButton onClick={() => login(email)}/>
                </Center>
            </Box>
    )
}
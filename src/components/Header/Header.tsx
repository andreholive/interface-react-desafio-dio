import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { AppContext } from '../AppContext';
import './Header.css';

export const Header = () => {
    const {isLoggedIn, setIsLoggedIn} = useContext(AppContext);
    return(
        <Flex backgroundColor='orange' padding='5px'>
            <Box>
                <Center>
                    <Text fontSize='2xl'>Dio Bank</Text>
                </Center>
            </Box>
            <Spacer/>
            {isLoggedIn && <Button onClick={() => {setIsLoggedIn(false)}}>Sair</Button>} 
        </Flex>
    )
}
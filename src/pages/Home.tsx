import { Box, Center, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import { DButton } from "../components/DButton";
import { login } from "../services/login";

const Home = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {setIsLoggedIn} = useContext(AppContext)

    const navigate = useNavigate();

    const validateUser = async () => {
        const loggedIn = await login(email);
        setIsLoggedIn(loggedIn);
        if(!loggedIn){
            alert('Email Inválido!');
            return;
        }
        navigate('/conta/1');
    }

    return (
        <Box padding='25px'>
            <Card>
                <Center>
                    <h1>Faça o Login</h1>
                </Center>
                <Input onChange={(e) => setEmail(e.target.value)} value={email} placeholder='email' />
                <Input onChange={(e) => setPassword(e.target.value)} value={password} placeholder='password' type='password' />
                <Center>
                    <DButton onClick={() => validateUser()} />
                </Center>
            </Card>
        </Box>
    )
}

export default Home;
import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import {useNavigate, useParams} from 'react-router-dom';
import CardInfo from "../components/CardInfo";
import {api} from '../api';
import { AppContext } from "../components/AppContext";

export interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}

const Conta = () => {
    const [userData, setUserData] = useState<undefined | UserData>();
    const { id } = useParams();
    const navigate = useNavigate();

    const {isLoggedIn} = useContext(AppContext);

    !isLoggedIn && navigate('/');

    useEffect(()=> {
        const getData = async () => {
            const data:UserData = await api;
            setUserData(data)
        }
        getData();
    },[]);
    const actualData = new Date();
    
    if(userData && id !== userData.id){
        navigate('/');
    }
    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {userData === undefined ? 
                (<Center><Spinner size='xl' color='white'/></Center>) : 
                (
                <>
                <CardInfo 
                    mainContent={`Bem vindo ${userData?.name}`} 
                    content={`${actualData.getDay()}/${actualData.getMonth()+1}/${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`} 
                    />
                <CardInfo 
                    mainContent='Saldo' 
                    content={`R$ ${userData.balance}`} 
                    />
                
                </>
                )
                }
            </SimpleGrid>
        </Center>
    )
}
export default Conta;
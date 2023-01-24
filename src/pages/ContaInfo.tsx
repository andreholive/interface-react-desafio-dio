import { Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";

const ContaInfo = () => {
    return (
        <>
        <Text>
            Informaçoes da Conta
        </Text>
        <Link to='/conta/1'>
            <Text>
                Conta
            </Text>
        </Link>
        </>
    )
}

export default ContaInfo;
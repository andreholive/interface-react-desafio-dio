import { Box } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { Header } from "./Header/Header"

export const Layout = ({children}:any) => {
    return(
        <>
            <Header />
            <Box minHeight='100vh' backgroundColor='#deadc5' padding='15px'>
            {children}
            </Box>
            <Footer />
        </>
    )
}
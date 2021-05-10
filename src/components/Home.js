import { Box, Center, VStack } from '@chakra-ui/react'
import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import HospitalContainer from './HospitalContainer'


function Home() {
    const [current, setCurrent] = React.useState("");
    return (
        <div>
            <Header />
            <Box width="vh">
                <Center>
                    <VStack mt={4} minWidth="full" >
                        <SearchBar setCurrent={setCurrent} current={current} />
                        <HospitalContainer current={current} />
                    </VStack>
                </Center>


            </Box>
        </div>
    )
}

export default Home

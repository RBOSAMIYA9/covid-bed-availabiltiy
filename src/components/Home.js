import { Box, Center, AlertIcon, Alert, VStack } from '@chakra-ui/react'
import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import HospitalContainer from './HospitalContainer'


function Home() {
    const [current, setCurrent] = React.useState("");
    return (
        <div>
            <Header showHeaderContent={true} />
            <Box >
                <Center>
                    <VStack mt={4} minWidth="full" >
                        <SearchBar setCurrent={setCurrent} current={current} />
                        <Alert status="warning" style={{ fontSize: '1rem', padding: "5px"}} width={['90%', '90%', '80%', '80%']}>
                            <AlertIcon />
                            Disclaimer : Data may be delayed or partial. Please verify with the hospital.
                            </Alert>
                        <HospitalContainer current={current} />
                    </VStack>
                </Center>


            </Box>
        </div >
    )
}

export default Home

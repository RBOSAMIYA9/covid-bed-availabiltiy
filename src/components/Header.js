import { Text, Box, Button } from '@chakra-ui/react'
import React from 'react'

function Header({showHeaderContent}) {
    let arr = [];

    showHeaderContent ? arr=["none", "none", "block", "block"]:arr=["none", "none", "none", "none"]

    return (
        <>
            <Box display="flex" p={3} bg="#319795" justifyContent="space-between" >
                <Box flexGrow="1">
                    <Box as="a" href="/">
                        <Text color="white" fontSize="2xl">
                            <Text as="span" fontWeight="thin" >Co</Text>
                            <Text as="span" fontWeight="bold">Fight</Text>   Beds Availablity 🏥</Text>

                    </Box>

                </Box>


                <Box d={arr} flexGrow="1">
                    <Box d="flex" justifyContent="space-evenly  ">
                        <a href="hospitalForm">
                            <Text color="white">
                                Hospital Registration
                            </Text>
                        </a>

                        <a href="/admin">
                            <Button >Dashboard</Button>
                        </a>
                    </Box>
                </Box>



            </Box>
        </>
    )
}

export default Header

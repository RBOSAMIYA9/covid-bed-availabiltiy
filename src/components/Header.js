import { Text, Box } from '@chakra-ui/react'
import React from 'react'

function Header() {
    return (
        <>
            <Box  display="flex" p={3} bg="#319795" >
                <Text color="white" fontSize="2xl"><Text as="span" fontWeight="thin">Co</Text><Text as="span" fontWeight="bold">Fight</Text>   Beds Availablity 🏥</Text>
            </Box>
        </>
    )
}

export default Header

import React from 'react'
import { Box, Text, Heading, useColorMode } from '@chakra-ui/react'


function Footer() {


    return (
        <>
            <Box pt="12" pb="8" bg="blackAlpha.100" mt={6} >
                <Box p="2">

                    <Heading size="xl" >
                        <Text as="span" fontWeight="light"  >Co</Text>
                        <Text as="span" fontWeight="bold" >Fight</Text></Heading>

                </Box>

                <Text as="span">© 2021 <a href="https://ravindrabosamiya.tech/"> Ravindra Bosamiya</a> All rights reserved</Text>

            </Box>
        </>
    )
}

export default Footer
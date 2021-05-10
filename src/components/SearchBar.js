import { Box, Input, Center, Image } from '@chakra-ui/react'
import React from 'react'
import '../custom.css'
import hospitalImage from './hospitalBg.jpg'

function SearchBar({ setCurrent, current }) {
    const url = "url(" + hospitalImage + ")"
    return (
        <>
            {/* bg="#81E6D9" */}
            <Box width={['90%', '90%', '80%', '80%']} className="searchBar">
                <Box p={12} borderRadius="lg"
                    bgImage={url}

                    backgroundPosition="center"
                    // backgroundRepeat="no-repeat"
                    bgSize=" 100% auto"



                >
                    <Input variant="outline"
                        placeholder="Type hospital name "
                        borderRadius="full"
                        // borderColor="white"
                        focusBorderColor="#4FD1C5"
                        bg="gray.100"
                        value={current}
                        onChange={e => setCurrent(e.target.value)}
                    />

                </Box>
            </Box>
        </>
    )
}

export default SearchBar

import React, { useState } from 'react'
import { Box, Center, Button, VStack } from '@chakra-ui/react'
import SearchBar from './SearchBar'
import AdminHospitalContainer from './AdminHospitalContainer'
import Login from './LoginPage'

function Dashboard() {
    const [current, setCurrent] = React.useState("");
    // const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const logOut = () => {

        localStorage.removeItem('user')
        setUser(null)

    }
    return (
        <>
            {
                user ? (
                    <Box>
                        <Center>
                            <VStack mt={4} minWidth="full" >
                                <SearchBar setCurrent={setCurrent} current={current} />
                                <AdminHospitalContainer current={current} />
                                <Button onClick={() => logOut()}>
                                    Logout
                            </Button>
                            </VStack>

                        </Center>


                    </Box>
                ) : (
                    <Login setUser={setUser} />
                )
            }

        </>
    )
}

export default Dashboard

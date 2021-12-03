import React, { useState } from 'react'
import { Box, Button, Text, FormControl, FormLabel, Input, Center } from '@chakra-ui/react'
import { useForm } from 'react-hook-form';


function LoginPage({ setUser }) {
    const [error, setError] = useState(false)
    const errorMessage = <Text color="red" mt={3}>UserName or password is incorrect!</Text>
    const credentials = {
        userName: "ravindra",
        password: "ravindra"
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        if ((data.userName === credentials.userName) && (data.password === credentials.password)) {
            setError(false)
            console.log("correct");
            localStorage.setItem('user', JSON.stringify({ userName: "ravindra" }))
            // setLoggedIn(true)
            setUser({ userName: "ravindra" })
        }
        else {
            // console.log("galast he bhai");
            setError(true)
        }
    }
    console.log(errors);
    const guestLogin = () => {
        setError(false)
        console.log("correct");
        localStorage.setItem('user', JSON.stringify({ userName: "ravindra" }))
        // setLoggedIn(true)
        setUser({ userName: "ravindra" })
    }

    return (
        <>

            <Center>
                <Box p={12} width={["90%", "80%", "50%", "50%"]} my={10} boxShadow="lg" borderRadius="lg">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Text>Login</Text>
                        <FormControl mt={6} isRequired="true">
                            <FormLabel>
                                User Name
                            </FormLabel>
                            <Input type="text"  {...register("userName", { required: true })} />
                        </FormControl>
                        <FormControl mt={6} isRequired="true">
                            <FormLabel>
                                Password
                            </FormLabel>
                            <Input type="password"  {...register("password", { required: true })} />
                        </FormControl>
                        {error && errorMessage}
                        <Button mt={6} colorScheme="green" type="submit">
                            Login
                        </Button>

                    </form>
                    <Button mt={6} colorScheme="gray" onClick={guestLogin} > Guest login</Button>


                </Box>
            </Center>
        </>
    )
}

export default LoginPage

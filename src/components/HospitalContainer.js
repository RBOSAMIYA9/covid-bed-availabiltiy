import React, { useEffect, useState } from 'react'
import HospitalCard from './HospitalCard'
import { Box, Center, Text, Spinner } from '@chakra-ui/react'
import { projectFirestore } from '../firebase/firebaseConfig'

function HospitalContainer({ current }) {
    const [hospitalList, setHospitalList] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true);
        console.log("called use effect");
        const collectionRef = projectFirestore.collection("hospitalData");
        collectionRef.onSnapshot((snapshot) => {
            var data = snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))
            console.log("data", data)
            setHospitalList(data)
            setLoading(false)
        })


    }, [])

    return (
        <>

            <Box minW="full"  minH="100vh">

                {loading ? (<>
                    <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="blue.500"
                        size="xl"
                    />
                </>) : (<>
                    <Center d="flex" flexDirection="column" >
                        <Box width={['90%', '90%', '80%', '80%']}
                            fontSize="md"
                            justifyContent="flex-end"
                            my={2}
                            bg="gray.100"
                            p={3}
                            borderRadius="md"
                            d={['none', 'none', 'flex', 'flex']}

                        >
                            <Text fontWeight="bold" px={["0px", "0px", "15px", "15px"]}>
                                With <br /> oxygen
                        </Text>
                            <Text fontWeight="bold" px={["0px", "0px", "15px", "15px"]}>
                                WithOut <br /> oxygen
                        </Text>
                            <Text fontWeight="bold" px={["0px", "0px", "15px", "15px"]}>
                                I.C.U
                        </Text>
                            <Text fontWeight="bold" px={["0px", "0px", "15px", "15px"]}>
                                I.C.U <br />+ ventilator
                        </Text>
                        </Box>


                        {hospitalList && hospitalList.filter(data => data.data.hospitalName.includes(current)).map((hospital) => (
                            <HospitalCard hospitalData={hospital} key={hospital.id} />
                        ))}
                        {
                            hospitalList.filter(data => data.data.hospitalName.includes(current)).length === 0 &&
                            <Box borderRadius="md" width={['90%', '90%', '80%', '80%']}  boxShadow="md"  mt={6} p={8}>
                                <Text>No such hospital Found</Text>
                            </Box>
                        }
                    </Center>
                </>)}

            </Box>

        </>
    )
}

export default HospitalContainer

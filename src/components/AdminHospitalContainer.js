import React, { useEffect, useState } from 'react'
import { Box, Text, Spinner } from '@chakra-ui/react'
import AdminHospitalCard from './AdminHospitalCard'
// import { getAllHospitals } from '../firebase/dbOperations'
import { projectFirestore } from '../firebase/firebaseConfig'

function AdminHospitalContainer({ current }) {
    const [hospitalList, setHospitalList] = useState([])
    const [loading, setLoading] = useState(false)
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

            {loading ? <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
            /> : (<>
                <Box width={['90%', '90%', '80%', '80%']} minH="80vh">

                    {hospitalList && hospitalList.filter(data => data.data.hospitalName.includes(current)).map((hospital) => (
                        <AdminHospitalCard key={hospital.id} data={hospital} />
                    ))}
                    {
                        hospitalList.filter(data => data.data.hospitalName.includes(current)).length === 0 &&
                        <Box borderRadius="md" width="100%" boxShadow="md" mt={6} p={8}>
                            <Text>No such hospital Found</Text>
                        </Box>
                    }
                </Box>

            </>)}


        </>
    )
}

export default AdminHospitalContainer

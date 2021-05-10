import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
    Input, Box, Text, FormControl,
    Button, Center, FormLabel, FormHelperText,
    Alert, AlertIcon, AlertTitle, AlertDescription
} from '@chakra-ui/react'
import Header from './Header'
import { addHospital } from '../firebase/dbOperations'

export default function HospitalForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = data => {

        // console.log(data)
        data.whatsappNo = "+91" + data.whatsappNo
        data.adminWhatsappNo = "+91" + data.adminWhatsappNo
        data.contactNo = "+91" + data.contactNo
        // console.log("after adding",data)
        setFilled(true);
        addHospital(data)
    };
    console.log(errors);
    const [filled, setFilled] = useState(false)
    return (
        <>
            <Header />
            {filled ? (<>
                <Center>
                    <Box width="50%" my={10}>
                        <Alert
                            status="success"
                            variant="subtle"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            textAlign="center"
                            height="200px"
                        >
                            <AlertIcon boxSize="40px" mr={0} />
                            <AlertTitle mt={4} mb={1} fontSize="lg">
                                Application submitted!
                            </AlertTitle>
                            <AlertDescription maxWidth="sm">
                                Thanks for submitting your application. Our team will get back to you soon.
                            </AlertDescription>
                        </Alert>
                    </Box>
                </Center>
            </>) : (
                <>
                    <Text mt={6} >Register Hospital </Text>
                    <Center>
                        <Box boxShadow="lg" p={8} width="50%">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <FormControl >
                                    <FormLabel >Hospital Name</FormLabel>
                                    <Input type="text" placeholder="hospitalName" {...register("hospitalName", { required: true })} />
                                    {errors.hospitalName && <Text color="red">Please enter name!</Text>}
                                </FormControl>


                                <FormControl mt={6}>
                                    <FormLabel  >Address</FormLabel>
                                    <Input type="text" placeholder="address" {...register("address", { required: true })} />
                                    {errors.address && <Text color="red">Please enter address!</Text>}
                                </FormControl>

                                <FormControl mt={6}>
                                    <FormLabel >City</FormLabel>
                                    <Input type="text" placeholder="city" {...register("city", { required: true })} />
                                    {errors.city && <Text color="red">Please enter city!</Text>}
                                </FormControl>

                                <FormControl mt={6}>
                                    <FormLabel >Pincode</FormLabel>
                                    <Input type="number" placeholder="pincode" {...register("pincode", { required: true, minLength: 6, maxLength: 6 })} />
                                    {errors.pincode && <Text color="red">Please enter pincode!</Text>}
                                </FormControl>

                                <FormControl mt={6}>
                                    <FormLabel >Contact No</FormLabel>
                                    <Input type="number" placeholder="contactNo" {...register("contactNo", { required: true, minLength: 10, maxLength: 10 })} />
                                    {errors.contactNo && <Text color="red">Please enter contactNo!</Text>}
                                </FormControl>


                                <FormControl mt={6}>
                                    <FormLabel  >AlterNate Contact No</FormLabel>
                                    <Input type="number" placeholder="alternateNo" {...register("alternateNo", {})} />

                                </FormControl>

                                <FormControl mt={6}>
                                    <FormLabel>Whatsapp No</FormLabel>
                                    <Input type="number" placeholder="whatsappNo" {...register("whatsappNo", { minLength: 10, maxLength: 10 })} />
                                    {errors.whatsappNo && <Text color="red">Please enter whatsappNo!</Text>}
                                    <FormHelperText textAlign="left">Patients will contact over this  whatsapp no. </FormHelperText>
                                </FormControl>


                                <FormControl mt={6}>
                                    <FormLabel>Admin Whatsapp No</FormLabel>
                                    <Input type="number" placeholder="Admin whatsapp no" {...register("adminWhatsappNo", { minLength: 10, maxLength: 10 })} />
                                    {errors.whatsappNo && <Text color="red">Please enter whatsappNo!</Text>}
                                    <FormHelperText textAlign="left">This whatsapp no is used for updating beds.</FormHelperText>
                                </FormControl>


                                <FormControl mt={7}>
                                    <FormLabel> Total Beds with Oxygen</FormLabel>
                                    <Input type="number" placeholder="oxygenBed" {...register("oxygenBed", { required: true, maxLength: 3 })} />
                                    {errors.oxygenBed && <Text color="red">Please enter beds with oxygen!</Text>}
                                </FormControl>

                                <FormControl mt={6}>
                                    <FormLabel >Total Beds without Oxygen</FormLabel>
                                    <Input type="number" placeholder="withoutOxygen" {...register("withoutOxygen", { maxLength: 3 })} />
                                    {errors.withoutOxygen && <Text color="red">Please enter beds without Oxygen!</Text>}
                                </FormControl>


                                <FormControl mt={6}>
                                    <FormLabel  >Total  ICU Beds</FormLabel>
                                    <Input type="number" placeholder="icuBeds" {...register("icuBeds", { maxLength: 3 })} />
                                    {errors.icuBeds && <Text color="red">Please enter  ICU beds!</Text>}
                                </FormControl>

                                <FormControl mt={6}>
                                    <FormLabel> Total ICU + ventolator Beds</FormLabel>
                                    <Input type="number" placeholder="icuVentilatorBeds" {...register("icuVentilatorBeds", { maxLength: 3 })} />
                                    {errors.icuVentilatorBeds && <Text color="red">Please enterICU + ventolator Beds!</Text>}
                                </FormControl>

                                <FormControl mt={6}>
                                    <FormLabel> Google map url</FormLabel>
                                    <Input type="text" placeholder="google map url" {...register("mapUrl", { required: true })} />
                                    {errors.icuVentilatorBeds && <Text color="red">Please enterICU + ventolator Beds!</Text>}
                                </FormControl>

                                <Button type="submit" mt={6} colorScheme="green">submit</Button>
                            </form>
                        </Box>
                    </Center>
                </>
            )}

        </>
    );
}
import React, { useState } from 'react'
import {
    Box, Text, Button, useDisclosure,
    Modal, ModalOverlay, ModalHeader, ModalCloseButton,
    ModalBody, ModalFooter, ModalContent,
    // Editable, EditableInput, EditablePreview,
    Input, Center
    , FormControl, FormLabel, FormHelperText,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form';
import { updateById, deleteHospitalById } from '../firebase/dbOperations'


function AdminHospitalCard({ data }) {
    // console.log("data", data);
    // console.log("data slice", data.data.contactNo);
    const preLoadedValues = {
        hospitalName: data.data.hospitalName,
        vacOxygenBed: data.data.vacOxygenBed,
        vacWithoutOxygenBed: data.data.vacWithoutOxygenBed,
        vacIcubeds: data.data.vacIcubeds,
        vacIcuVentilatorBeds: data.data.vacIcuVentilatorBeds,
        address: data.data.address,
        city: data.data.city,
        pincode: data.data.pincode,
        contactNo: data.data.contactNo.toString().slice(3),
        // contactNo: 1231233132,
        alternateNo: data.data.alternateNo,
        whatsappNo: data.data.whatsappNo.toString().slice(3),
        adminWhatsappNo: data.data.adminWhatsappNo.toString().slice(3),
        oxygenBed: data.data.oxygenBed,
        withoutOxygen: data.data.withoutOxygen,
        icuBeds: data.data.icuBeds,
        icuVentilatorBeds: data.data.icuVentilatorBeds,
        mapUrl: data.data.mapUrl,
    }
    // console.log("sp:", preLoadedValues.adminWhatsappNo)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [deleteData, setDeleteData] = useState(false)
    // const [updateData, setUpdateData] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: preLoadedValues
    });
    const onSubmit = (formData) => {
        console.log("data", data.id)
        formData.whatsappNo = "+91" + formData.whatsappNo
        formData.adminWhatsappNo = "+91" + formData.adminWhatsappNo
        formData.contactNo = "+91" + formData.contactNo
        updateById(data.id, formData).then((result) => {
            console.log("update result", result);
        }).catch((e) => console.log("error:", e))

    };
    console.log(errors);

    const deleteHospital = (id) => {
        deleteHospitalById(id).then((result) =>
            console.log("delete result", result)
        ).catch((e) =>
            console.log("error", e))
    }

    return (
        <>
            <Box width="full" p={3} bg="gray.100" borderRadius="md" my={2} >
                <Box d="flex" flexDirection={['column', 'column', 'row', 'row']} alignItems="center">
                    <Text flexGrow="1" textAlign={["center", "center", "left", "left"]}>
                        {data.data.hospitalName}
                    </Text>
                    <Box mx="12">
                        <Button colorScheme="whatsapp" mx={["", "", "5", "5"]} my={["5", "5", "", ""]}
                            onClick={() => {
                                setDeleteData(false);
                                onOpen()
                            }}>
                            Update Data
                    </Button>
                        <Button colorScheme="red" mx={["", "", "5", "5"]} onClick={() => {
                            setDeleteData(true);
                            onOpen();
                        }}>
                            Delete Hospital
                    </Button>

                    </Box>
                </Box>
                <Modal isOpen={isOpen} onClose={onClose} >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{deleteData ? "Delete hospital" : "Update hospital Data"}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            {deleteData ? (
                                <>
                                    <Text>Are you sure you want to delete <b>{data.data.hospitalName}</b> ?</Text>
                                    <Center mt={6}>
                                        <Button colorScheme="red" onClick={() => {
                                            deleteHospital(data.id)
                                            onClose()
                                        }
                                        }>Delete</Button>
                                    </Center>
                                </>
                            ) : (
                                <Box>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <FormControl >
                                            <FormLabel >Hospital Name</FormLabel>
                                            <Input type="text" placeholder="hospitalName" {...register("hospitalName", { required: true })} />
                                            {errors.hospitalName && <Text color="red">Please enter name!</Text>}
                                        </FormControl>

                                        <FormControl mt={6}>
                                            <FormLabel >Vacant oxygen bed</FormLabel>
                                            <Input type="number" placeholder="vacOxygenBed" {...register("vacOxygenBed", { required: true })} />
                                            {errors.vacOxygenBed && <Text color="red">Please enter vacOxygenBed!</Text>}
                                        </FormControl>
                                        <FormControl mt={6}>
                                            <FormLabel >Vacant bed without Oxygen</FormLabel>
                                            <Input type="number" placeholder="vacWithoutOxygenBed" {...register("vacWithoutOxygenBed", { required: true })} />
                                            {errors.vacWithoutOxygenBed && <Text color="red">Please enter vacWithoutOxygenBed!</Text>}
                                        </FormControl>
                                        <FormControl mt={6}>
                                            <FormLabel >Vacant ICU beds</FormLabel>
                                            <Input type="number" placeholder="vacIcubeds" {...register("vacIcubeds", { required: true })} />
                                            {errors.vacIcubeds && <Text color="red">Please enter vacIcubeds!</Text>}
                                        </FormControl>
                                        <FormControl mt={6}>
                                            <FormLabel >Vacant ICU with ventilator beds</FormLabel>
                                            <Input type="number" placeholder="vacIcuVentilatorBeds" {...register("vacIcuVentilatorBeds", { required: true })} />
                                            {errors.vacIcuVentilatorBeds && <Text color="red">Please enter vacIcuVentilatorBeds!</Text>}
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
                                            {/* {data.data.contactNo} */}
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
                                            {/* {data.data.whatsappNo} */}
                                        </FormControl>


                                        <FormControl mt={6}>
                                            <FormLabel>Admin Whatsapp No</FormLabel>
                                            <Input type="number" placeholder="Admin whatsapp no" {...register("adminWhatsappNo", { minLength: 10, maxLength: 10 })} />
                                            {errors.adminWhatsappNo && <Text color="red">Please enter whatsappNo!</Text>}
                                            <FormHelperText textAlign="left">This whatsapp no is used for updating beds.</FormHelperText>
                                            {/* {data.data.adminWhatsappNo} */}
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
                                            <FormLabel> Total ICU + ventilator Beds</FormLabel>
                                            <Input type="number" placeholder="icuVentilatorBeds" {...register("icuVentilatorBeds", { maxLength: 3 })} />
                                            {errors.icuVentilatorBeds && <Text color="red">Please enterICU + ventolator Beds!</Text>}
                                        </FormControl>

                                        <FormControl mt={6}>
                                            <FormLabel> Google map url</FormLabel>
                                            <Input type="text" placeholder="google map url" {...register("mapUrl", { required: true })} />
                                            {errors.icuVentilatorBeds && <Text color="red">Please enterICU + ventolator Beds!</Text>}
                                        </FormControl>

                                        <Box textAlign="center">
                                            <Button type="submit" mt={6} colorScheme="green" onClick={onClose}>submit</Button>
                                        </Box>

                                    </form>
                                </Box>


                            )}
                        </ModalBody>

                        <ModalFooter>
                            <Button mr={3} onClick={onClose}>
                                Cancel
                            </Button>

                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>

        </>
    )
}

export default AdminHospitalCard

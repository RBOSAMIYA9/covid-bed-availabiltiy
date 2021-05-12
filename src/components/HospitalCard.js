
// import { Badge } from '@chakra-ui/core'
import {
    Box, Text, Button, Badge,
    Accordion,
    AccordionIcon,
    AccordionButton,
    AccordionItem,
    AccordionPanel
} from '@chakra-ui/react'
import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/all'
import { MdUpdate } from 'react-icons/md'
import * as moment from 'moment';



function HospitalCard({ hospitalData }) {
    var messageInEnglish = "Please fill the following details\n\nRequirement:\n\nPatient\nName:\nAge:\nLocation:\nRelative Name:\nRelative Mobile No:\n\nHospital Name:\n\nSPO2:\n(oxygen level)\nD-DIMER:\nCRP:\nCT scan score:\n\nCo morbidities(diabetes,heart prob, kidney prob, major illness, cancer):\n\nPositive date:\n\nOther:\n\n*Please attach all the latest reports*";
    var messageInGuj = "\n\nગુજરાતી\n\nકૃપા કરીને આ વિગતો ભરો\n\nઆવશ્યકતા:\n\nદર્દીનું નામ:\nઉંમર:\nગામ/શહેર:\nસંબંધિ નામ:\nસંબંધિ મોબાઇલ નંબર:\n\nહોસ્પિટલ નામ:\n\nએસપીઓ2 :\n(ઓક્સિજન સ્તર)\nડી-ડિમર:\nસીઆરપી:\nસીટી સ્કેન સ્કોર:\n\nઅન્ય રોગ (ડાયાબિટીસ,હાર્ટપ્રોબલેમ,કિડની પ્રોબલેમ,મોટી બીમારી,કેન્સર,અન્ય):\n\nપોઝિટિવ તારીખ:\n\nઅન્ય:\nકૃપા કરીને તમામ રિપોર્ટ જોડો\n\n\n*This is auto generated message by CoFight*\n\nhttp://cofight.ravindrabosamiya.tech/\n"
    var resEng = encodeURI(messageInEnglish);
    var resGuj = encodeURI(messageInGuj);
    const colorProvider = (occupied, total) => {
        var percentage = ((occupied / total) * 100)
        if (percentage <= 25)
            return "red"
        else if (percentage > 25 && percentage <= 65)
            return "yellow"
        else if (percentage > 65)
            return "green"
    }
    return (
        <>


            <Accordion allowMultiple

                bg="#E6FFFA" borderRadius="lg"
                minHeight="6" width={['90%', '90%', '80%', '80%']}
                // p={5}
                my={1}
                _hover={{
                    shadow: "md"
                }}

            >
                <AccordionItem border="none"

                >
                    <Text color="gray" fontWeight="thin" fontSize="xs" textAlign="right" >
                        <Box d="flex" width="100%" alignItems="center" justifyContent="flex-end">
                            <MdUpdate as="span" /> <i> &nbsp; updated: {Math.round(moment.duration(moment().diff(hospitalData.data.updatedAt.toDate())).as('hours'))} Hours Ago &nbsp;</i>
                        </Box>

                    </Text>
                    <h2>

                        <AccordionButton _focus={{
                            outline: "none"
                        }}
                            textAlign="left"
                            mb="2"
                        >
                            <Box flex="1" textAlign="left">

                                <Box d="flex" alignItems="center" flexDirection={['column', 'column', 'row', 'row']}>
                                    <Box flexGrow="1" textAlign="left">
                                        <Text d="flex" alignItems="center" textAlign="left" >

                                            <AccordionIcon mr={3} />
                                            <Text as="span"> {hospitalData.data.hospitalName}  &nbsp;</Text>
                                            <a target="_blank" rel="noreferrer" href={`https://api.whatsapp.com/send?phone=${hospitalData.data.whatsappNo}&text=${resEng+resGuj}`}>
                                                <IoLogoWhatsapp
                                                    size="25px"
                                                    mx={2} color="green" as="span" />
                                            </a>


                                        </Text>
                                    </Box>
                                    <Box display={['block', 'block', 'none', 'none']} width="full" m={2}>
                                        <hr />
                                    </Box>

                                    <Box d="flex"
                                        flexDirection={['column', 'column', 'row', 'row']}
                                        fontSize="lg"
                                        width={['100%', '100%', 'auto', 'auto']}
                                    >
                                        <Box d="flex" justifyContent="space-evenly" my={2} textAlign="left">
                                            <Text px={["0px", "0px", "20px", "20px"]}>
                                                <Text display={['block', 'block', 'none', 'none']} fontWeight="bold">With oxygen</Text>
                                                <Badge
                                                    bg={colorProvider(hospitalData.data.vacOxygenBed, hospitalData.data.oxygenBed)}

                                                    color="gray.300" fontSize="md">{hospitalData.data.vacOxygenBed}</Badge> /{hospitalData.data.oxygenBed}
                                            </Text>
                                            <Text px={["0px", "0px", "20px", "20px"]}>
                                                <Text display={['block', 'block', 'none', 'none']} fontWeight="bold">Without oxygen</Text>
                                                <Badge bg={colorProvider(hospitalData.data.vacWithoutOxygenBed, hospitalData.data.withoutOxygen)} color="gray.300" fontSize="md">{hospitalData.data.vacWithoutOxygenBed}</Badge> /{hospitalData.data.withoutOxygen}
                                            </Text>
                                        </Box>
                                        <Box d="flex" justifyContent="space-evenly" my={2} textAlign="left">
                                            <Text px={["0px", "0px", "20px", "20px"]}>
                                                <Text display={['block', 'block', 'none', 'none']} fontWeight="bold" >I.C.U</Text>
                                                <Badge bg={colorProvider(hospitalData.data.vacIcubeds, hospitalData.data.icuBeds)} color="gray.300" fontSize="md">{hospitalData.data.vacIcubeds}</Badge> /{hospitalData.data.icuBeds}
                                            </Text>
                                            <Text px={["0px", "0px", "20px", "20px"]}>
                                                <Text display={['block', 'block', 'none', 'none']} fontWeight="bold">ICU + ventilator</Text>
                                                <Badge bg={colorProvider(hospitalData.data.vacIcuVentilatorBeds, hospitalData.data.icuVentilatorBeds)} color="gray.300" fontSize="md">{hospitalData.data.vacIcuVentilatorBeds}</Badge> /{hospitalData.data.icuVentilatorBeds}
                                            </Text>
                                        </Box>

                                    </Box>
                                </Box>

                            </Box>

                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box fontSize="md" color="gray" mt={2} textAlign="left" >
                            <Box>
                                <Text as="span" fontWeight="bold" >Address : </Text>
                                <Text as="span">{hospitalData.data.address}</Text>


                            </Box>
                            <Box>

                                <Text as="span" fontWeight="bold" >Contact No: </Text>
                                <a href={`tel:${hospitalData.data.contactNo}`}>
                                    <Text as="span">{hospitalData.data.contactNo}</Text>
                                </a>
                            </Box>

                            <Box>
                                <a href={hospitalData.data.mapUrl} target="_blank" rel="noreferrer">
                                    <Button mt={3} borderRadius="full" bg="teal.200" color="gray.100">Direction</Button></a>
                                <a href={`tel:${hospitalData.data.contactNo}`}>
                                    <Button mt={3} borderRadius="full" bg="teal.100" color="gray.500" ml="5"

                                    >Call Now</Button></a>
                            </Box>



                        </Box>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            {/* </Box> */}

        </>
    )
}

export default HospitalCard

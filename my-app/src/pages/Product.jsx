import {
  Container,
  Box,
  Image,
  Flex,
  Heading,
  Spacer,
  ButtonGroup,
  Button,
  Center,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  CircularProgress,
  CircularProgressLabel,
  Progress,
  Stack,
} from "@chakra-ui/react";
import Pronav from "../components/productpage/Productnav";
import React, { useState } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import data from "../components/data";
import Calendar from "react-calendar";

function Product() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [daata,setdata]=useState([])
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");
  const [dateState, setDateState] = useState(new Date());
  const [foods,addfods]=useState([])
    

const addtolist=(el)=>{
  addfods([...foods,el])
   let newday={
   "date":dateState,
   "foods":foods
   }
   setdata([...daata,newday])
  console.log(daata)

}




  const changeDate = (e) => {
    setDateState(e);
    console.log(dateState);
  };
  const btnRef = React.useRef(null);
  return (
    <div>
      <Pronav />
      <Container maxW="100%" h="1000px" bg="white">
        <Container maxW="1200px" h="400px" display="flex">
          <Box w="30%" h="300px" color="black" mt="25px" textAlign="center">
            <Calendar
              value={dateState}
              onChange={changeDate}
              
            />
          </Box>

          <Box w="70%" h="300px" mt="25px">
            <Flex color="black">
              <Button onClick={onOpen}>🍎ADD FOOD</Button>
              <Modal
                isOpen={isOpen}
                onClose={onClose}
                scrollBehavior={scrollBehavior}
              >
                <ModalOverlay />
                <ModalContent bg="white" maxW="800px">
                  <ModalHeader color="black">Add Food to Diary</ModalHeader>
                  <ModalCloseButton color="black" />
                  <ModalBody>
                    <TableContainer>
                      <Table size="sm" color="black">
                        <Thead>
                          <Tr>
                            <Th>Description</Th>
                            <Th></Th>
                            <Th isNumeric>Source</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {data.map((el) => (
                            <Tr onClick={()=>addtolist(el)}>
                              <Td>{el.Name}</Td>
                              <Td></Td>
                              <Td isNumeric>⚡NCCDB</Td>
                            </Tr>
                          ))}
                          <Tr>
                            <Td>Coffee, Prepared From Grounds</Td>
                            <Td></Td>
                            <Td isNumeric>⚡NCCDB</Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="red" mr={3} onClick={onClose}>
                      Add
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button>🤸‍♂️ADD EXERCISE</Button>

              <Button>❤️ADD BIOMETRIC</Button>
              <Button>📒ADD NOTE</Button>
            </Flex>
            <Container
              maxW="95%"
              h="350px"
              bg="white"
              color="black"
              boxShadow="xl"
              p="1"
              rounded="md"
              overflow="auto"
            >
              <TableContainer>
                <Table colorScheme="red.300" size="sm">
                  <Thead>
                    <Tr bg="blackAlpha.300">
                      <Th color="blackAlpha.800">Description</Th>
                      <Th color="blackAlpha.800">Amount</Th>
                      <Th isNumeric color="blackAlpha.800">
                        Energu(kcal)
                      </Th>
                      
                    </Tr>
                  </Thead>
                  <Tbody size="sm">
                  {foods.map((el) => (
                            <Tr >
                              <Td>{el.Name}</Td>
                              <Td>1</Td>
                              <Td isNumeric>{el.cal}</Td>
                              
                            </Tr>
                          ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Container>
            <Container
              maxW="95%"
              h="150px"
              bg="white"
              mt="10px"
              boxShadow="xl"
              p="1"
              rounded="md"
            >
              <Flex W="100%" h="150px">
                <Center w="50%" gap="20px" name="Energy Summary" color="black">
                  <Box fontSize="14px">
                    <CircularProgress value={60} color="green.400" size="100px">
                      <CircularProgressLabel color="green.400">
                      <Text>1222</Text>
                        <Text fontSize="12px" fontWeight="bold">kcal</Text>
                      </CircularProgressLabel>
                    </CircularProgress>
                  </Box>
                  <Box>
                    <CircularProgress value={20} color="red.400" size="100px">
                      <CircularProgressLabel color="red.400" >
                        <Text>2262</Text>
                        <Text fontSize="12px" fontWeight="bold">kcal</Text>
                      </CircularProgressLabel>
                    </CircularProgress>
                  </Box>
                  <Box>
                    <Box boxShadow="dark-lg" p="6" rounded="md" bg="#9279bb" textAlign="center">
                     <Text fontSize="14px" color="white" fontWeight="bold">2262</Text>
                     <Text fontSize="8px" fontWeight="bold">Calories Remaining</Text>
                    </Box>
                  </Box>
                </Center>
                <Box w="10%">
                  <Text color="black" fontSize="16px" mt="2px">
                   Energy
                  </Text>
                  <Text color="black" fontSize="16px" mt="2px">
                    Proteins
                  </Text>
                  <Text color="black" fontSize="16px" mt="2px">
                    Net Carbs
                  </Text>
                  <Text color="black" fontSize="16px" mt="2px">
                    Fats
                  </Text>
                  
                </Box>
                <Box w="30%">
                  <Stack spacing={3}>
                    <Box color="black" mt="5px">
                      
                      <Progress bg="grey" size="lg" value={40} colorScheme="red"/>
                    </Box>
                    <Box color="black">
                      
                      <Progress bg="grey" size="lg" value={40} colorScheme="green"/>
                    </Box>
                    <Box color="black">
                     
                      <Progress bg="grey" size="lg" value={40} colorScheme="blue"/>
                    </Box>
                    <Box color="black">
                      
                      <Progress bg="grey" size="lg" value={40} colorScheme="pink"/>
                    </Box>
                    
                  </Stack>
                </Box>
              </Flex>
            </Container>
            <Container
              maxW="95%"
              h="auto"
              bg="red.300"
              mt="10px"
              boxShadow="xl"
              p="1"
              rounded="md"
            >
              <Image src="https://cdn1.cronometer.com/2020/scores/NutritionScores_BannerGoldA.png" />
            </Container>
            <Container
              maxW="95%"
              h="150px"
              bg="white"
              mt="10px"
              boxShadow="xl"
              p="1"
              rounded="md"
            >
            <Flex color="black" fontSize="12px" pl="12px">Highlighted Nutrients</Flex>
             <Center>
             <Box fontSize="14px">
                    <CircularProgress value={40} color="#F6E05E" size="100px">
                      <CircularProgressLabel color="green.400">
                        40%
                      </CircularProgressLabel>
                    </CircularProgress>
                  </Box>
                  <Box fontSize="14px">
                    <CircularProgress value={40} color="#F6E05E" size="100px">
                      <CircularProgressLabel color="green.400">
                        40%
                      </CircularProgressLabel>
                    </CircularProgress>
                  </Box>
                  <Box fontSize="14px">
                    <CircularProgress value={40} color="#F6E05E" size="100px">
                      <CircularProgressLabel color="green.400">
                        40%
                      </CircularProgressLabel>
                    </CircularProgress>
                  </Box>
                  <Box fontSize="14px">
                    <CircularProgress value={40} color="green.400" size="100px">
                      <CircularProgressLabel color="green.400">
                        40%
                      </CircularProgressLabel>
                    </CircularProgress>
                  </Box>
                  <Box fontSize="14px">
                    <CircularProgress value={40} color="#F6E05E" size="100px">
                      <CircularProgressLabel color="green.400">
                        40%
                      </CircularProgressLabel>
                    </CircularProgress>
                  </Box>
                  <Box fontSize="14px">
                    <CircularProgress value={40} color="#F6E05E" size="100px">
                      <CircularProgressLabel color="green.400">
                        40%
                      </CircularProgressLabel>
                    </CircularProgress>
                  </Box>
                  <Box fontSize="14px">
                    <CircularProgress value={40} color="#F6E05E" size="100px">
                      <CircularProgressLabel color="green.400">
                        40%
                      </CircularProgressLabel>
                    </CircularProgress>
                  </Box>
                  





             </Center>







            </Container>
          </Box>
        </Container>
      </Container>
      <Flex bg="#4f4e53" maxW="100%" h="250px" alignItems="spacebetween">
        <Box maxW="400px">
          <Center h="70px" maxW="100%" mt="30px" ml="25px">
            <GridItem w="160px" h="100%">
              <Image
                maxW="80%"
                src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg"
              />
            </GridItem>
            <GridItem w="160px" h="100%">
              <Image
                maxW="80%"
                src="https://cdn1.cronometer.com/2021/landing/android-icon.svg"
              />
            </GridItem>
          </Center>
        </Box>
        <Spacer />
        <Box maxW="400px">
          <Center p="25px">
            <Image
              src="https://cdn1.cronometer.com/2021/landing/cronometer-logo.svg"
              w="250px"
              alt="logo"
            />
          </Center>
        </Box>
      </Flex>
    </div>
  );
}
export default Product;

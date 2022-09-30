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
} from "@chakra-ui/react";
import Pronav from "../components/productpage/Productnav";
import React, { useState } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Product() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpe, onOpe, onClos } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState('inside')
  
  const btnRef = React.useRef(null)
  return (
    <div>
      <Pronav />
      <Container maxW="100%" h="1000px" bg="white">
        <Container maxW="1200px" h="400px" display="flex">
          <Box w="30%" h="300px" color="black" mt="25px" textAlign="center">
            <ReactCalendar
              defaultActiveStartDate={
                new Date(
                  "Tue Mar 10 2020 00:00:00 GMT+0100 (Central European Standard Time)"
                )
              }
            />
          </Box>

          <Box w="70%" h="300px" mt="25px">
            <Flex color="black">
              <Button onClick={onOpen}>🍎ADD FOOD</Button>
              <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={scrollBehavior}>
                <ModalOverlay />
                <ModalContent bg="white" maxW="800px">
                  <ModalHeader color="black">Add Food to Diary</ModalHeader>
                  <ModalCloseButton color="black" />
                  <ModalBody>
                  <TableContainer  >
  <Table size='sm' color="black" >
    <Thead>
      <Tr>
        <Th>Description</Th>
        <Th></Th>
        <Th isNumeric>Source</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Banana, Fresh</Td>
        <Td></Td>
        <Td isNumeric>⚡NCCDB</Td>
      </Tr>
      <Tr>
        <Td>Chicken Breast, Skin Removed Before Cooking</Td>
        <Td></Td>
        <Td isNumeric>⚡NCCDB</Td>
      </Tr>
      <Tr>
        <Td>Olive Oil</Td>
        <Td></Td>
        <Td isNumeric>⚡NCCDB</Td>
      </Tr>
      <Tr>
        <Td>Avocado, Black Skin</Td>
        <Td></Td>
        <Td isNumeric>⚡NCCDB</Td>
      </Tr>
      <Tr>
        <Td>Cucumber, Raw, With Peel</Td>
        <Td></Td>
        <Td isNumeric>⚡NCCDB</Td>
      </Tr>
      <Tr>
        <Td>Apple, Fresh, With Skin</Td>
        <Td></Td>
        <Td isNumeric>⚡NCCDB</Td>
      </Tr>
      <Tr>
        <Td>Tomato Raw, Includes Cherry, Grape, Roma</Td>
        <Td></Td>
        <Td isNumeric>⚡NCCDB</Td>
      </Tr>
      <Tr>
        <Td> Baby Spinach, Raw</Td>
        <Td></Td>
        <Td isNumeric>⚡NCCDB</Td>
      </Tr>
      <Tr>
        <Td>Oatmeal, Regular or Quick Cooking, Dry</Td>
        <Td></Td>
        <Td isNumeric>⚡NCCDB</Td>
      </Tr>
      <Tr>
        <Td>Carrots, Raw</Td>
        <Td></Td>
        <Td isNumeric>⚡NCCDB</Td>
      </Tr>
      <Tr>
        <Td>Tap Water</Td>
        <Td></Td>
        <Td isNumeric>⚡NCCDB</Td>
      </Tr>
      <Tr>
        <Td>Broccoli, Cooked From Fresh</Td>
        <Td></Td>
        <Td isNumeric>⚡NCCDB</Td>
      </Tr>
      <Tr>
        <Td>Chia Seeds</Td>
        <Td></Td>
        <Td isNumeric>⚡NCCDB</Td>
      </Tr>
      <Tr>
        <Td>Strawberries, Fresh</Td>
        <Td></Td>
        <Td isNumeric>⚡NCCDB</Td>
      </Tr>
      <Tr>
        <Td>Walnuts</Td>
        <Td></Td>
        <Td isNumeric>⚡NCCDB</Td>
      </Tr>
      <Tr>
        <Td>Blueberries, Fresh</Td>
        <Td></Td>
        <Td isNumeric>⚡NCCDB</Td>
      </Tr>
      <Tr>
        <Td>Walnuts</Td>
        <Td></Td>
        <Td isNumeric>⚡NCCDB</Td>
      </Tr>
      <Tr>
        <Td>Onion, White, Yellow or Red, Raw</Td>
        <Td></Td>
        <Td isNumeric>⚡NCCDB</Td>
      </Tr>
      <Tr>
        <Td>Sweet Potato, Baked</Td>
        <Td></Td>
        <Td isNumeric>⚡NCCDB</Td>
      </Tr>
      <Tr>
        <Td>Pepper, Sweet, Red, Raw</Td>
        <Td></Td>
        <Td isNumeric>⚡NCCDB</Td>
      </Tr>
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
              <Button >🤸‍♂️ADD EXERCISE</Button>
      
              <Button>❤️ADD BIOMETRIC</Button>
              <Button>📒ADD NOTE</Button>
            </Flex>
           <Container maxW="95%" h="350px" bg="red.300"></Container>
           <Container maxW="95%" h="150px" bg="red.300" mt="10px"></Container>
           <Container maxW="95%" h="150px" bg="red.300" mt="10px"></Container>
           <Container maxW="95%" h="150px" bg="red.300" mt="10px"></Container>

          </Box>
        </Container>
      </Container>
      <Flex bg="#4f4e53" maxW="100%" h="250px" alignItems="spacebetween" >
            
        <Box  maxW="400px" ><Center  h='70px' maxW="100%" mt="30px" ml="25px">
        <GridItem w="160px" h="100%" ><Image maxW="80%" src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg"/></GridItem>
          <GridItem w="160px" h="100%" ><Image  maxW="80%" src="https://cdn1.cronometer.com/2021/landing/android-icon.svg"/></GridItem>
           </Center></Box>
           <Spacer />
       <Box maxW="400px" ><Center p="25px"><Image
            src="https://cdn1.cronometer.com/2021/landing/cronometer-logo.svg"
            w="250px"
            alt="logo"
            
          /></Center></Box>
          
       


        </Flex>
    </div>
  );
}
export default Product;

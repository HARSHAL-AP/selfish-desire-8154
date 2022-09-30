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
import Pronav from "../components/productpage/Productnav";
import React,{useState} from "react";


function Product(){

return (
<div>
    <Pronav/>
    <Container
     maxW="100%"
     h="1000px"
     bg="white"
    
    
    >
    <Container maxW="1200px" h="400px" display="flex">
      <Box w="30%" h="300px" bg="red" mt="25px"></Box> 

      <Box w="70%" h="300px" bg="red.300" mt="25px"></Box>   


    </Container>

    </Container>


</div>  
)


}
export default Product
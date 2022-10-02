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




function Fotter(){


return (
<div>
 <Container maxW="100%" height="600px" bg="#4f4e53" pt="50px"> 
 <Center h="70px" maxW="100%"  gap="20px">
          <GridItem maxW="160px" h="100%">
            <Image
              w="100%"
              src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg"
            />
          </GridItem>
          <GridItem w="160px" h="100%">
            <Image
              w="100%"
              src="https://cdn1.cronometer.com/2021/landing/android-icon.svg"
            />
          </GridItem>
</Center>
 <Box maxW="1200px" h="50px" borderBottom="1px solid white" m="auto">
    
    
</Box>    
 <Flex maxW="1200px" h="350px" m="auto"> 
   <Box w="20%" h="100%" >
   <Image
          src="https://cdn1.cronometer.com/2021/landing/crono-logo-white.svg"
          w="200px"
          alt="logo"
          mt="50px"
        />



   </Box>
   <Box w="25%" h="100%" >
    <Text mt="50px" color="white"  fontSize="22px" fontweight="bold">Cronometer</Text>
    <Text mt="20px" color="white" fontSize="18px">For Individuals</Text>
    <Text mt="20px" color="white" fontSize="18px">For Professionals</Text>
    <Text mt="20px" color="white" fontSize="18px">Privacy</Text>
    <Text mt="20px" color="white" fontSize="18px">Terms</Text>
  
   </Box>
   <Box w="25%" h="100%" >
   <Text mt="50px"  color="white"  fontSize="22px" fontweight="bold">The Company</Text>
    <Text mt="20px" color="white"  fontSize="18px">About Us</Text>
    <Text mt="20px" color="white" fontSize="18px">Crono Blog</Text>
    <Text mt="20px" color="white" fontSize="18px">Crono Forums</Text>
    <Text mt="20px" color="white" fontSize="18px">Jobs</Text>
    <Text mt="20px" color="white" fontSize="18px">Support</Text>
   </Box>

   <Box w="25%" h="100%" >
    <Text mt="50px" color="white" fontSize="22px" fontweight="bold">Partners & Affiliates</Text>
    <Text mt="20px" color="white" fontSize="18px">Affilate Program</Text>
    <Text mt="20px" color="white" fontSize="18px">Media Kit</Text>
    
  
   </Box>


 </Flex>
 <Text textAlign="center" color="white" fontSize="18px">Copyright © 2011-2022</Text>
 <Text textAlign="center" color="white" fontSize="18px">All rights reserved</Text>

 </Container>
 





</div>

)

}


export default Fotter
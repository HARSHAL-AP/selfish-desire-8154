import Navbar from "../components/Navbar.jsx";
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
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar />
      <Container maxW="100%" bg="white" h="550px" centerContent pt="50px">
        <Flex h="550px">
          <Box w="600px" textAlign="left">
            <Text fontSize="50px " as="b" color="blackAlpha.800">
              Eat smarte,
            </Text>
            <br />
            <Text fontSize="50px" as="b" color="blackAlpha.800">
              
              Live better
            </Text>
            <Text color="black" fontSize="30px" >
              Track your calories, exercise,
            </Text>
            <Text color="black" fontSize="30px">
              
              biometrics and health data.
            </Text>
            <Button
              bgColor="tomato"
              fontSize="20px"
              mt="50px"
              w="300px"
              h="50px"
            >
              <Link to="/signup">Sign UP-It's Free!</Link>
            </Button>
            <Text color="black" mt="30px">
              Already have an account?
              <span>
                <Link to="/login">Log in.</Link>
              </span>
            </Text>
          </Box>

          <Box w="50%">
            <Image
              src="https://cdn1.cronometer.com/2021/landing/cronometer-hero-graphic.svg"
              height="500px"
              maxW="600px"
              alt="Dan Abramov"
            />
          </Box>
        </Flex>
      </Container>
      <Container bg="white" maxW="100%" h="400px" textAlign="center" pt="30px" >
        <Text color="blackAlpha.900" fontSize="25px">As Seen On</Text>
        <Center  h="70px" gap={4} mt="30px" >
          <GridItem w="300px" h="100%" ><Image  w="80%" src="https://cdn1.cronometer.com/2021/landing/media-mention-2.svg"/></GridItem>
          <GridItem w="300px" h="100%" ><Image  w="80%" src="https://cdn1.cronometer.com/2021/landing/media-mention-1.svg"/></GridItem>
          <GridItem w="300px" h="100%" ><Image  w="80%" src="https://cdn1.cronometer.com/2021/landing/media-mention-3.svg"/> </GridItem>
          
        </Center>
        <Text color="blackAlpha.900" fontSize="25px" mt="45px">Available on Web, iOS and Android</Text>
        <Center  h='70px' w="100%" mt="30px" gap="20px">
        <GridItem w="160px" h="100%" ><Image  w="100%" src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg"/></GridItem>
          <GridItem w="160px" h="100%" ><Image  w="100%" src="https://cdn1.cronometer.com/2021/landing/android-icon.svg"/></GridItem>
           </Center>
      </Container>
      <Container bg="whiteAlpha.900" maxW="100%" h="500px" textAlign="center" pt="30px">
        
          <Text color="blackAlpha.800" fontSize="30px" as="b">Discover your nutrition</Text>
          
        
        <Text width="500px"
         color="black" textAlign="center" m="auto" fontSize="20px">Cronometer encourages you to not just count your calories but to focus on your nutrition as a whole.</Text>


      </Container>
    </div>
  );
}
export default Home;

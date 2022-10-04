import { Container, Box, Image,Flex,Heading ,Spacer,ButtonGroup,Button} from "@chakra-ui/react";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <Container maxW="100%" bg="white" height="100px" >
      <Container h="60px" m="auto" maxW="75%" display="flex">
        <Image
          src="https://cdn1.cronometer.com/2021/landing/cronometer-logo.svg"
          maxW="20%"
          alt="logo"
        />

<Flex maxW='800px' alignItems='center' gap='2' >
  
  <Spacer />
  <ButtonGroup gap='2' pl="250px">
    <Button color="black" bg="white" maxW="100px"  fontSize={17}><Link to="/product">Product</Link></Button>
    <Button color="black" bg="white" maxW="100px" fontSize={17}><Link >Support</Link></Button>
    <Button color="black" bg="white" maxW="100px" fontSize={17}><Link > Blog</Link></Button>
    <Button color="black" bg="white" maxW="100px" fontSize={17}><Link >Forum</Link></Button>
    <Button color="black" bg="white" maxW="100px" fontSize={17}><Link to="/aboute">Aboute</Link></Button>
    <Button colorScheme='white' boxShadow='dark-lg'  border="1px" borderColor="tomato" color="tomato"><Link to="/login">Login</Link></Button>

  </ButtonGroup>
</Flex>
      </Container>
    </Container>
  );
}
export default Navbar;

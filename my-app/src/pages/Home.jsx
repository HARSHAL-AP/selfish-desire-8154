import Navbar  from "../components/Navbar.jsx";
import { Container, Box, Image,Flex,Heading ,Spacer,ButtonGroup,Button,Center,Text} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Home(){

    return (
        <div>
         <Navbar/>
         <Container maxW="100%" bg="white" h="550px" centerContent pt="50px" >
         <Flex  h="550px" >
         <Box w='600px'  textAlign="left">
           <Text fontSize='50px ' as="b"  color="black">Eat smarte, </Text><br/>
           <Text fontSize='50px' as="b" color="black"> Live better</Text>
           <Text color="black" fontSize='30px'>Track your calories, exercise, </Text>
           <Text color="black" fontSize='30px'> biometrics and health data.</Text>
           <Button bgColor="tomato" fontSize='20px' mt="50px" w="300px" h="50px"><Link to="/signup">Sign UP-It's Free!</Link></Button>
           <Text color="black" mt="30px">Already have an account? <span ><Link to="/login">Log in.</Link></span></Text>
         </Box>
         
         
         <Box w='50%' >
    
           <Image src='https://cdn1.cronometer.com/2021/landing/cronometer-hero-graphic.svg' height="500px" maxW="600px" alt='Dan Abramov' />
          
         </Box>
         

         </Flex>
         </Container>
        <Container bg="red.100" maxW="100%" h="350px">
       
        </Container>

        </div>
        
    )
    
    
    
    }
    export default Home
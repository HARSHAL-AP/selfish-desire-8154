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
    Input,
    Stack,
    Radio,
    Select,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Checkbox,
    CheckboxGroup,Link,List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from "@chakra-ui/react";

function Login(){

return (
    <div>
       <Container maxW="100%" bg="white" pb="50px"  pt="50px">

      
        <Container
          maxW="500px"
          boxShadow="md"
          p="6"
          rounded="md"
          bg="white"
          
        >
            <Center>
          <Image
            src="https://cdn1.cronometer.com/2021/landing/cronometer-logo.svg"
            w="250px"
            alt="logo"
          />
        </Center>
          <Input
            variant="outline"
            maxW="600px"
            placeholder="Email Adress"
            _placeholder={{ color: "grey" }}
            borderColor="black"
            focusBorderColor="black"
            mt="30px"
            
          />
          <Input
            variant="outline"
            maxW="600px"
            placeholder="Password"
            _placeholder={{ color: "grey" }}
            borderColor="black"
            focusBorderColor="black"
            mt="8px"
            
          />
         <Center textAlign="center" border='1px' h="38px" borderColor='blackAlpha.400' rounded='md' mt="8px" bg="blackAlpha.400"><Text color="black">LOGIN</Text></Center>
         <Flex mt="30px"><Text color="black">Not a member?<Link color="red" to="/signup"> Sign Up Now</Link></Text></Flex>

        </Container>

         <Center mt="200px">
         <UnorderedList color="black" display="flex" gap="25px" alignItems="center">
          <ListItem >Blog</ListItem>
         <ListItem>Forums</ListItem>
          <ListItem>Privacy</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Affilates</ListItem>
          <ListItem >Jobs</ListItem>
        </UnorderedList>
         </Center>
        
        
        
         
        <Flex bg="#4f4e53" maxW="100%" h="250px" alignItems="spacebetween" mt="25px">
            
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

       


       </Container>





    </div>
)



}
export default Login
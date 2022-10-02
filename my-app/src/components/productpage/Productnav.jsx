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

function Pronav({logout}){
 




return (

 <div>
 <Flex maxW="100%" bg="white" h="60px" alignItems="center" borderBottom="1px solid grey">
 <Image
          src="https://cdn1.cronometer.com/2021/landing/cronometer-logo.svg"
          w="250px"
          p="3px"
          pl="20px"
          alt="logo"
  />
<Button color="tomato" bg="white" ml="250px" fontSize="18px">Diary</Button>
<Button color="tomato" bg="white" fontSize="18px">Trends</Button>
<Button color="tomato" bg="white" fontSize="18px">Foods</Button>
<Button color="tomato" bg="white" fontSize="18px">Setting</Button>
<Button color="tomato" bg="white" fontSize="18px">Plans</Button>
<Button color="tomato" bg="white" fontSize="18px">Help</Button>
<Button color="red" bg="yellow" fontSize="18px" onClick={logout}>Logout</Button>

 </Flex>
 




 </div>



)




}
export default Pronav
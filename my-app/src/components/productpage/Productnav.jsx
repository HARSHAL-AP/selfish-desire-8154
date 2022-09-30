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


function Pronav(){

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
<Button color="tomato" ml="250px" fontSize="18px">Diary</Button>
<Button color="tomato" fontSize="18px">Trends</Button>
<Button color="tomato" fontSize="18px">Foods</Button>
<Button color="tomato" fontSize="18px">Setting</Button>
<Button color="tomato" fontSize="18px">Plans</Button>
<Button color="tomato" fontSize="18px">Help</Button>


 </Flex>
 




 </div>



)




}
export default Pronav
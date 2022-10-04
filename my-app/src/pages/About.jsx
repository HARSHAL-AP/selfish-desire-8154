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
import Fotter from "../components/Footer.jsx";

function Aboute() {
  return (
    <>
      <Navbar />
      <Container maxW="100%" h="auto" bg="white" pb="100px">
        <Text
          color="tomato"
          textAlign="center"
          pt="50px"
          fontSize="1.5rem"
          fontWeight="bold"
        >
          CRONOMETER
        </Text>
        <Text
          color="blackAlpha.800"
          textAlign="center"
          fontSize="2.5rem"
          fontWeight="bold"
        >
          About the Company
        </Text>
        <Text
          color="black"
          margin="auto"
          width="75%"
          mt="50px"
          fontSize="1.2rem"
        >
          Cronometer is the most accurate, comprehensive nutrition tracking app
          on earth. Unlike other apps on the market, our nutritional data is
          curated from verified, accurate sources. We aim to provide a complete
          solution – no matter what diet you choose to be on.
        </Text>
        <Text
          color="black"
          margin="auto"
          width="75%"
          mt="25px"
          fontSize="1.2rem"
        >
          Our CEO, Aaron Davidson, built Cronometer as a side project in 2005.
          He was following the CRON diet (Calorie Restriction with Optimal
          Nutrition) and being the nutrition nerd/software developer that he is,
          decided to build an app to track his diet. Thus, Cronometer was born.
          It was several years later before he came to the conclusion that maybe
          he was onto something and quit his six-figure corporate job to focus
          on improving Cronometer.
        </Text>
        <Text
          color="black"
          margin="auto"
          width="75%"
          mt="25px"
          fontSize="1.2rem"
        >
          There are now over 5 million users who are happy he did.
        </Text>
        <Text
          color="black"
          margin="auto"
          width="75%"
          mt="25px"
          fontSize="1.2rem"
        >
          Cronometer's success has hinged entirely on positive word-of-mouth
          from its users. The company is still – and plans to continue being – a
          bootstrap startup to this day.
        </Text>
        <Image
          src="https://cdn1.cronometer.com/2021/landing/cronometer-staff-3.jpg"
          width="75%"
          m="auto"
          mt="75px"
        />

        <Text
          color="tomato"
          textAlign="center"
          pt="50px"
          fontSize="1.5rem"
          fontWeight="bold"
        >
          CRONOMETER
        </Text>
        <Text
          color="blackAlpha.800"
          textAlign="center"
          fontSize="2.5rem"
          fontWeight="bold"
        >
          Who We Are
        </Text>

        <Text
          color="black"
          margin="auto"
          width="75%"
          mt="25px"
          fontSize="1.2rem"
        >
          While our staff spans the globe our headquarters is based in the
          small-town of Revelstoke, British Columbia, Canada. Revelstoke is a
          health-centric mountain town brimming with endless options for staying
          active and a growing tech community – the perfect combination to call
          home.
        </Text>
        <Text
          color="black"
          margin="auto"
          width="75%"
          mt="25px"
          fontSize="1.2rem"
        >
          We are an eclectic mix of web developers, designers, nutrition
          scientists, business majors and personal trainers brought together by
          a love of nutrition. While our company has grown our mission and
          values have remained the same; we believe full spectrum nutrition is
          the best way to understand your diet’s effect on your health. We also
          believe in empowering everyone by ensuring they have access to
          accurate and comprehensive data to make informed decisions.
        </Text>
        <Text
          color="black"
          margin="auto"
          width="75%"
          mt="25px"
          fontSize="1.2rem"
        >
          Our goal is to build the best software for people and professionals to
          manage their nutrition. And we have the passion to make that happen;
          amazing data paired with awesome customer support truly are the
          Cronometer difference.
        </Text>
        <Text
          color="black"
          margin="auto"
          width="75%"
          mt="25px"
          fontSize="1.2rem"
        >
         If you have interest in your personal nutrition or working with your client’s nutrition check us out!
        </Text>
        <Text
          color="black"
          margin="auto"
          width="75%"
          mt="25px"
          fontSize="1.2rem"
        >
          Have questions? We would love to hear from you. Email us at: support@cronometer.com
        </Text>
       
        <Box h="100px" maxW="75%" borderBottom="1px solid black" margin="auto" pb="50px">

        </Box>
        <Text
          color="blackAlpha.800"
          margin="auto"
          width="75%"
          mt="75px"
          fontSize="1.5rem" textAlign="center"
        >
          Help us spread the good word about nutrition and become an affiliate.
        </Text>
        <Center height="50px" width="300px"  margin="auto" boxShadow='dark-lg' p='6' rounded='md' bg='white' color="tomato" mt="50px" border="2px solid tomato" fontWeight="bold">
       
          Become An Affiliate
        
        </Center>
      </Container>
      <Fotter/>
    </>
  );
}
export default Aboute;

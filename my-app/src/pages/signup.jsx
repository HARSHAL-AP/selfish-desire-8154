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
  CheckboxGroup,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <Container maxW="100%" h="80px" bg="white" pt="10px">
        <Center>
          <Image
            src="https://cdn1.cronometer.com/2021/landing/cronometer-logo.svg"
            w="250px"
            alt="logo"
          />
        </Center>
      </Container>
      <Container
        maxW="100%"
        h="auto"
        bg="white"
        pt="10px"
        textAlign="center"
        pb="200px"
      >
        <Text color="black" fontSize="3xl" mt="50px" fontWeight="bold">
          Create Your Free Account
        </Text>
        <Container
          maxW="700px"
          boxShadow="md"
          p="6"
          rounded="md"
          bg="white"
          mt="50px"
        >
          <Input
            variant="outline"
            maxW="600px"
            placeholder="Email Adress"
            _placeholder={{ color: "grey" }}
            borderColor="black"
            focusBorderColor="black"
            mt="10px"
            borderRadius="none"
          />
          <Input
            variant="outline"
            maxW="600px"
            placeholder="Password"
            _placeholder={{ color: "grey" }}
            borderColor="black"
            focusBorderColor="black"
            mt="8px"
            borderRadius="none"
          />
          <Input
            variant="outline"
            maxW="600px"
            placeholder="Confirm Password"
            _placeholder={{ color: "grey" }}
            borderColor="black"
            focusBorderColor="black"
            mt="8px"
            borderRadius="none"
          />
        </Container>
        <Container
          maxW="700px"
          boxShadow="md"
          p="6"
          rounded="md"
          bg="white"
          mt="50px"
        >
          <Text color="black" fontWeight="bold">
            Your Body Type
          </Text>
          <Center color="black" gap="20px" alignContent="center" pt="25px">
            <Text color="black">Sex:</Text>
            <Radio colorScheme="red" value="1" borderColor="black">
              Radio
            </Radio>
            <Radio colorScheme="red" value="2" borderColor="black">
              Radio
            </Radio>
          </Center>
          <Center color="black" gap="20px" alignContent="center" pt="20px">
            <Text color="black">Born:</Text>
            <NumberInput
              max={31}
              min={1}
              variant="outline"
              maxW="75px"
              _placeholder={{ color: "grey" }}
              borderColor="black"
              focusBorderColor="black"
            >
              <NumberInputField color="black" />
              <NumberInputStepper color="black">
                <NumberIncrementStepper color="black" />
                <NumberDecrementStepper color="black" />
              </NumberInputStepper>
            </NumberInput>
            <Select
              placeholder="Month"
              size="md"
              maxW="150px"
              borderColor="black"
              color="tomato"
              bg="white"
            >
              <option name="January" value="Jan">
                January
              </option>
              <option name="February" value="Feb">
                February
              </option>
              <option name="March" value="Mar">
                March
              </option>
              <option name="April" value="Apr">
                April
              </option>
              <option name="May" value="May">
                May
              </option>
              <option name="June" value="Jun">
                June
              </option>
              <option name="July" value="Jul">
                July
              </option>
              <option name="August" value="Aug">
                August
              </option>
              <option name="September" value="Sep">
                September
              </option>
              <option name="October" value="Oct">
                October
              </option>
              <option name="November" value="Nov">
                November
              </option>
              <option name="December" value="Dec">
                December
              </option>
            </Select>
            <NumberInput
              max={2100}
              min={1970}
              variant="outline"
              maxW="100px"
              _placeholder={{ color: "grey" }}
              borderColor="black"
              focusBorderColor="black"
            >
              <NumberInputField color="black" />
              <NumberInputStepper color="black">
                <NumberIncrementStepper color="black" />
                <NumberDecrementStepper color="black" />
              </NumberInputStepper>
            </NumberInput>
          </Center>

          <Center color="black" gap="20px" alignContent="center" pt="25px">
            <Text color="black">Height:</Text>
            <Select
              size="md"
              maxW="50px"
              borderColor="black"
              color="tomato"
              bg="white"
            >
              <option name="1" value="1">
                1
              </option>
              <option name="2" value="2">
                2
              </option>
              <option name="3" value="3">
                3
              </option>
              <option name="4" value="4">
                4
              </option>
              <option name="5" value="5">
                5
              </option>
              <option name="6" value="6">
                6
              </option>
              <option name="7" value="7">
                7
              </option>
              <option name="8" value="8">
                8
              </option>
            </Select>
            <Select
              size="md"
              maxW="50px"
              borderColor="black"
              color="tomato"
              bg="white"
            >
              <option name="1" value="1">
                1
              </option>
              <option name="2" value="2">
                2
              </option>
              <option name="3" value="3">
                3
              </option>
              <option name="4" value="4">
                4
              </option>
              <option name="5" value="5">
                5
              </option>
              <option name="6" value="6">
                6
              </option>
              <option name="7" value="7">
                7
              </option>
              <option name="8" value="8">
                8
              </option>
              <option name="9" value="9">
                9
              </option>
              <option name="10" value="10">
                10
              </option>
              <option name="11" value="11">
                11
              </option>
            </Select>
          </Center>
          <Center color="black" gap="20px" alignContent="center" pt="25px">
            <Text color="black">Weight:</Text>
            <Input
              variant="outline"
              maxW="150px"
              _placeholder={{ color: "grey" }}
              borderColor="black"
              focusBorderColor="black"
              mt="8px"
              borderRadius="none"
            />
            <Select
              size="md"
              w="150px"
              borderColor="black"
              color="tomato"
              bg="white"
            >
              <option name="Pounds" value="Pounds">
                Pounds
              </option>
              <option name="Kilogram" value="Pounds">
                Pounds
              </option>
            </Select>
          </Center>
        </Container>

        <Container
          maxW="700px"
          boxShadow="md"
          p="6"
          rounded="md"
          bg="white"
          mt="50px"
        >
          <Text color="black" fontWeight="bold">
            Terms of Service & Privacy Settings
          </Text>
          <Container maxW="600px" textAlign="left">
            <Checkbox color="black" border="black" size='sm'>
              Check All
            </Checkbox> 
            <Text color="black" fontSize="14px">
              By checking the box below you are indicating you have read and
              agree to our <Link color="red">Terms of Service</Link>  and  <Link>Privacy Policy.</Link>
            </Text>
            <Checkbox color="black" border="black" size='sm'>
              I agree to the cronometer.com Terms of Service
            </Checkbox>
            <Text color="black" fontSize="14px">
              In order to give you the best experience using Cronometer, we need
              certain data permissions. (These are optional and can be updated
              in your settings any time.).
            </Text>
            <Checkbox color="black" border="black" size='sm'>
              I agree to receive newsletters and promotional materials.
            </Checkbox>
            <Checkbox color="black" border="black" size='sm'>
              I agree to receive personalized in-app ads.
            </Checkbox>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
export default Signup;

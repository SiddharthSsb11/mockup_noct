import "./App.css";
import {
  Box,
  Text,
  Icon,
  Button,
  Image,
  Circle,
} from "@chakra-ui/react";
import { BsPlayCircle, BsCheck2Circle } from "react-icons/bs";
import { RiNumber6 } from "react-icons/ri";
import {TbNotes} from "react-icons/tb";
import {HiVideoCamera} from "react-icons/hi";
import{FaPen} from "react-icons/fa";

import {
  ChevronRightIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from "@chakra-ui/icons";

import CoverImage from "./assets/illustration-1.png";
import Smiley from "./assets/smiley.png";
import sideImage from "./illustration.png";

function App() {
  return (
    <div className="App">
      <Box
        d="flex"
        flexDir="column"
        alignItems="center"
        gap="1rem"
        p={2}
        height="43.5rem"
        w="45%"
        bg="gray.300"
        borderRadius="sm" /* border="1.5px solid black" */
        boxShadow="5px 5px 5px black"
      >
        <Box className="boxone" width="100%">
          <Box
            d="flex"
            alignItems="center"
            flexDir="column"
            gap="1rem"
            color="white" /* justifyContent="center" */
          >
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontFamily="Open Sans"
              fontWeight="bold"
            >
              {" "}
              Welcome Back, John 👋
            </Text>
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              fontFamily="Open Sans"
              fontWeight="light"
            >
              You've learned <b>30%</b> of your goal this week! <br /> Keep it
              up and improve your progress.
            </Text>
          </Box>
          <Image
            alignSelf="start"
            src={CoverImage}
            alt="cover"
            //objectFit="full"
            height={{ base: "7rem", md: "7.5rem" }}
            width={{ base: "7rem", md: "10rem" }}
          />
        </Box>

        <Box className="boxtwo" width="100%" height="48.5%">
          <Box
            height="100%"
            width="63.5%"
            d="flex"
            flexDir="column"
            alignItems="center"
            p={1}
            justifyContent="space-between"
            gap="1rem"
          >
            <Box className="course" width="100%">
              <Box
                className="play"
                //width="70%"
                //px={2}
              >
                <Circle
                  size="40px"
                  bg="#FF1584"
                  color="#FF1584"
                  fontSize="xl"
                  alignSelf="center"
                >
                  <Icon as={BsPlayCircle} bg="white" borderRadius="50%" />
                </Circle>

                <Box
                  d="flex"
                  flexDir="column"
                  alignItems="start"
                  justifyContent="start"
                  gap="0.2em"
                  fontWeight="bold"
                >
                  <Text fontSize="xs" color="black">
                    {" "}
                    Resume Course{" "}
                  </Text>
                  <Text color="gray.500" fontSize="0.6rem">
                    {" "}
                    You haven't finished your laste quiz{" "}
                  </Text>
                  <Text color="#FF1584" fontSize="0.6rem">
                    {" "}
                    Start Your quiz Now
                  </Text>
                </Box>
              </Box>

              <ChevronRightIcon w={6} h={6} />
            </Box>

            <Box className="leaderboard" width="100%">
              <Box className="overall" width="100%" py={2} px={1} mb>
                <Text fontSize="md" fontWeight="bold">
                  Leaderboard
                </Text>
                <Text fontSize="xs">
                  Overall{" "}
                  <span>
                    {" "}
                    <TriangleDownIcon w={2} h={2} color="blue.500" />
                  </span>
                </Text>
              </Box>

              <Box
                className="rank"
                width="100%"
                pb={6}
                borderBottom="1px solid gray"
              >
                <Box
                  d="flex"
                  alignItems="center"
                  gap="0.25rem"
                  fontWeight="bold"
                >
                  <Text fontSize="xl" color="purple.600" textAlign="center">
                    {" "}
                    5<sup>th</sup>{" "}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    Current Rank{" "}
                  </Text>
                </Box>

                <Image
                  src={Smiley}
                  alt="cover"
                  //objectFit="full"
                  height={{ base: "4rem", md: "4rem" }}
                  width={{ base: "4rem", md: "4rem" }}
                />

                <Box
                  d="flex"
                  alignItems="center"
                  gap="0.25rem"
                  fontWeight="bold"
                >
                  <Text fontSize="lg" color="purple.600" textAlign="center">
                    {" "}
                    54.5
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {" "}
                    Percentile{" "}
                  </Text>
                </Box>
              </Box>

              <Box
                className="position"
                width="100%"
                textAlign="center"
                fontWeight="bold"
                fontSize="lg"
              >
                <Text>
                  {" "}
                  <TriangleUpIcon w={2} h={2} color="green" mb={1} />{" "}
                  <span style={{ color: "green" }}>04</span> People are ahead
                  you
                </Text>
                <Text>
                  {" "}
                  <TriangleDownIcon w={2} h={2} color="red" mb={1} />{" "}
                  <span style={{ color: "red" }}>55</span> People are behind you
                </Text>
              </Box>
            </Box>
          </Box>

          <Box //borderRadius="2xl"
            height="100%"
            width="33.5%"
            d="flex"
            flexDir="column"
            alignItems="center"
            p={1}
            justifyContent="space-between"
            gap="1rem"
          >
            <Box
              bg="white"
              height="40%"
              d="flex"
              alignItems="center"
              flexDirection="column"
              gap="1rem"
              justifyContent="space-between"
              p={2}
              borderRadius="2xl"
              mb={2}
            >
              <Box
                className="overall"
                width="100%"
                //p={2}
                mb={2}
                fontWeight="bold"
              >
                <Text fontSize="md">Backlogs</Text>
                <Text fontSize="xs" color="purple.600">
                  Details
                </Text>
              </Box>

              <Box
                className="backlogs"
                width="100%"
                p={1}
                mt={1}
                fontWeight="bold"
                height="70%"
              >
                <Box
                  d="flex"
                  alignItems="center"
                  gap="0.5rem"
                  bg="gray.100"
                  p={1}
                  borderRadius="lg"
                  height="95%"
                >
                  <Text fontSize="xs" color="gray.600">
                    Lessons
                  </Text>
                  <Text fontSize="xl" color="purple.600" textAlign="center">
                    03
                  </Text>
                </Box>
                <Box
                  d="flex"
                  alignItems="center"
                  gap="0.25rem"
                  bg="gray.100"
                  p={1}
                  borderRadius="lg"
                  height="95%"
                >
                  <Text fontSize="xs" color="gray.600">
                    Weekly
                  </Text>
                  <Text fontSize="xl" color="purple.600" textAlign="center">
                    01
                  </Text>
                </Box>
                <Box
                  d="flex"
                  alignItems="center"
                  gap="0.25rem"
                  bg="gray.100"
                  p={1}
                  borderRadius="lg"
                  height="95%"
                >
                  <Text fontSize="xs" color="gray.600">
                    Monthly
                  </Text>
                  <Icon
                    as={BsCheck2Circle}
                    color="purple.600"
                    textAlign="center"
                    fontSize="2xl"
                    m={1.5}
                  />
                </Box>
              </Box>
            </Box>

            <Box
              className="diagnostic"
              bg="white"
              height="60%"
              borderRadius="2xl"
              border="4px solid purple"
              p={2}
            >
              <Image
                src={sideImage}
                alt="cover"
                //mt={-1}
                objectFit="full"
                height={{ base: "5rem", md: "6rem" }}
                width={{ base: "11rem", md: "11rem" }}
              />

              <Box className="rank" width="80%" px={2} mb={1}>
                <Box
                  d="flex"
                  alignItems="center"
                  color="gray.500"
                  fontSize="xs"
                  fontWeight="bold"
                  mr={2}
                >
                  <Text textAlign="center" mb={-1}>
                    10
                  </Text>
                  <Text>Questions</Text>
                </Box>
                <Box
                  d="flex"
                  alignItems="center"
                  fontSize="xs"
                  color="gray.500"
                  fontWeight="bold"
                >
                  <Text textAlign="center" mb={-1}>
                    15min
                  </Text>
                  <Text>Duration</Text>
                </Box>
              </Box>
              <Button
                size="sm"
                width="100%"
                borderRadius="xl"
                colorScheme="purple"
              >
                {" "}
                Take your Diagnostic{" "}
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          className="boxThree"
          height="28.5%"
          bg="white"
          borderRadius="2xl"
          py={2}
          px={3}
          width="100%"
        >
          <Box
            className="overall"
            width="100%"
            px={1}
            //mb={2}
            fontWeight="bold"
          >
            <Text fontSize="lg">Activities</Text>
            <Text fontSize="xs" color="purple.600">
              See All
            </Text>
          </Box>

          <Box className="boxtwo" width="95%" alignSelf="start">
            <Box
              height="100%"
              width="50%"
              d="flex"
              flexDir="column"
              alignItems="center"
              p={1} mr={1.5}
              justifyContent="space-between"
              gap="1rem"
            >
              <Box className="activities" width="100%" bg="blue.50" mb={2} p={2.5}>
                <Box
                  className="play"
                  //width="70%"
                  //px={2}
                >
                  <Circle
                    size="40px"
                    bg="blue.400"
                    color="white"
                    fontSize="xl"
                    alignSelf="center"
                  >
                    <Icon as={RiNumber6} /* bg="white"  borderRadius="50%" */ />
                  </Circle>

                  <Box
                    d="flex"
                    flexDir="column"
                    alignItems="start"
                    justifyContent="start"
                    gap="0.2em"
                    fontWeight="bold"
                  >
                    <Text fontSize="xs" color="black">
                      {" "}
                      Monthly Test{" "}
                    </Text>
                    <Text color="gray.500" fontSize="0.6rem">
                      6th, July 2021. 20 days left.
                    </Text>
                    <Text fontSize="0.6rem" color="gray.500">
                      Based on 3 topics from math sections.
                    </Text>
                  </Box>
                </Box>

                <ChevronRightIcon w={6} h={6} />
              </Box>

              <Box className="activities" width="100%" bg="green.50" p={2.5}>
                <Box
                  className="play"
                  //width="70%"
                  //px={2}
                >
                  <Circle
                    size="40px"
                    bg="green.400"
                    color="white"
                    fontSize="xl"
                    alignSelf="center"
                  >
                    <Icon as={TbNotes} /* bg="white"  borderRadius="50%" */ />
                  </Circle>

                  <Box
                    d="flex"
                    flexDir="column"
                    alignItems="start"
                    justifyContent="start"
                    gap="0.2em"
                    fontWeight="bold"
                  >
                    <Text fontSize="xs" color="black">
                      Primary Purpose
                    </Text>
                    <Text color="gray.500" fontSize="0.6rem">
                     Writing Section. 30 mins
                    </Text>
                  </Box>
                </Box>

                <ChevronRightIcon w={6} h={6} />
              </Box>
            </Box>

            <Box
              height="100%"
              width="50%"
              d="flex"
              flexDir="column"
              alignItems="center"
              p={1}
              justifyContent="space-between"
              gap="1rem"
            >
              <Box className="activities" width="100%"  bg="#FFF0F7" mb={2} p={2.5}>
                <Box
                  className="play"
                  //width="70%"
                  //px={2}
                >
                  <Circle
                    size="40px"
                    bg="#FF1584"
                    color="white"
                    fontSize="xl"
                    alignSelf="center"
                  >
                    <Icon as={HiVideoCamera} /* bg="white"  borderRadius="50%" */ />
                  </Circle>

                  <Box
                    d="flex"
                    flexDir="column"
                    alignItems="start"
                    justifyContent="start"
                    gap="0.2em"
                    fontWeight="bold"
                  >
                    <Text fontSize="xs" color="black">
                      Why Liberate ? 
                    </Text>
                    <Text color="gray.500" fontSize="0.6rem">
                      6th, July 2022. 1 hr
                    </Text>
                    <Text fontSize="0.6rem" color="#FF1584">
                      Join Webinar
                    </Text>
                  </Box>
                </Box>

                <ChevronRightIcon w={6} h={6} />
              </Box>

              <Box className="activities" width="100%"  bg="orange.50"  p={2.5}>
                <Box
                  className="play"
                  //width="70%"
                  //px={2}
                >
                  <Circle
                    size="40px"
                    bg="orange.400"
                    color="white"
                    fontSize=";lg"
                    alignSelf="center"
                  >
                    <Icon as={FaPen} /* bg="white"  borderRadius="50%" */ />
                  </Circle>

                  <Box
                    d="flex"
                    flexDir="column"
                    alignItems="start"
                    justifyContent="start"
                    gap="0.2em"
                    fontWeight="bold"
                  >
                    <Text fontSize="xs" color="black">
                      Weekly Quiz 1
                    </Text>
                    <Text color="gray.500" fontSize="0.6rem">
                      10 Questions. 25 mins.
                    </Text>
                  </Box>
                </Box>

                <ChevronRightIcon w={6} h={6} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;

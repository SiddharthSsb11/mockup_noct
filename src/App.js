import "./App.css";
import { Box, Text, Icon, Button, Square, Heading, Image } from "@chakra-ui/react";
import CoverImage from "./assets/illustration-1.png";

function App() {
  return (
    <div className="App">
      <Box d="flex" flexDir="column" alignItems="center" gap="1rem" p={2}
        height="42.5rem" w="45%" bg="gray.300" borderRadius="sm" /* border="1.5px solid black" */
        boxShadow="5px 5px 5px black"
      >
        <Box className="boxone" width='100%'>
          <Box d="flex" alignItems="center" flexDir="column" gap="1rem" color="white" justifyContent="center">
            <Text fontSize={{base:"xl", md:"2xl"}} fontFamily="Open Sans" fontWeight='bold'> Welcome Back, John 👋</Text>
            <Text fontSize={{base:"xs", md:"sm"}} fontFamily="Open Sans" >
              You've learned <b>30%</b> of your goal this week! <br/> Keep it up and improve your progress.
            </Text>
          </Box>


          <Image
            alignSelf="start"
            src={CoverImage}
            alt="cover"
            //objectFit="full"
            height={{base:'7rem', md:'7rem'}}
            width={{base:'7rem', md:'10rem'}}
          />
        
        </Box>
        <Box height="48.5%" bg="gray.100" mb={3} borderRadius="2xl" p={1}> B </Box>
        <Box height="28.5%" bg="gray.100" borderRadius="2xl" p={1}> C </Box>
      </Box>
    </div>
  );
}

export default App;

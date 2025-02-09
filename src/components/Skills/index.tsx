import {Box, Flex, Icon, Text, VStack} from "@chakra-ui/react";
import {FaGithub, FaReact} from "react-icons/fa";
import {SkillsIcon} from "../Icon";

export const Skills = () => {
    return (
    <Box w="100vw" minH="100vh" bg="gray.100" px={6} py={10}>
        <Flex
            maxW="1200px"
            mx="auto"
            align="start"
            justify="center"
            direction={{ base: "column", md: "row" }} // Stack on mobile, row on desktop
            gap={{ base: 12, md: 8 }} // Increased spacing for readability
        >
            {/* Technologies Column */}
            <VStack
                align="center"
                justify="center"
                spacing={4}
                w={{ base: "100%", md: "30%" }}
                textAlign="center" // Ensures proper alignment on mobile
            >
                <Text fontSize="3xl" fontFamily="Caveat">
                    Technologies
                </Text>
                <Text><Icon as={FaReact} boxSize={7} cursor="pointer" color="#71defb" _hover={{ color: "highlight.100" }} />React & React Native</Text>
                <Text><SkillsIcon src="icons/chakra.png"/>Chakra UI & Tailwind CSS</Text>
                <Text>Node and Express</Text>
                <Text>Typescript & ES6</Text>
                <Text>Github & Gitlab</Text>
                <Text>Pixel Perfect Design</Text>
                <Text>Jest and Cypress</Text>
            </VStack>

            {/* Workflow Column */}
            <VStack
                align="center"
                justify="center"
                spacing={4}
                w={{ base: "100%", md: "30%" }}
                textAlign="center"
            >
                <Text fontSize="3xl" fontFamily="Caveat">
                    Workflow and Leadership
                </Text>
                <Text>Mentoring and Code Review</Text>
                <Text>Agile methodology & SCRUM</Text>
                <Text>Collaboration and Communication</Text>
                <Text>Documentation and Design</Text>
                <Text>Jira and Ticketing</Text>
            </VStack>

            {/* The Good Stuff Column */}
            <VStack
                align="center"
                justify="center"
                spacing={4}
                w={{ base: "100%", md: "30%" }}
                textAlign="center"
            >
                <Text fontSize="3xl" fontFamily="Caveat">
                    The Good Stuff
                </Text>
                <Text>Terrible at Golf</Text>
                <Text>Beats the S&P 500 every year</Text>
                <Text>Avid Gym Goer</Text>
                <Text>Secretly Enjoys Leet Coding ^_^</Text>
            </VStack>
        </Flex>
    </Box>
    );
};

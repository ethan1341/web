import { Box, Flex, Icon, Text, VStack } from "@chakra-ui/react";
import {
    FaGithub, FaReact, FaAutoprefixer, FaGraduationCap, FaJira,
    FaHandshake, FaPencilAlt, FaGolfBall, FaChartLine, FaDumbbell,
    FaCode, FaGamepad, FaDiscord, FaTasks, FaBolt
} from "react-icons/fa";
import { SkillsIcon } from "../Icon";

export const Skills = () => {
    return (
        <Box 
            data-testid="skills-container"
            w="100vw" 
            minH="40vh" 
            bg="gray.100" 
            px={6} 
            py={10}
        >
            <Flex
                maxW="1200px"
                mx="auto"
                align="start"
                justify="center"
                direction={{ base: "column", md: "row" }} // Stack on mobile, row on desktop
                gap={{ base: 12, md: 8 }} // Increased spacing for readability
            >
                {/* Technologies Column */}
                <VStack align="start" justify="center" spacing={4} w={{ base: "100%", md: "30%" }}>
                    <Text fontSize="3xl" fontFamily="Caveat">
                        Technologies
                    </Text>

                    <Flex align="center" gap={2}>
                        <Icon as={FaReact} boxSize={7} color="#61DAFB" _hover={{ color: "highlight.100" }} />
                        <Text>React & React Native</Text>
                    </Flex>

                    <Flex align="center" gap={2}>
                        <SkillsIcon src="icons/chakra.png" />
                        <Text>Chakra UI & Tailwind CSS</Text>
                    </Flex>

                    <Flex align="center" gap={2}>
                        <SkillsIcon src="icons/node.png" />
                        <Text>Node and Express</Text>
                    </Flex>

                    <Flex align="center" gap={2}>
                        <SkillsIcon src="icons/typescript.png" />
                        <Text>Typescript & ES6</Text>
                    </Flex>

                    <Flex align="center" gap={2}>
                        <Icon as={FaGithub} boxSize={7} color="black" _hover={{ color: "highlight.100" }} />
                        <Text>Github & Gitlab</Text>
                    </Flex>

                    <Flex align="center" gap={2}>
                        <Icon as={FaAutoprefixer} boxSize={7} color="#71defb" _hover={{ color: "highlight.100" }} />
                        <Text>Jest and Cypress</Text>
                    </Flex>
                </VStack>

                {/* Workflow and Leadership Column */}
                <VStack align="start" justify="center" spacing={4} w={{ base: "100%", md: "30%" }}>
                    <Text fontSize="3xl" fontFamily="Caveat">
                        Workflow and Leadership
                    </Text>

                    <Flex align="center" gap={2}>
                        <Icon as={FaGraduationCap} boxSize={7} color="teal.600" _hover={{ color: "highlight.100" }} />
                        <Text>Mentoring and Code Review</Text>
                    </Flex>

                    <Flex align="center" gap={2}>
                        <Icon as={FaHandshake} boxSize={7} color="orange.600" _hover={{ color: "highlight.100" }} />
                        <Text>Collaboration and Communication</Text>
                    </Flex>

                    <Flex align="center" gap={2}>
                        <Icon as={FaPencilAlt} boxSize={7} color="blue.500" _hover={{ color: "highlight.100" }} />
                        <Text>Documentation and Design</Text>
                    </Flex>

                    <Flex align="center" gap={2}>
                        <Icon as={FaJira} boxSize={7} color="#0052CC" _hover={{ color: "highlight.100" }} />
                        <Text>Jira and Ticketing</Text>
                    </Flex>

                    <Flex align="center" gap={2}>
                        <Icon as={FaTasks} boxSize={7} color="purple.500" _hover={{ color: "highlight.100" }} />
                        <Text>Agile & Scrum Methodologies</Text>
                    </Flex>

                    <Flex align="center" gap={2}>
                        <Icon as={FaBolt} boxSize={7} color="yellow.500" _hover={{ color: "highlight.100" }} />
                        <Text>Performance Optimization</Text>
                    </Flex>
                </VStack>

                {/* Interests Column */}
                <VStack align="start" justify="center" spacing={4} w={{ base: "100%", md: "30%" }}>
                    <Text fontSize="3xl" fontFamily="Caveat">
                        Interests
                    </Text>

                    <Flex align="center" gap={2}>
                        <Icon as={FaGolfBall} boxSize={7} color="green.500" _hover={{ color: "highlight.100" }} />
                        <Text>Terrible at Golf</Text>
                    </Flex>

                    <Flex align="center" gap={2}>
                        <Icon as={FaChartLine} boxSize={7} color="blue.500" _hover={{ color: "highlight.100" }} />
                        <Text>Beats the S&P 500 every year</Text>
                    </Flex>

                    <Flex align="center" gap={2}>
                        <Icon as={FaDumbbell} boxSize={7} color="red.500" _hover={{ color: "highlight.100" }} />
                        <Text>Avid Gym Goer</Text>
                    </Flex>

                    <Flex align="center" gap={2}>
                        <Icon as={FaCode} boxSize={7} color="purple.500" _hover={{ color: "highlight.100" }} />
                        <Text>Secretly Enjoys Leet Coding ^_^</Text>
                    </Flex>

                    <Flex align="center" gap={2}>
                        <Icon as={FaGamepad} boxSize={7} color="cyan.500" _hover={{ color: "highlight.100" }} />
                        <Text>League of Legends</Text>
                    </Flex>

                    <Flex align="center" gap={2}>
                        <Icon as={FaDiscord} boxSize={7} color="blue.600" _hover={{ color: "highlight.100" }} />
                        <Text>Discord Community Engagement</Text>
                    </Flex>
                </VStack>
            </Flex>
        </Box>
    );
};

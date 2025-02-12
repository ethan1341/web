import { Box, Flex, Heading, Text, Divider, VStack, HStack, Icon, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionListItem = motion.li;

const Resume = () => {
    return (
        <Box w="100vw" minH="100vh" bg="gray.50" px={6} py={10}>
        <MotionBox maxW="800px" mx="auto" p={6} bg="gray.50" boxShadow="md" borderRadius="md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            {/* Header */}
            <Flex direction="column" align="center" textAlign="center">
                <MotionText as={Heading} size="xl" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>Ethan Pidcock</MotionText>
                <MotionText fontSize="lg" color="gray.600" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>Frontend Engineer | React Specialist</MotionText>
            </Flex>

            <Divider my={4} />

            {/* Contact Info */}
            <Flex justify="center" gap={6} wrap="wrap">
                <HStack>
                    <Icon as={FaEnvelope} />
                    <Link href="mailto:ethan.pidcock@gmail.com">ethan.pidcock@gmail.com</Link>
                </HStack>
                <HStack>
                    <Icon as={FaPhone} />
                    <Text>570-540-6593</Text>
                </HStack>
                <HStack>
                    <Icon as={FaGithub} />
                    <Link href="https://github.com/ethan1341" isExternal>github.com/ethan1341</Link>
                </HStack>
            </Flex>

            <Divider my={4} />

            {/* Experience Section */}
            <VStack align="start" spacing={4} position="relative" _before={{ content: '""', position: "absolute", top: 0, left: "16px", width: "2px", height: "100%", bg: "gray.300" }}>
                <Heading size="md">Experience</Heading>

                {[
                    {
                        title: "Frontend Engineer - Comcast, Philadelphia",
                        date: "July 2024 - Present",
                        tasks: [
                            "Developed and implemented features such as Dolby game mode to enhance television functionality ensuring seamless usability for millions of Xumo TV users.",
                            "Contributed to LUI, Comcast's third-party library of reusable Lightning components, ensuring a consistent look and feel across the entire application suite.",
                            "Wrote comprehensive Jest tests covering approximately 70% of Xumo TV's functionality, ensuring test coverage and accounting for all possible user inputs to enhance application reliability."
                        ]
                    },
                    {
                        title: "Senior Engineer - Boeing, Philadelphia",
                        date: "August 2017 - January 2024",
                        tasks: [
                            "Improved application performance by implementing CDNs and minifying code, reducing DCL (DOMContentLoaded) times by up to 200%.",
                            "Established a standardized React component library using Chakra UI, enhancing code maintainability and efficiency across multiple applications and teams.",
                            "Developed intuitive visualizations for complex aircraft data, improving military operations with real-time aircraft health monitoring.",
                            "Optimized data management using pagination and lazy loading, eliminating performance bottlenecks caused by inefficient state updates.",
                            "Led project management efforts, including stakeholder meetings, backlog grooming, and sprint execution."
                        ]
                    },
                    {
                        title: "Frontend Developer - Moblty, Livingston",
                        date: "June 2015 - June 2017",
                        tasks: [
                            "Developed single-page web applications (SPAs) for in-store displays, enhancing customer engagement and brand visibility.",
                            "Built interactive solutions tailored to major brands, including Disney, the PGA Tour, and L’Oréal, increasing customer engagement up to 125%.",
                            "Fostered direct client engagements to develop custom applications, ensuring client satisfaction and resource savings."
                        ]
                    }
                ].map((job, index) => (
                    <MotionBox
                        key={index}
                        position="relative"
                        pl={8}
                        _before={{
                            content: '""',
                            position: "absolute",
                            left: "12px",
                            top: "8px",
                            width: "10px",
                            height: "10px",
                            bg: "gray.600",
                            borderRadius: "50%"
                        }}
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <Text fontWeight="bold">{job.title}</Text>
                        <Text fontSize="sm" color="gray.600">{job.date}</Text>
                        <ul>
                            {job.tasks.map((task, i) => (
                                <MotionListItem
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.2 }}
                                >
                                    {task}
                                </MotionListItem>
                            ))}
                        </ul>
                    </MotionBox>
                ))}
            </VStack>

            <Divider my={4} />

            {/* Education Section */}
            <VStack align="start">
                <Heading size="md">Education</Heading>
                <Text>Wilkes University, Wilkes-Barre - Bachelor of Arts</Text>
            </VStack>
        </MotionBox>
        </Box>
    );
};

export default Resume;

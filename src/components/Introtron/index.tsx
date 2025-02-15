import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Introtron = () => {
    const text = "I am probably grinding Leetcode, please distract me d(^.^)z ";
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, 75); // Typing speed

            return () => clearTimeout(timeout);
        }
    }, [index, text]);

    return (
        <Box
            w="100vw"
            minH="100vh"
            bg="whites.alabaster"
            px={{ base: 4, md: 6 }}
            py={{ base: 8, md: 10 }}
            display="flex"
            flexDirection="column"
        >
            {/* Main Flex Wrapper (Ensures Story Stays at Bottom) */}
            <Flex
                flex="1"
                direction="column"
                justify="center"
                align="center"
                maxW="1200px"
                mx="auto"
                w="100%"
            >
                {/* Hero Section - Text + Image */}
                <Flex
                    align="center"
                    justify="space-between" // Adds spacing between text & image
                    direction={{ base: "column-reverse", md: "row" }}
                    gap={{ base: 12, md: 24 }} // Controls spacing
                    textAlign={{ base: "center", md: "left" }}
                    w="100%"
                >
                    {/* Left Side - Text */}
                    <Box flex="1" mr={{ md: 8 }}> {/* Added margin for extra spacing */}
                        <Text fontSize={{ base: "5xl", md: "7xl" }} fontFamily="Caveat">
                            Hello There!
                        </Text>
                        <Box>
                            <Text fontSize={{ base: "3xl", md: "3xl" }} display="inline">
                                My Name is{" "}
                            </Text>
                            <Text fontSize={{ base: "3xl", md: "3xl" }} display="inline" color="accent.200">
                                Ethan
                            </Text>
                        </Box>
                        <Text fontSize={{ base: "3xl", md: "3xl" }} fontWeight="bold">
                            I am{" "}
                            <Text fontSize={{ base: "3xl", md: "3xl" }} style={{ color: "var(--chakra-colors-highlight-200)" }} display="inline">
                                Frontend Developer
                            </Text>
                        </Text>
                        <Text fontSize={{ base: "md", md: "xl" }} opacity="0.8">
                            {displayedText}
                        </Text>
                    </Box>

                    {/* Right Side - Image */}
                    <Box flex="1" display="flex" justifyContent="center">
                        <Image
                            src="/avatar1.png"
                            alt="Hero Avatar1"
                            borderRadius="full"
                            boxSize={{ base: "200px", md: "300px" }}
                            objectFit="cover"
                            shadow="lg"
                            bg="highlight.200"
                            maxH="300px"
                        />
                    </Box>
                </Flex>
            </Flex>

            {/* "The Story" Section - Floated to Bottom */}
            <Box
                maxW="1200px"
                mx="auto"
                textAlign={{ base: "center", md: "left" }}
                mt="auto" // Push to bottom
                pb="10"
                mb="10"
            >
                <Text fontSize={{ base: "4xl", md: "5xl" }} fontFamily="Caveat" color="grey.charcoal" mb={4}>
                    The Story:
                </Text>
                <Text fontSize={{ base: "lg", md: "xl" }} color="grey.charcoal" lineHeight="1.8">
                    I'm a Frontend Developer specializing in React and modern tooling, with experience building high-performance UIs and working with large datasets. At Boeing, I optimized data management and visualization for complex datasets. At Comcast, I develop fast, efficient UIs for Xumo TV, ensuring a seamless experience for millions of users. Outside of work, I enjoy golfing and staying active.
                </Text>
            </Box>
        </Box>
    );
};

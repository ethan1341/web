import { Box, Flex, Text, Image} from "@chakra-ui/react";
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
        <>
            {/* Hero Section */}
            <Box
                w="100vw"
                minH="100vh"
                bg="whites.alabaster"
                px={{ base: 4, md: 6 }}
                py={{ base: 8, md: 10 }}
                pb="12" // Prevent overlap
            >
                <Flex
                    maxW="1200px"
                    mx="auto"
                    align="center"
                    justify="center"
                    mt={{base:2, md:8}}
                    mb={{base:0, md:40}}
                    direction={{ base: "column-reverse", md: "row" }} // Stack on mobile, row on desktop
                    gap={{ base: 8, md: 18 }} // Adds spacing between elements
                    textAlign={{ base: "center", md: "left" }} // Center text on mobile
                >
                    {/* Left Side - Text */}
                    <Box flex="1">
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
                            src="./avatar1.png"
                            alt="Hero Avatar1"
                            borderRadius="full"
                            boxSize={{ base: "200px", md: "300px" }} // Smaller on mobile
                            objectFit="cover"
                            shadow="lg"
                            bg="highlight.200"
                            maxH="300px"
                        />
                    </Box>
                </Flex>

                {/* Below Content - "The Story" */}
                <Box mt={{ base: 12, md: 40 }} textAlign={{ base: "center", md: "left" }} maxW="1200px" mx="auto">
                    <Text fontSize={{ base: "4xl", md: "5xl" }} fontFamily="Caveat" color="grey.charcoal" mb={4}>
                        The Story:
                    </Text>
                    <Text fontSize={{ base: "lg", md: "xl" }} color="grey.charcoal" lineHeight="1.8">
                        I'm a Frontend Developer specializing in React and modern tooling, with experience building high-performance UIs and working with large datasets. At Boeing, I optimized data management and visualization for complex datasets. At Comcast, I develop fast, efficient UIs for Xumo TV, ensuring a seamless experience for millions of users.  Outside of work, I enjoy golfing and staying active.
                    </Text>

                </Box>
            </Box>


        </>
    );
};

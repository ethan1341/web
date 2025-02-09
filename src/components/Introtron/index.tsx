import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Introtron = () => {
    const text = "I am probably grinding Leetcode, please send help :(";
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, 75); // Typing speed (100ms per character)

            return () => clearTimeout(timeout);
        }
    }, [index, text]);

    return (
        <Box w="100vw" h="calc(100vh - 105px)" bg="whites.alabaster" px={6} py={10}>
            <Flex
                h="60%"
                maxW="1200px"
                mx="auto"
                align="center"
                justify="space-between"
                direction={{ base: "column", md: "row" }} // Column for mobile, row for desktop
            >
                {/* Left Side - Text */}
                <Box flex="1" textAlign={{ base: "center", md: "left" }}>
                    <Text fontSize="7xl" pr="5" fontFamily="Caveat" display="inline">
                        Hello There!
                    </Text>
                    <br />
                    <Text fontSize="5xl" display="inline">My Name is </Text>
                    <Text fontSize="5xl" display="inline" color="accent.200" whiteSpace="nowrap">
                        Ethan
                    </Text>
                    <br />
                    <Text fontSize="5xl" display="inline">
                        I am{" "}
                        <span style={{ color: "var(--chakra-colors-highlight-200)", fontWeight: "bold" }}>
                            Frontend Developer
                        </span>
                    </Text>
                    <br />
                    <Text fontSize="xl" pl="1" opacity="0.8" textAlign="start">
                        {displayedText}
                    </Text>
                </Box>

                {/* Right Side - Image */}
                <Box flex="1" display="flex" justifyContent="center">
                    <Image
                        src="/headshot.png" // Replace with your image path
                        alt="Hero Avatar"
                        borderRadius="full"
                        boxSize="300px" // Adjust size as needed
                        objectFit="cover"
                        shadow="lg"
                        bg="highlight.200"
                        maxH="300px" // Prevents the image from being too tall
                        aspectRatio={1 / 1} // Ensures the image is always square
                    />
                </Box>
            </Flex>

            {/* Below Content - "The Story" */}
            <Box mt={6} textAlign="left" maxW="1200px" mx="auto">
                <Text fontSize="5xl" fontFamily="Caveat" color="grey.charcoal" mb={4}>
                    The Story:
                </Text>
                <Text fontSize="xl" color="grey.charcoal" lineHeight="1.8">
                    I have been working professionally as a developer for 10 years—time really flies! My journey began with Backbone.js, transitioned to Angular, and now I specialize in React. I am deeply passionate about optimization, whether it's enhancing performance through building CDNs or improving tooling for developers.
                </Text><br/>
                <Text fontSize="xl" color="grey.charcoal" lineHeight="1.8">
                    If you'd like to learn more, feel free to check out my resume!
                </Text>
            </Box>
        </Box>
    );
};

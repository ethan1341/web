import {Box, Button, Heading, Text, Image} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import viteLogo from '/vite.svg'

export const Introtron = ()=>{
    const text = "Nice to meet you I am";
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, 100); // Typing speed (100ms per character)

            return () => clearTimeout(timeout);
        }
    }, [index, text]);

    return (
        <Box
            w="100vw"
            h="calc(100vh - 105px)"
            bg="whites.alabaster"
            color="text.500"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            px={6}
        >
            <Heading fontSize="5xl" mb={4} color="grey.charcoal">
                My Name is <Text color='accent.200'>Ethan</Text>
            </Heading>
            <Text fontSize="xl" maxW="600px" opacity="0.8">
                <Image
                    src="/headshot.png" // Replace with your image path
                    alt="Hero Avatar"
                    borderRadius="full"
                    boxSize="300px" // Adjust size as needed
                    objectFit="cover"
                    shadow="lg"
                    bg="highlight.200"
                />
            </Text>
            <Button mt={6} size="lg" bg="brightRed.500" color="white" _hover={{ bg: "brightRed.600" }}>
                Get Started
            </Button>
        </Box>
    );
}
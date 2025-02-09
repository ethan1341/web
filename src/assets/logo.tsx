import {Text, useBreakpointValue} from "@chakra-ui/react";

const EPLogo = () => {
    return (
        <>
            <style>
                {`@import url('https://fonts.googleapis.com/css2?family=Swanky+and+Moo+Moo&display=swap');`}
            </style>
            <Text cursor="pointer" _hover={{ color: "highlight.100" }} textAlign={useBreakpointValue({ base: 'center', md: 'left' })} x="10" y="70" fontFamily="'Swanky and Moo Moo', cursive" fontSize="4xl" fill="black">
                EP
            </Text>
       </>
    );
};

export default EPLogo;

import { Image } from "@chakra-ui/react";
import React from "react";

// Define the prop types
interface IconProps {
    src: string; // URL of the image
    alt?: string; // Optional alt text
    size?: number | string; // Optional size for flexibility
}

export const SkillsIcon: React.FC<IconProps> = ({ src, alt = "icon", size = 7 }) => {
    return (
        <Image
            src={src}
            alt={alt}
            boxSize={size}
            cursor="pointer"
            _hover={{ opacity: 0.8 }}
        />
    );
};


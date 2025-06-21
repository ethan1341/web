'use client'

import {
    Box,
    Flex,
    Text,
    Stack,
    Collapse,
    Icon,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure, Link,
} from '@chakra-ui/react'
import { FaGithub, FaYoutube, FaLinkedin, FaBlog } from "react-icons/fa";
import {
    ChevronDownIcon,
    EmailIcon
} from '@chakra-ui/icons'
import EPLogo from "../../assets/logo.tsx";

export const Navbar = ()=> {
    const {isOpen} = useDisclosure()

    // Updated function to make blog appear as a new screen but keep navbar visible
    const scrollToBlog = () => {
        const blogElement = document.getElementById('blog-section');
        if (blogElement) {
            // Hide main content except navbar
            const mainContent = document.getElementById('main-content');
            if (mainContent) {
                mainContent.style.display = 'none';
            }
            
            // Make sure blog is visible and scroll to top
            blogElement.style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Update document title
            document.title = 'Ethan Pidcock - Blog';
        }
    };

    return (
        <Box>
            <Flex
                bg="linear-gradient(135deg, #0d1b2a 50%, #1b263b 75%, #162a45 100%)"
                w="full"
                boxShadow="md"  // Adds a soft shadow
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 25 }}
                px={{ base: 50}}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'flex' }}>
                    <EPLogo></EPLogo>
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        color={useColorModeValue('text.500', 'white')}>
                    </Text>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <Link href="#" onClick={scrollToBlog}>
                        <Icon as={FaBlog} boxSize={7} cursor="pointer" _hover={{ color: "highlight.100" }} />
                    </Link>
                    <Link href="https://github.com/ethan1341" isExternal>
                        <Icon as={FaGithub} boxSize={7} cursor="pointer" _hover={{ color: "highlight.100" }} />
                    </Link>
                    <Link href="https://www.youtube.com/@undefinedisnotafunction">
                    <Icon as={FaYoutube} boxSize={7} cursor="pointer" _hover={{ color: "highlight.100" }} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/ethan-pidcock-bb9743a0/">
                    <Icon as={FaLinkedin} boxSize={7} cursor="pointer" _hover={{ color: "highlight.100" }}/>
                    </Link>
                    <Link href="mailto:ethan.pidcock@gmail.com" className="text-blue-500 hover:underline"><EmailIcon
                        cursor="pointer" _hover={{color: "highlight.100"}} boxSize={7}/></Link>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    )
}

const MobileNav = () => {
    return (
        <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Box
                py={2}
                as="a"
                href={href ?? '#'}
                justifyContent="space-between"
                alignItems="center"
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Box>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Box as="a" key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Box>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    )
}

interface NavItem {
    label: string
    subLabel?: string
    children?: Array<NavItem>
    href?: string
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Inspiration',
        children: [
            {
                label: 'Explore Design Work',
                subLabel: 'Trending Design to inspire you',
                href: '#',
            },
            {
                label: 'New & Noteworthy',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
        ],
    },
    {
        label: 'Find Work',
        children: [
            {
                label: 'Job Board',
                subLabel: 'Find your dream design job',
                href: '#',
            },
            {
                label: 'Freelance Projects',
                subLabel: 'An exclusive list for contract work',
                href: '#',
            },
        ],
    },
    {
        label: 'Learn Design',
        href: '#',
    },
    {
        label: 'Hire Designers',
        href: '#',
    },
]
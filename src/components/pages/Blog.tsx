import { useState, useEffect } from 'react';
import { Box, Container, Heading, Text, VStack, Divider, Button, Flex, Badge } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import { ArrowBackIcon } from '@chakra-ui/icons';

type BlogPost = {
  content: string;
  data: {
    title: string;
    date: string;
    description: string;
    [key: string]: any;
  };
};

// Hardcoded blog posts data to avoid loading issues
const BLOG_POSTS: BlogPost[] = [
  {
    content: `# Hello World!

Welcome to my new blog built with React, Chakra UI, and react-markdown!

## What I'm Using

- **react-markdown**: For rendering markdown content
- **gray-matter**: For parsing frontmatter metadata
- **Chakra UI**: For beautiful, accessible components`,
    data: {
      title: "Hello World",
      date: "2023-06-15",
      description: "My first blog post using react-markdown and gray-matter"
    }
  },
  {
    content: `# Understanding React Hooks

React Hooks have revolutionized how we write React components since their introduction in React 16.8. They allow you to use state and other React features without writing a class component.

## Why Hooks?

Before Hooks, React developers faced several challenges:

- **Reusing stateful logic** was difficult between components
- **Complex components** became hard to understand
- **Classes** confused both people and machines`,
    data: {
      title: "Understanding React Hooks",
      date: "2023-10-20",
      description: "A comprehensive guide to React's most powerful feature",
      tags: "react, hooks, javascript, frontend"
    }
  },
  {
    content: `# Mastering CSS Grid Layout

CSS Grid Layout is a two-dimensional layout system designed for the web. It lets you organize content into rows and columns and has many features that make building complex layouts straightforward.

## Why Use CSS Grid?

CSS Grid offers several advantages over older layout methods:

- **Two-dimensional control** - arrange items in rows AND columns simultaneously
- **No need for frameworks** - native browser support means no extra dependencies`,
    data: {
      title: "Mastering CSS Grid Layout",
      date: "2023-11-15",
      description: "Build modern responsive layouts with CSS Grid",
      tags: "css, layout, web design, frontend"
    }
  },
  {
    content: `# 5 TypeScript Tips to Level Up Your Code

TypeScript has become the language of choice for many developers building complex web applications. Here are five tips to help you get more out of TypeScript.

## 1. Use Discriminated Unions

Discriminated unions are a powerful pattern that combines type checking with runtime checks`,
    data: {
      title: "5 TypeScript Tips to Level Up Your Code",
      date: "2023-12-05",
      description: "Essential TypeScript features that make your code more robust",
      tags: "typescript, javascript, development, web"
    }
  }
];

export const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    // Use the hardcoded blog post data instead of attempting to load from files
    console.log("Using hardcoded blog posts");
    
    // Sort posts by date (newest first)
    const sortedPosts = [...BLOG_POSTS].sort((a, b) => {
      return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
    });
    
    console.log("Sorted posts:", sortedPosts);
    setPosts(sortedPosts);
    setLoading(false);
  }, []);

  const returnHome = () => {
    // Show main content
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.style.display = 'block';
    }
    
    // Hide blog section
    const blogSection = document.getElementById('blog-section');
    if (blogSection) {
      blogSection.style.display = 'none';
    }
    
    // Reset document title
    document.title = 'Ethan Pidcock - Portfolio';
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const viewPost = (post: BlogPost) => {
    setSelectedPost(post);
    // Scroll to top when viewing a post
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToList = () => {
    setSelectedPost(null);
    // Scroll to top when going back to the list
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Box 
      id="blog-section" 
      w="100%" 
      py={10}
      bg="whites.alabaster" 
      minH="100vh"
      position="relative"
    >
      <Button 
        leftIcon={<ArrowBackIcon />}
        onClick={returnHome}
        size="md"
        variant="ghost"
        fontFamily="Caveat"
        fontSize="xl"
        color="gray.700"
        p={0}
        position="absolute"
        left={10}
        top={10}
        _hover={{
          color: "highlight.200",
          background: "transparent"
        }}
      >
        Return Home
      </Button>

      <Container maxW="800px">
        {selectedPost ? (
          // Single post view without sidebar
          <Box>
            <Button 
              leftIcon={<ArrowBackIcon />} 
              mb={6}
              onClick={backToList}
              size="md"
              colorScheme="blue"
              variant="outline"
            >
              Back to Posts
            </Button>
            
            <Heading as="h1" size="xl" mb={2}>
              {selectedPost.data.title}
            </Heading>
            
            <Text fontSize="sm" color="gray.500" mb={4}>
              {formatDate(selectedPost.data.date)}
            </Text>
            
            {selectedPost.data.tags && (
              <Flex gap={2} mb={4} flexWrap="wrap">
                {selectedPost.data.tags.split(',').map((tag: string, i: number) => (
                  <Badge key={i} colorScheme="blue" px={2} py={1} borderRadius="md">
                    {tag.trim()}
                  </Badge>
                ))}
              </Flex>
            )}
            
            <Divider my={4} />
            
            <Box className="markdown-content">
              <ReactMarkdown>{selectedPost.content}</ReactMarkdown>
            </Box>
          </Box>
        ) : (
          // Blog list view
          <>
            <Flex justifyContent="center" alignItems="center" mb={8}>
              <Heading 
                as="h1" 
                size="2xl" 
                fontFamily="Caveat"
                textAlign="center"
              >
                My Blog
              </Heading>
            </Flex>

            {loading ? (
              <Text>Loading posts...</Text>
            ) : posts.length === 0 ? (
              <Text>No posts found.</Text>
            ) : (
              <VStack spacing={8} align="stretch">
                {posts.map((post, index) => (
                  <Box 
                    key={index} 
                    p={6} 
                    borderRadius="md" 
                    boxShadow="md" 
                    bg="white"
                    cursor="pointer"
                    _hover={{ 
                      transform: 'translateY(-4px)', 
                      transition: 'transform 0.2s',
                      boxShadow: 'lg'
                    }}
                    onClick={() => viewPost(post)}
                  >
                    <Heading as="h2" size="lg" mb={2}>
                      {post.data.title}
                    </Heading>
                    
                    <Text fontSize="sm" color="gray.500" mb={4}>
                      {formatDate(post.data.date)}
                    </Text>
                    
                    <Text mb={4} fontStyle="italic">
                      {post.data.description}
                    </Text>
                    
                    {post.data.tags && (
                      <Flex gap={2} mt={4} flexWrap="wrap">
                        {post.data.tags.split(',').map((tag: string, i: number) => (
                          <Badge key={i} colorScheme="blue" px={2} py={1} borderRadius="md">
                            {tag.trim()}
                          </Badge>
                        ))}
                      </Flex>
                    )}
                    
                    <Text mt={4} color="blue.500">
                      Read more →
                    </Text>
                  </Box>
                ))}
              </VStack>
            )}
          </>
        )}
      </Container>
    </Box>
  );
};

export default Blog; 
import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Button, SimpleGrid, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const ArticlePagination = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    fetchArticles();
  }, [currentPage]);

  const fetchArticles = async () => {
    try {
      const response = await fetch(
        `https://minpro-blog.purwadhikabootcamp.com/api/blog?page=${currentPage}`
      );
      const data = await response.json();
      setArticles(data.result);
      setTotalPages(data.page);
    } catch (error) {
      console.log(error);
    }
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  const handleClick = (id) => {
    navigate(`/blog/${id}`)
  }
  const itemsPerRow = 4;

  return (
    <Box p={4} textAlign={"center"}>
      <Heading as="h1" mb={4}>
        Artikel
      </Heading>
      {articles.length > 0 ? (
        <SimpleGrid columns={{ base: 1, md: itemsPerRow }} spacing={4}>
          {articles.map((article) => (
            <Box onClick={()=>handleClick(article.id)} key={article.id} mb={4} borderWidth="1px" p={4}>
              <Image  width={"350px"} height={"300px"}  src={`https://minpro-blog.purwadhikabootcamp.com/${article.imageURL}`} _hover={{
                     cursor:"pointer"
                  }}>
                </Image>
              <Heading as="h2" fontSize="xl" mb={2}>
                {article.title}
              </Heading>
            </Box>
          ))}
        </SimpleGrid>
      ) : (
        <Text>Tidak ada artikel yang ditemukan.</Text>
      )}
      <Box mt={4} >
        {currentPage > 1 && (
          <Button onClick={goToPreviousPage} colorScheme="blue" mr={2}>
            Sebelumnya
          </Button>
        )}
        {currentPage < totalPages && (
          <Button onClick={goToNextPage} colorScheme="blue">
            Selanjutnya
          </Button>
        )}
      </Box>
    </Box>
  );
};

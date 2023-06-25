import React from "react";
import { Formik } from "formik";
import { Box, Button } from "@chakra-ui/react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const LikeButton = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(token);
  console.log(id);
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const handleLike = async () => {
    if (!token) {
      navigate("/login");
      return;
    }
    const data = {
      BlogId: id,
    };

    try {
      const response = await Axios.post(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog/like",
        data,
        {
          headers: { Authorization: `Bearer ${token}` },
          "Content-Type": "application/json",
        }
      );
      console.log(response.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Formik>
        <Button colorScheme="gray" onClick={handleLike}>
          Like
        </Button>
      </Formik>
    </Box>
  );
};


// import React, { useState } from 'react';
// import axios from 'axios';
// import { Box, Button, Input } from '@chakra-ui/react';

// export const LikeButton = () => {
//   const [articleId, setArticleId] = useState('');
//   const token = localStorage.getItem('token');

//   const handleLike = async () => {
//     try {
//       await axios.post(
//         'https://minpro-blog.purwadhikabootcamp.com/api/blog/like',
//         {
//           BlogId: articleId
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );
//       console.log(`Liked article with ID: ${articleId}`);
//     } catch (error) {
//       console.log(`Error liking article with ID: ${articleId}`, error);
//     }
//   };

//   const handleArticleIdChange = (event) => {
//     setArticleId(event.target.value);
//   };

//   return (
//     <Box border={2}>
//       <Input type="text" value={articleId} onChange={handleArticleIdChange} />
//       <Button onClick={handleLike}>Like</Button>
//     </Box>
//   );
// };
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Box, Button, Input } from '@chakra-ui/react';

// export const LikeButton = () => {
//   const [articleId, setArticleId] = useState('');
//   const token = localStorage.getItem('token');

//   const handleLike = async () => {
//     try {
//       await axios.post(
//         'https://minpro-blog.purwadhikabootcamp.com/api/blog/like',
//         {
//           BlogId: articleId
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );
//       console.log(`Liked article with ID: ${articleId}`);
//     } catch (error) {
//       console.log(`Error liking article with ID: ${articleId}`, error);
//     }
//   };

//   const handleArticleIdChange = (event) => {
//     setArticleId(event.target.value);
//   };

//   return (
//     <Box border={2}>
//       <Input type="text" value={articleId} onChange={handleArticleIdChange} />
//       <Button onClick={handleLike}>Like</Button>
//     </Box>
//   );
// };
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Box, Button, Input } from '@chakra-ui/react';

// export const LikeButton = () => {
//   const [articleId, setArticleId] = useState('');
//   const token = localStorage.getItem('token');

//   const handleLike = async () => {
//     try {
//       await axios.post(
//         'https://minpro-blog.purwadhikabootcamp.com/api/blog/like',
//         {
//           BlogId: articleId
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );
//       console.log(`Liked article with ID: ${articleId}`);
//     } catch (error) {
//       console.log(`Error liking article with ID: ${articleId}`, error);
//     }
//   };

//   const handleArticleIdChange = (event) => {
//     setArticleId(event.target.value);
//   };

//   return (
//     <Box border={2}>
//       <Input type="text" value={articleId} onChange={handleArticleIdChange} />
//       <Button onClick={handleLike}>Like</Button>
//     </Box>
//   );
// };

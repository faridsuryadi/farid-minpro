import { Box, Heading } from "@chakra-ui/react"
import { LikedArticles } from "../components/listsuka"

export const Suka = () => {
  return(
    <Box bgColor={"white"} w={"80%"} h={"500px"} p={5} borderRadius={"5px"}>
            <Heading>
                Artikel Disukai
            </Heading>
            <LikedArticles/>
    </Box>
  )  
} 
import React from "react";
import {
  Image,
  Flex,
  Progress,
  IconButton,
  Icon,
  Box,
  HStack,
  useMediaQuery,
  Text,
  Card,
  Header,
  Spacer,
} from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ImageCard = ({ videoId, videoTitle, videoImage, videoProgress }) => {
  const navigate = useNavigate();
  const videoClickHandle = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  const [isLargerThanMobile] = useMediaQuery("(min-width: 768px)");

  return (
    <Box
      _hover={{
        boxShadow: "0 0 6px white",
      }}
      mt={3}
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      bgImage={videoImage}
      bgSize="cover"
      bgPosition="center"
      shadow="2xl"
      position="relative"
      cursor="pointer"
      onClick={() => videoClickHandle(videoId)}
    >
      {isLargerThanMobile ? (
        ""
      ) : (
        <IconButton
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          aria-label="Play button"
          icon={<Icon as={FaPlay} />}
          size="md"
          isRound
        />
      )}
      <Flex
        minH="132px"
        bg="rgba(0, 0, 0, 0.5)" // Semi-transparent overlay for better text visibility
        direction={{ base: "column", md: "row" }}
      >
        {isLargerThanMobile ? (
          <Box position="relative" width={{ base: "100%", md: "33%" }}>
            <IconButton
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              aria-label="Play button"
              icon={<Icon as={FaPlay} />}
              size="lg"
              isRound
            />
          </Box>
        ) : (
          ""
        )}

        <Flex
          direction="column"
          minH="100%"
          justifyContent="center"
          p={4}
          width={{ base: "100%", md: "67%" }}
        >
          <Text color="white" margin={0} fontSize="xl" fontWeight="bold">
            İzlemeye devam et!
          </Text>
          <Text color="white" margin={0} fontSize="md">
            {videoTitle}
          </Text>
        </Flex>
      </Flex>

      <Progress value={videoProgress} size="xs" />
    </Box>
  );
};

export default ImageCard;

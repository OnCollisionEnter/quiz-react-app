import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Container from "../../components/containers/container";

import CourseCard from "../../components/cards/courseCard";
import ImageCard from "../../components/cards/imageCard";

import {
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

import {
  Button,
  ButtonGroup,
  Flex,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  CheckboxGroup,
  Checkbox,
  Stack,
} from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";
import TuneIcon from "@mui/icons-material/Tune";
import AppsIcon from "@mui/icons-material/Apps";
import GradeIcon from "@mui/icons-material/Grade";
import Footer from "../../components/footer/Footer";

const Main = () => {
  const { isDark } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    // Handle search here
    event.preventDefault(); // prevent form submission
    // Handle search here
    console.log(searchTerm);
    setSearchTerm(""); // reset search term
  };

  return (
    <div className="mh-100vh">
      <Navbar />

      {/* <form onSubmit={handleSearch}>
        <InputGroup
          mt={5}
          width={{
            base: "92%",
            md: "75%",
          }}
          mx="auto"
        >
          <InputLeftElement pointerEvents="none" children={<FaSearch />} />
          <Input
            color={isDark === "dark" ? "white" : "black"}
            shadow="xl"
            rounded="30px"
            fontSize="2xl"
            border={
              isDark === "dark" ? "2px solid #FFC26A" : "2px solid #343DC0"
            }
            p={6}
            paddingLeft={14}
            placeholder="Aradığınız konuyu yazın..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </InputGroup>
      </form> */}
      <div className="mh-100vh">
        <Container>
          <Grid templateColumns="repeat(6, 1fr)">
            <GridItem as="aside" colSpan={{ base: 6, lg: 2, xl: 1 }}>
              <Button
                display="flex"
                alignItems="center"
                justifyContent="center"
                variant="link"
                colorScheme="whiteAlpha.900"
              >
                <AppsIcon />
                <Text mt="15px" ms="5px">
                  Tümü
                </Text>
              </Button>
              <Button
                display="flex"
                alignItems="center"
                justifyContent="center"
                variant="link"
                colorScheme="whiteAlpha.900"
                mt="-10px"
              >
                <GradeIcon />
                <Text mt="15px" ms="5px">
                  Sertifikalı
                </Text>
              </Button>

              {/* <Button
                display="flex"
                alignItems="center"
                justifyContent="center"
                variant="link"
                colorScheme="whiteAlpha.900"
              >
                <TuneIcon />
                <Text mt="15px" ms="5px">
                  Filtrele
                </Text>
              </Button> */}

              <Accordion defaultIndex={[0]} allowMultiple width="90%">
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Dile Göre
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Checkbox w="100%" value="ingilizce" defaultChecked>
                      İngilizce
                    </Checkbox>
                    <Checkbox w="100%" value="fransizca">
                      Fransızca
                    </Checkbox>
                    <Checkbox w="100%" value="almanca">
                      Almanca
                    </Checkbox>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Seviyeye Göre
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Checkbox defaultChecked>Başlangıç Seviye</Checkbox>
                    <Checkbox defaultChecked>Orta Seviye</Checkbox>
                    <Checkbox defaultChecked>İleri Seviye</Checkbox>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Puana Göre
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Checkbox defaultChecked>
                      <StarIcon color="orange" />
                      <StarIcon color="orange" />
                      <StarIcon color="orange" />
                      <StarIcon color="orange" />
                      <StarIcon
                        // clipPath="polygon(0 0, 50% 0, 50% 100%, 0% 100%)"
                        color="orange"
                      />
                    </Checkbox>
                    <Checkbox defaultChecked w="100%">
                      {" "}
                      <StarIcon color="orange" />
                      <StarIcon color="orange" />
                      <StarIcon color="orange" />
                      <StarIcon color="orange" />
                    </Checkbox>
                    <Checkbox defaultChecked w="100%">
                      <StarIcon color="orange" />
                      <StarIcon color="orange" />
                      <StarIcon color="orange" />
                    </Checkbox>
                    <Checkbox w="100%" defaultChecked>
                      <StarIcon color="orange" />
                      <StarIcon color="orange" />
                    </Checkbox>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </GridItem>
            <GridItem colSpan={{ base: 6, lg: 4, xl: 5 }} p={0}>
              <InputGroup
                mt={{
                  base: 2,
                  lg: 0,
                }}
                mb={{
                  base: 2,
                  lg: 5,
                }}
                width={{
                  base: "92%",
                  md: "75%",
                }}
              >
                <InputLeftElement pointerEvents="none">
                  <FaSearch color="gray.300" />
                </InputLeftElement>
                <Input rounded="30px" type="tel" placeholder="Kurs arayın" />
              </InputGroup>

              <CheckboxGroup colorScheme="blue" defaultValue={["ingilizce"]}>
                <Stack spacing={[1, 5]} direction={["column", "row"]}>
                  <Checkbox value="ingilizce">İngilizce</Checkbox>
                  <Checkbox value="fransizca">Fransızca</Checkbox>
                  <Checkbox value="almanca">Almanca</Checkbox>
                </Stack>
              </CheckboxGroup>

              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  lg: "repeat(2, 1fr)",
                  xl: "repeat(3, 1fr)",
                  // "2xl": "repeat(3, 1fr)",
                }}
                gap={4}
              >
                <CourseCard
                  courseTitle="A1 İngilizce"
                  courseImage="https://picsum.photos/1920/1080"
                  authorName="Ali Haydar Göksoy"
                  authorProfile="https://picsum.photos/1920/1080"
                  courseDescription="lmfwqdwqd qweqwe dqw q w ao"
                />
                <CourseCard
                  courseTitle="A1 İngilizce"
                  courseImage="teacher1.jpg"
                  authorName="Ali Haydar Göksoy"
                  authorProfile="https://picsum.photos/1920/1080"
                  courseDescription="lmfao qwewqe qwe qwe qewqwe "
                />
                <CourseCard
                  courseTitle="A1 İngilizce"
                  courseImage="teacher1.jpg"
                  authorName="Ali Haydar Göksoy"
                  authorProfile="https://picsum.photos/1920/1080"
                  courseDescription="lmfao qwdqwqeqwe  qqwe wdqdw"
                />
                <CourseCard
                  courseTitle="A1 İngilizce"
                  courseImage="teacher1.jpg"
                  authorName="Ali Haydar Göksoy"
                  authorProfile="https://picsum.photos/1920/1080"
                  courseDescription="lmqwdf qweqwe qwe ao"
                />
                <CourseCard
                  courseTitle="A1 İngilizce"
                  courseImage="https://picsum.photos/1920/1080"
                  authorName="Ali Haydar Göksoy"
                  authorProfile="https://picsum.photos/1920/1080"
                  courseDescription="lmfa qweqwe qwewqe eo"
                />

                {/* <ImageCard
                  videoTitle="Past Tense"
                  videoImage="url('teacher1.jpg')"
                  videoProgress={30}
                /> */}
              </Grid>
            </GridItem>
          </Grid>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Main;

{
  /* Material UI Hatıram xDD
                <Button
                  endIcon={<AppsIcon />}
                  sx={{
                    justifyContent: "flex-start",
                  }}
                >
                  Tümü
                </Button> */
}

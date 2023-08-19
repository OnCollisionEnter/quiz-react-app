import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { IconButton, Grid, Text, Link, VStack } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Divider,
  Box,
  Spacer,
} from "@chakra-ui/react";

const socials = [
  {
    name: "ReactLingot",
    url: "lmfao",
  },
];

const Mobile = ({ handleClick }) => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { theme, toggleTheme } = useTheme();

  return (
    <Grid
      bg={theme === "light" ? "#FFC26A" : "#131746"}
      templateColumns="1fr 5fr 1fr"
      gap={6}
      px={8}
      py={4}
      alignItems="center"
      mt={{
        base: "0px",
        md: "20px",
      }}
      className="navbar navbar-expand-lg navbar-dark navbar-bg"
      w={{
        base: "100%",
        md: "75%",
      }}
      rounded={{
        base: "0px",
        md: "30px",
      }}
      mx="auto"
    >
      {/* Centered Text logo */}
      <Text
        as="a"
        fontSize="2xl"
        textAlign="center"
        color={theme === "light" ? "#ffffff" : "#ffffff"}
        className="navbar-brand"
        href="/"
      >
        <span class="spans">&#123;</span>
        ReactLingot
        <span class="spans">&#125;</span>
      </Text>
      {/* Empty column */}
      <div />
      <Drawer
        placement="top"
        onClose={onClose}
        isOpen={isOpen}
        backgroundColor={"green"}
        size="80%"
      >
        <DrawerOverlay>
          <DrawerContent
            // transition=".3s"
            bg={theme === "light" ? "#FFC26A" : "#323AB7"}
            p={3}
            spacing={2}
          >
            <DrawerCloseButton
              color={theme === "light" ? "#323AB7" : "#FFC26A"}
              p={5}
              size="2xl"
            />

            <DrawerBody
              fontSize="2xl"
              color={theme === "light" ? "#323AB7" : "#FFFFFF"}
            >
              <VStack py={10} spacing={4} h="100%">
                {socials.map((item) => (
                  <>
                    <Link
                      key={item.url}
                      href={item.url}
                      isExternal
                      w="100%"
                      fontSize="26px"
                      fontWeight="bold"
                      _focus={{ backgroundColor: "white", color: "black" }}
                    >
                      {item.name}
                    </Link>
                  </>
                ))}
                <Divider orientation="horizontal" />
                <Text
                  as="a"
                  w="100%"
                  textalign="left"
                  onClick={(e) => navigate("/")}
                  fontSize="23px"
                  cursor="pointer"
                >
                  Ana Sayfa
                </Text>
                <Text
                  as="a"
                  w="100%"
                  textalign="left"
                  onClick={(e) => navigate("/courses")}
                  fontSize="23px"
                  cursor="pointer"
                >
                  Kurslar
                </Text>
                <Text
                  as="a"
                  w="100%"
                  textalign="left"
                  onClick={(e) => navigate("/dashboard")}
                  fontSize="23px"
                  cursor="pointer"
                >
                  Öğretmen
                </Text>
                <Text
                  as="a"
                  w="100%"
                  textalign="left"
                  onClick={(e) => navigate("/login")}
                  fontSize="23px"
                  cursor="pointer"
                >
                  Giriş Yap
                </Text>
                <Text
                  as="a"
                  w="100%"
                  textalign="left"
                  fontSize="23px"
                  onClick={() => {
                    toggleTheme();
                  }}
                  cursor="pointer"
                >
                  Karanlık Mod
                </Text>
                <Spacer />
                <Text textalign="left" w="100%" fontSize="18px">
                  ReactLingot
                </Text>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      {/* IconButton on the left */}
      <IconButton
        icon={
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            color={theme === "light" ? "#ffffff" : "#ffffff"}
          />
        }
        aria-label="Toggle navigation"
        onClick={onOpen}
        backgroundColor="transparent"
      />
    </Grid>
  );
};

export default Mobile;

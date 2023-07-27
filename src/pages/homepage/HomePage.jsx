import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import Navbar from "../../components/navbar/Navbar";
import Container from "../../components/containers/container";
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
  VStack,
} from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import ImageCard from "../../components/cards/imagecard";

const HomePage = () => {
  const [isLargerThanMobile] = useMediaQuery("(min-width: 768px)");
  const [isLargerThanTablet] = useMediaQuery("(min-width: 1280px)");

  return (
    <div className="mh-100vh">
      <Navbar />

      <Container
        gridTemplateColumns={{
          base: "1fr",
          xl: "8fr 1fr 11fr",
        }}
        gridTemplateRows="1fr"
        gridGap={2}
        transition=".5s"
      >
        <Flex direction="column" minH="100%" justifyContent="space-between">
          <h1>Hoşgeldin, Okan.</h1>
          {isLargerThanMobile ? (
            <Text fontSize="2xl">
              Teslim edilecek <strong>3</strong> ödevin var!
            </Text>
          ) : (
            ""
          )}

          <ImageCard
            videoTitle="Past Tense"
            videoImage="url('teacher1.jpg')"
            videoProgress={30}
          />
        </Flex>

        {/* //grid splitter */}
        <Box>{""}</Box>

        {/* Ödev Kutusu */}
        <Box>
          <div class="card task-card rounded-3 p-3">
            <div class="card-body">
              <h3 class="card-title">Ünite Testi</h3>
              <p class="card-text text-large">
                <h4>Konu: Present Continuous </h4>
                Eğitmen: Ali Haydar Göksoy
                <br />
                Ödev: 20 Test Sorusu <br /> Son <strong>18</strong> Saat{" "}
                <strong>21</strong> Dakika!
              </p>
            </div>
            <Link to="/quiz" className="TaskButton mb-1">
              Hemen Tamamla
            </Link>
          </div>
        </Box>
      </Container>

      <div class="container w-75 mt-4 p-5 rounded-5 shadow-lg default-container">
        <h2>Kelime dağarcığını genişlet!</h2>
        <br />
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card card-purple">
              <div class="card-body">
                <h5 class="card-title">Selamlaşma</h5>
                <p class="card-text">12 Kelime</p>
              </div>
              <div className="card-header3 rounded-bottom-2"></div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card card-purple">
              <div class="card-body">
                <h5 class="card-title">Basit Fiiller</h5>
                <p class="card-text">10 Kelime</p>
              </div>
              <div className="card-header2 rounded-bottom-2"></div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card card-purple">
              <div class="card-body ">
                <h5 class="card-title">Alışkanlıklar</h5>
                <p class="card-text">7 Kelime</p>
              </div>
              <div className="card-header3 rounded-bottom-2"></div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card card-purple">
              <div class="card-body">
                <h5 class="card-title">Dış Görünüm</h5>
                <p class="card-text">10 Kelime</p>
              </div>
              <div className="card-header2 rounded-bottom-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

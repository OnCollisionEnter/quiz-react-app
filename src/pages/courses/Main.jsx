import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Container from "../../components/containers/container";
import ImageCard from "../../components/cards/imagecard";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Container
        gridTemplateColumns={{
          base: "1fr",
          md: "1fr 1fr",
          lg: "1fr 1fr 1fr",
          xl: "1fr 1fr 1fr 1fr",
        }}
        gridTemplateRows="1fr"
        gridGap={4}
      >
        <ImageCard
          videoTitle="Past Tense"
          videoImage="url('teacher1.jpg')"
          videoProgress={30}
        />
        <ImageCard
          videoTitle="Past Tense"
          videoImage="url('teacher1.jpg')"
          videoProgress={30}
        />
        <ImageCard
          videoTitle="Past Tense"
          videoImage="url('teacher1.jpg')"
          videoProgress={30}
        />
        <ImageCard
          videoTitle="Past Tense"
          videoImage="url('teacher1.jpg')"
          videoProgress={30}
        />
        <ImageCard
          videoTitle="Past Tense"
          videoImage="url('teacher1.jpg')"
          videoProgress={30}
        />
        <ImageCard
          videoTitle="Past Tense"
          videoImage="url('teacher1.jpg')"
          videoProgress={30}
        />
        <ImageCard
          videoTitle="Past Tense"
          videoImage="url('teacher1.jpg')"
          videoProgress={30}
        />
        <ImageCard
          videoTitle="Past Tense"
          videoImage="url('teacher1.jpg')"
          videoProgress={30}
        />
      </Container>
    </div>
  );
};

export default Main;

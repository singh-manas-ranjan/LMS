"use client";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Grid,
  Heading,
  Spinner,
  Text,
  Image,
} from "@chakra-ui/react";
import styles from "./banner.module.css";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import coursesList from "../../../../public/courses";
import { FaAngleRight } from "react-icons/fa6";

const BannerCarousel = () => {
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1261 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1260, min: 990 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 989, min: 570 },
      items: 1,
    },
    midMobile: {
      breakpoint: { max: 764, min: 520 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 520, min: 0 },
      items: 1,
    },
  };

  if (loading) {
    return (
      //   <Box
      //     width={"100%"}
      //     display={"grid"}
      //     height={"100%"}
      //     placeItems={"center"}
      //   >
      //     <Spinner
      //       thickness="4px"
      //       speed="0.65s"
      //       color="blue.500"
      //       emptyColor="gray.200"
      //       size="xl"
      //     />
      //   </Box>
      <Box
        h={{ md: "350px" }}
        w={"100%"}
        borderRadius={8}
        bgColor={"AppWorkspace"}
        position={"relative"}
        overflow={"hidden"}
      >
        <Flex p={"1rem"} color={"#2D2F31"} w={"100%"} h={"100%"}>
          <Flex
            flexDirection={"column"}
            w={{ base: "100%", md: "65%", lg: "60%" }}
            p={".5rem"}
            pl={5}
            h={"100%"}
            rowGap={5}
          >
            <Grid rowGap={3}>
              <Heading fontSize={{ base: "2xl", lg: "2xl", xl: "3xl" }}>
                New Exams available Now!
              </Heading>
              <Text
                lineHeight={{ sm: "1.3rem", md: "1.7rem" }}
                fontSize={{ base: "sm", md: "md" }}
              >
                Welcome to our new exam to attend and check your results how
                long are you practice for your papers, we provide the best
                service for every one this platform boost your confidence.
              </Text>
            </Grid>
            <Button
              w={150}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              columnGap={2}
              color={"#2D89BA"}
            >
              Explore More <FaAngleRight size={18} />
            </Button>
          </Flex>
        </Flex>
        <Box
          position={"absolute"}
          right={{ md: -5, xl: 8 }}
          bottom={{ md: -3 }}
          display={{ base: "none", md: "grid" }}
        >
          <Image
            alt="teacher-avatar"
            src={
              "https://res.cloudinary.com/learnopia/image/upload/v1722329722/teacher_cvj8gs.png"
            }
            width={{ md: 250 }}
          />
        </Box>
      </Box>
    );
  }

  return (
    <Carousel
      autoPlay={true}
      autoPlaySpeed={3000}
      infinite={true}
      responsive={responsive}
      itemClass={styles.carouselItem}
      swipeable={true}
      draggable={true}
      showDots={true}
      ssr={true}
      className={styles.carousel}
      removeArrowOnDeviceType={[
        "desktop",
        "tablet",
        "mobile",
        "midMobile",
        "superLargeDesktop",
      ]}
    >
      <Box
        h={{ md: "350px" }}
        w={"100%"}
        borderRadius={8}
        bgColor={"AppWorkspace"}
        position={"relative"}
        overflow={"hidden"}
      >
        <Flex p={"1rem"} color={"#2D2F31"} w={"100%"} h={"100%"}>
          <Flex
            flexDirection={"column"}
            w={{ base: "100%", lg: "70%" }}
            p={".5rem"}
            pl={5}
            h={"100%"}
            rowGap={5}
          >
            <Grid rowGap={3}>
              <Heading fontSize={{ base: "2xl", lg: "2xl", xl: "3xl" }}>
                Revolutionize Your Teaching with Interactive Lesson Plans!
              </Heading>
              <Text
                lineHeight={{ sm: "1.3rem", md: "1.7rem" }}
                fontSize={{ base: "sm", md: "md" }}
              >
                Introducing Interactive Lesson Plans: Revolutionize Your
                Classroom! At Learnopia, we&quot;re excited to unveil our latest
                innovation: Interactive Lesson Plans! This cutting-edge feature
                empowers you to design dynamic and responsive lessons that adapt
                seamlessly to your students&quot; needs. Integrate effortlessly
                with your existing resources and boost classroom engagement to
                new heights. Dive into our tutorials and best practices to
                maximize the impact of this tool and invigorate your teaching
                approach. Explore Interactive Lesson Plans and elevate your
                educational experience!
              </Text>
            </Grid>
            <Button
              w={150}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              columnGap={2}
              color={"#2D89BA"}
            >
              Explore More <FaAngleRight size={18} />
            </Button>
          </Flex>
        </Flex>
        <Box
          position={"absolute"}
          right={{ md: -5, xl: 8 }}
          bottom={{ md: -3 }}
          display={{ base: "none", lg: "grid" }}
        >
          <Image
            alt="teacher-avatar"
            src={
              "https://res.cloudinary.com/learnopia/image/upload/v1722329722/teacher_cvj8gs.png"
            }
            width={{ md: 250 }}
          />
        </Box>
      </Box>
      <Box
        h={{ md: "350px" }}
        w={"100%"}
        borderRadius={8}
        bgColor={"AppWorkspace"}
        position={"relative"}
        overflow={"hidden"}
      >
        <Flex p={"1rem"} color={"#2D2F31"} w={"100%"} h={"100%"}>
          <Flex
            flexDirection={"column"}
            w={{ base: "100%", lg: "70%" }}
            p={".5rem"}
            pl={5}
            h={"100%"}
            rowGap={5}
          >
            <Grid rowGap={3}>
              <Heading fontSize={{ base: "2xl", lg: "2xl", xl: "3xl" }}>
                Elevate Your Teaching Journey with Learnopia!
              </Heading>
              <Text
                lineHeight={{ sm: "1.3rem", md: "1.7rem" }}
                fontSize={{ base: "sm", md: "md" }}
              >
                Maximize Your Impact with Learnopia! As a valued member of our
                instructor community, you have access to a wealth of interactive
                tools and resources designed to elevate your teaching. Take
                advantage of exclusive workshops and certifications to further
                enhance your skills and stay ahead in your field. Engage with
                our vibrant network of fellow educators to share ideas and
                collaborate. Continue to empower your students and advance your
                professional journey with us. Explore new features and
                opportunities today.
              </Text>
            </Grid>
            <Button
              w={150}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              columnGap={2}
              color={"#2D89BA"}
            >
              Explore More <FaAngleRight size={18} />
            </Button>
          </Flex>
        </Flex>
        <Box
          position={"absolute"}
          right={{ md: -5, xl: 8 }}
          bottom={{ md: -3 }}
          display={{ base: "none", lg: "grid" }}
        >
          <Image
            alt="teacher-avatar"
            src={"/teacher1.png"}
            width={{ md: 250 }}
          />
        </Box>
      </Box>
    </Carousel>
  );
};

export default BannerCarousel;

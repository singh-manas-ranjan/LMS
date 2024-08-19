"use client";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import styles from "./StudentDashboardBannerCarousel.module.css";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaAngleRight } from "react-icons/fa6";

const StudentDashboardBannerCarousel = () => {
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
        <Flex p={{ base: "1rem" }} color={"#2D2F31"} w={"100%"} h={"100%"}>
          <Flex
            flexDirection={"column"}
            w={{ base: "100%", lg: "70%" }}
            p={".5rem"}
            pl={5}
            h={"100%"}
            rowGap={5}
          >
            <Grid rowGap={3}>
              <Heading fontSize={{ base: "md", md: "2xl" }}>
                New Exams available Now!
              </Heading>
              <Text
                lineHeight={{ sm: "xs", md: "sm" }}
                fontSize={{ base: "xs", md: "md" }}
              >
                🎉 Welcome to Our New Exam Feature! 🌟
                <br />
                We’re excited to introduce our latest exam tool, designed to
                help you gauge your progress and check your results
                effortlessly. See how well you’ve practiced for your papers and
                boost your confidence with our top-notch service. Our platform
                is here to support you every step of the way, ensuring you’re
                well-prepared and confident for your exams. Start testing today
                and experience the difference!
              </Text>
            </Grid>
            <Button
              w={150}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              columnGap={2}
              color={"#2D89BA"}
              size={{ base: "sm", md: "md" }}
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
              <Heading fontSize={{ base: "md", md: "2xl" }}>
                New Courses Available
              </Heading>
              <Text
                lineHeight={{ sm: "xs", md: "sm" }}
                fontSize={{ base: "xs", md: "md" }}
              >
                🎉 Exciting News! 🌟 <br />
                We’ve just expanded our course catalog with a range of NEW
                offerings! 🚀 Whether you’re looking to enhance your skills,
                dive into new interests, or advance your career, we’ve got
                something for you. Our latest additions feature cutting-edge
                tech, creative arts, professional development, and more. Learn
                from industry experts, enjoy flexible, on-demand access, and
                unlock new opportunities with our fresh and diverse course
                options. Don’t miss out—explore our updated catalog and start
                your next learning adventure today!
              </Text>
            </Grid>
            <Button
              w={150}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              columnGap={2}
              color={"#2D89BA"}
              size={{ base: "sm", md: "md" }}
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
              "https://res.cloudinary.com/learnopia/image/upload/v1724049456/teacher1_oqlhu9.png"
            }
            width={{ md: 250 }}
          />
        </Box>
      </Box>
    </Carousel>
  );
};

export default StudentDashboardBannerCarousel;

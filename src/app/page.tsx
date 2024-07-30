import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import SignUpModal from "./ui/auth/signUpModal/SignUpModal";
import SignInModal from "./ui/auth/signInModal/SignInModal";

export default function Page() {
  const mainStyle = {
    w: "100vw",
    h: "100vh",
  };

  const navStyle = {
    w: "100%",
    paddingInline: "2rem",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <Box
      as="main"
      sx={mainStyle}
      bgImage={{
        base: "url('https://res.cloudinary.com/learnopia/image/upload/v1722329744/bgImg_jtqoqa.jpg')",
      }}
      backgroundSize={"cover"}
      backgroundPosition={{ base: "center" }}
      backgroundRepeat={"no-repeat"}
    >
      <Flex as="nav" sx={navStyle} boxShadow={"0 2px 2px -2px gray"}>
        <Text
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
          fontWeight={"bold"}
          padding={"1rem"}
          color={"#044F63"}
        >
          Learnopia
        </Text>
      </Flex>
      <VStack
        position={"absolute"}
        top={{ base: "10%", sm: "20%" }}
        left={"5%"}
        p={"1rem"}
        spacing={5}
        width={{ base: "90%", sm: "60%", md: "42%", xl: "32%" }}
        alignItems={"left"}
        color={"#044F63"}
      >
        <Heading as={"h1"} fontSize={{ base: "xl", md: "2xl" }} width={"100%"}>
          Unleashing The Power of <Text as={"u"}>Learning</Text> Potential
        </Heading>
        <Heading
          as={"h3"}
          fontSize={{ base: "md", lg: "xl" }}
          lineHeight={{ md: "1.8rem" }}
        >
          Ignite your passion for learning, explore limitless possibilities, and
          shape your educational destiny with our innovative and student-centric
          online platform.
        </Heading>
        <HStack spacing={5}>
          <SignInModal />
          <SignUpModal />
        </HStack>
      </VStack>
    </Box>
  );
}

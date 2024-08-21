import { fetchAllUsers } from "@/actions/users/action";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";

const main = {
  width: "100%",
  height: "100%",
  bg: "#fff",
  borderRadius: "4px",
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  overflow: "hidden",
};

const textStyle = {
  fontSize: { base: "xs" },
};

interface Props {
  params: { user_type: "instructors" | "students" };
}
const UsersAccounts = async ({ params: { user_type } }: Props) => {
  const Users = await fetchAllUsers(user_type);
  return (
    <Box as="main" sx={main} rowGap={5} overflow={"hidden"}>
      <Box display={"grid"} rowGap={5} p={".5rem"}>
        {Users.map((user, idx) => (
          <Card
            key={user._id}
            color="teal"
            boxShadow={
              "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
            }
            direction={"row"}
            h={{ base: "100px", md: "150px" }}
            w={"100%"}
            alignItems={"center"}
          >
            <CardHeader
              p={2}
              pl={{ base: 3, md: 4 }}
              h={{ base: "60%", md: "70%" }}
              flexShrink={"unset"}
            >
              <Image
                src={user.avatar}
                alt={user.firstName}
                w={"100%"}
                h={"100%"}
                borderRadius={4}
              />
            </CardHeader>
            <CardBody
              p={1}
              pr={{ base: 3, md: 4 }}
              ml={{ md: 5 }}
              h={"100%"}
              paddingBlock={{ md: 4 }}
            >
              <Box
                h={"100%"}
                display={"flex"}
                flexDir={"column"}
                justifyContent={"center"}
                rowGap={{ md: 1 }}
              >
                <Text sx={textStyle}>
                  {`${user.firstName} ${user.lastName}`}
                </Text>
                <Text sx={textStyle} display={{ base: "none", sm: "initial" }}>
                  {user.email}
                </Text>
                <Text sx={textStyle} display={{ base: "none", md: "initial" }}>
                  {user.phone}
                </Text>
                <Text sx={textStyle}>{user.domain}</Text>
              </Box>
            </CardBody>
            <CardFooter
              h={"100%"}
              justifyContent={{ base: "space-between", sm: "center" }}
              alignItems={"end"}
              p={0}
              paddingRight={{ base: 3, md: 4 }}
            >
              <Box
                h={"100%"}
                display={"flex"}
                flexDir={"column"}
                justifyContent={{ base: "center" }}
                alignItems={"center"}
                paddingTop={5}
                pb={4}
                pr={{ md: 5 }}
              >
                <NextLink href={`/admin/${user_type}/${user._id}/dashboard`}>
                  <Button
                    colorScheme="teal"
                    size={{ base: "xs", md: "sm" }}
                    borderRadius={4}
                  >
                    Profile
                  </Button>
                </NextLink>
              </Box>
            </CardFooter>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default UsersAccounts;

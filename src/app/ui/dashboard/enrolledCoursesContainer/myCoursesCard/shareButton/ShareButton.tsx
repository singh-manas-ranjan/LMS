"use client";
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { BsShare } from "react-icons/bs";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const shareBtnContainer = {
  borderRadius: "50%",
  width: { base: "40px" },
  height: { base: "40px" },
  display: "grid",
  placeItems: "center",
  _hover: { color: "#ffffff", bg: "#97CAF0" },
};

const ShareButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const fullUrl = typeof window === "undefined" ? "" : window.location.href;
  return (
    <>
      <Button onClick={onOpen} sx={shareBtnContainer}>
        <BsShare />
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "xs", md: "sm", lg: "md" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={{ base: "sm", sm: "md" }}>Share</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justifyContent={"space-evenly"} pb={3}>
              <FacebookShareButton
                url={
                  "https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttp%253A%252F%252Fgithub.com&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB"
                }
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>
              <EmailShareButton
                url={
                  "https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttp%253A%252F%252Fgithub.com&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB"
                }
                className="Demo__some-network__share-button"
              >
                <EmailIcon size={32} round={true} />
              </EmailShareButton>
              <TelegramShareButton
                url={
                  "https://telegram.me/share/url?url=http%3A%2F%2Fgithub.com&text=GitHub"
                }
                className="Demo__some-network__share-button"
              >
                <TelegramIcon size={32} round={true} />
              </TelegramShareButton>
              <LinkedinShareButton
                url={
                  "https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Furl%3Dhttp%253A%252F%252Fgithub.com%26mini%3Dtrue"
                }
                className="Demo__some-network__share-button"
              >
                <LinkedinIcon size={32} round={true} />
              </LinkedinShareButton>
              <TwitterShareButton
                url={
                  "https://x.com/intent/post?url=http%3A%2F%2Fgithub.com&text=GitHub"
                }
                className="Demo__some-network__share-button"
              >
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
              <WhatsappShareButton
                url={"https://web.whatsapp.com"}
                className="Demo__some-network__share-button"
              >
                <WhatsappIcon size={32} round={true} />
              </WhatsappShareButton>
            </Flex>
            <Flex alignItems={"center"} columnGap={2} p={3}>
              <Input
                type="text"
                fontSize={"smaller"}
                value={fullUrl}
                readOnly={true}
                height={"1.8rem"}
              />
              <Button
                size={"sm"}
                fontSize={".7rem"}
                borderRadius={"15px"}
                colorScheme={"blue"}
                width={"70px"}
                onClick={() => navigator.clipboard.writeText(fullUrl)} //copy to clipboard
              >
                Copy
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ShareButton;

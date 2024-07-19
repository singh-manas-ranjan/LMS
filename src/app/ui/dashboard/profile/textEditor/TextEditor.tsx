"use client";
import Tiptap from "@/app/ui/TiptapTextEditor/Tiptap";
import { Box, Button, FormControl, FormLabel } from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const TextEditor = ({ label }: { label: string }) => {
  const form = useForm({
    mode: "onChange",
    defaultValues: {
      description: "",
    },
  });
  const [content, setContent] = useState<string>("type here...");
  const handleContentChange = (reason: any) => {
    setContent(reason.content);
  };
  return (
    <form>
      <FormControl>
        <FormLabel
          size={"sm"}
          color={"#364A63"}
          display={"flex"}
          w={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {label}
          <Button
            size={"xs"}
            fontSize={"xs"}
            colorScheme="blue"
            mr={1}
            type="submit"
          >
            submit
          </Button>
        </FormLabel>
      </FormControl>
      <Box width={"100%"} maxH={"250px"}>
        <Tiptap
          content={content}
          onChange={(newContent: string) => handleContentChange(newContent)}
        />
      </Box>
    </form>
  );
};

export default TextEditor;

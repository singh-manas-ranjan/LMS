"use client";

import { Box, Divider } from "@chakra-ui/react";
import { useEditor, EditorContent, EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Underline } from "@tiptap/extension-underline";
import ToolBar from "./ToolBar";
import { sxScrollbar } from "../../../../public/scrollbarStyle";

const Tiptap = ({ onChange, content }: any) => {
  //   const extensions = [StarterKit, Underline];
  const handleChange = (newContent: string) => {
    onChange(newContent);
  };
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
    // editorProps: {
    //   attributes: {
    //     class:
    //       "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
    //   },
    // },
  });

  return (
    <Box
      border={".1px solid #8094AE"}
      borderRadius={6}
      display={"flex"}
      flexDir={"column"}
      rowGap={2}
      p={".5rem"}
      h={{ md: "250px" }}
    >
      <ToolBar editor={editor} content={content} />
      <Divider />
      <Box w={"100%"} h={"100%"} overflowY={"scroll"} sx={sxScrollbar}>
        <EditorContent
          style={{
            whiteSpace: "pre-line",
            fontSize: ".8rem",
            border: ".1px solid #D3D3D3",
            outline: "none",
          }}
          editor={editor}
          content={content}
        />
      </Box>
    </Box>
  );
};

export default Tiptap;

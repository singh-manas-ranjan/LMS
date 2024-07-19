import React from "react";
import {
  Bold,
  Strikethrough,
  Italic,
  Underline,
  List,
  ListOrdered,
  Heading2,
  Quote,
  Undo,
  Redo,
  Code,
} from "lucide-react";
import { Editor } from "@tiptap/react";

import { Box, IconButton } from "@chakra-ui/react";

const ToolBar = ({
  editor,
  content,
}: {
  editor?: Editor | null;
  content?: string;
}) => {
  if (!editor) {
    return null;
  }

  return (
    <Box width={"fit-content"}>
      <Box
        display={"flex"}
        justifyContent={"start"}
        alignItems={"center"}
        columnGap={2}
        flexWrap={"wrap"}
      >
        <IconButton
          bg={"transparent"}
          size={"xs"}
          aria-label="Bold"
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          icon={<Bold width={10} height={10} />}
        />
        <IconButton
          bg={"transparent"}
          size={"xs"}
          aria-label="Italic"
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          icon={<Italic width={10} height={10} />}
        />
        <IconButton
          bg={"transparent"}
          size={"xs"}
          aria-label="Italic"
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleUnderline().run();
          }}
          icon={<Underline width={10} height={10} />}
        />
        <IconButton
          bg={"transparent"}
          size={"xs"}
          aria-label="StrikeThrough"
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleStrike().run();
          }}
          icon={<Strikethrough width={10} height={10} />}
        />
        <IconButton
          bg={"transparent"}
          size={"xs"}
          aria-label="Heading"
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 2 }).run();
          }}
          icon={<Heading2 width={10} height={10} />}
        />
        <IconButton
          bg={"transparent"}
          size={"xs"}
          aria-label="UnOrderedList"
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBulletList().run();
          }}
          icon={<List width={10} height={10} />}
        />
        <IconButton
          bg={"transparent"}
          size={"xs"}
          aria-label="OrderedList"
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleOrderedList().run();
          }}
          icon={<ListOrdered width={10} height={10} />}
        />
        <IconButton
          bg={"transparent"}
          size={"xs"}
          aria-label="BlockQuote"
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBlockquote().run();
          }}
          icon={<Quote width={10} height={10} />}
        />
        <IconButton
          bg={"transparent"}
          size={"xs"}
          aria-label="Code"
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleCode().run();
          }}
          icon={<Code width={10} height={10} />}
        />
        <IconButton
          bg={"transparent"}
          size={"xs"}
          aria-label="Undo"
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().undo().run();
          }}
          icon={<Undo width={10} height={10} />}
        />
        <IconButton
          bg={"transparent"}
          size={"xs"}
          aria-label="Redo"
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().redo().run();
          }}
          icon={<Redo width={10} height={10} />}
        />
      </Box>
    </Box>
  );
};

export default ToolBar;

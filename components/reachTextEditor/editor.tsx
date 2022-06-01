import React, { ChangeEvent, useState } from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { ContextStore } from "@uiw/react-md-editor";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });
const Editor = () => {
  const [value, setValue] = useState<string>("**Hello world!!!**");
  const handleChange = (
    value?: string | undefined,
    event?: ChangeEvent<HTMLTextAreaElement> | undefined,
    state?: ContextStore | undefined
  ) => {
    setValue(value || "");
  };
  return <MDEditor preview={'edit'} value={value} onChange={handleChange} />;
};

export default Editor;

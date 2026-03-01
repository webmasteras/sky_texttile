"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";

// Dynamically import JoditEditor
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const Jodit = ({ content, setContent }) => {
  const editor = useRef(null);

  const config = {
    readonly: false,
    placeholder: "Start typing...",
    language: "en", // Set default language
  };

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      tabIndex={1} // TabIndex of textarea
      onBlur={(newContent) => setContent(newContent)} // Update content onBlur
      onChange={(newContent) => {}}
    />
  );
};

export default Jodit;

import React from "react";
import ReactMarkdown from "react-markdown";

export const MarkdownRenderer = ({ content }) => {
  return <ReactMarkdown>{content}</ReactMarkdown>;
};

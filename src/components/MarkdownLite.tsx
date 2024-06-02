import React from "react";
import { FC } from "react";
import Link from "next/link";

interface MarkdownLiteProps {
  text: string;
}

const MarkdownLite: FC<MarkdownLiteProps> = ({ text }) => {
  const linkRegex = /\[(.+?)\]\((.+?)\)/g; //to check if its an actual link or not
  const parts = [];

  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    const [fullMatch, linkText, linkUrl] = match;
    const matchStart = match.index;
    const matchEnd = matchStart + fullMatch.length;

    if (lastIndex < matchStart) {
      parts.push(text.slice(lastIndex, matchStart));
    }

    parts.push(
      <Link
        target="_blank"
        rel="noopener noreferrer" //open link in new tab
        className="break-words underline underline-offset-2 text-blue-600"
        key={linkUrl}
        href={linkUrl}
      >
        {linkText}
      </Link>
    );

    lastIndex = matchEnd;
  }

  if (lastIndex < text.length) {
    //push large text into slice
    parts.push(text.slice(lastIndex));
  }
  return (
    <>
      {parts.map((part, i) => (
        <React.Fragment key={i}>{part}</React.Fragment>
      ))}
    </>
  );
};

export default MarkdownLite;

import React, { Component } from "react";
import Emoji from "./Emoji";
import EmojiButton from "./EmojiButton";
const EmojiBoard = () => {
  const emojis = [
    {
      label: "Thumbs Up",
      symbol: "👍",
    },
    {
      label: "Mind Blown",
      symbol: "🤕",
    },
    {
      label: "Heart eyes",
      symbol: "💌",
    },
    {
      label: "Dog",
      symbol: "🐶",
    },
    {
      label: "shyt",
      symbol: "💩",
    },
  ];
  return (
    <EmojiButton
      onClick={() => handleEmojiClick()}
      onkeydown={(e) => handleEmojiKeyDown(e)}
    >
      <Emoji label="Thumbs Up" symbol="👍" size="3rem" />;
    </EmojiButton>
  );
};

export default EmojiBoard;

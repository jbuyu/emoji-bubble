import React, { Component } from "react";
import Emoji from "./Emoji";
import EmojiButton from "./EmojiButton";
import EmojiBoardWrapper from "./EmojiBoardWrapper";
const EmojiBoard = () => {
  const handleEmojiKeyDown = () => {
    //key
  };
  const handleEmojiClick = (e) => {
    e.preventDefault();
    //key
  };
  const emojis = [
    {
      label: "Thumbs Up",
      symbol: "👍",
    },
    {
      label: "Mind Blown",
      symbol: "⛴ ",
    },
    {
      label: "Touche",
      symbol: "✌",
    },
    {
      label: "react",
      symbol: "⚛",
    },
    {
      label: "shyt",
      symbol: "💩",
    },
  ];
  return (
    <div>
      <EmojiBoardWrapper>
        {emojis.map(({ label, symbol }) => {
          return (
            <EmojiButton
              onClick={() => handleEmojiClick(label, symbol)}
              onkeydown={(e) => handleEmojiKeyDown(e, label, symbol)}
            >
              <Emoji label={label} symbol={symbol} size="3rem" />
            </EmojiButton>
          );
        })}
      </EmojiBoardWrapper>
    </div>
  );
};

export default EmojiBoard;

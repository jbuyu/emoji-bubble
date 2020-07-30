import React, { useState, useEffect } from "react";
import Emoji from "./Emoji";
import EmojiButton from "./EmojiButton";
import EmojiBoardWrapper from "./EmojiBoardWrapper";
const EmojiBoard = () => {
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

  const randomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const randomPosorNeg = (max, min) => {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumber *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
    return randomNumber;
  };
  const handleEmojiClick = (label, symbol) => {
    setEmojiQueue([
      ...emojiQueue,
      {
        label,
        symbol,
        size: randomNumber(3, 2),
        left: randomNumber(100, 0),
        one: randomPosorNeg(200, 50),
        two: randomPosorNeg(200, 50),
      },
    ]);
    //key
  };

  const handleEmojiKeyDown = (e, label, symbol) => {
    if (e.key === "Enter") {
      setEmojiQueue([
        ...emojiQueue,
        {
          label,
          symbol,
          size: randomNumber(3, 2),
          left: randomNumber(100, 0),
          one: randomPosorNeg(200, 50),
          two: randomPosorNeg(200, 50),
        },
      ]);
    }
  };
  const [emojiQueue, setEmojiQueue] = useState([]);

  useEffect(() => {
    console.log(emojiQueue);
  }, [emojiQueue]);
  return (
    <div>
      <EmojiBoardWrapper>
        {emojis.map(({ label, symbol }, i) => {
          return (
            <EmojiButton
              key={i}
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

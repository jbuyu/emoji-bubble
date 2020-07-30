import React, { useState, useEffect } from "react";
import Emoji from "./Emoji";
import EmojiButton from "./EmojiButton";
import EmojiBubble from "./EmojiBubble";
import EmojiBoardWrapper from "./EmojiBoardWrapper";
import { generate } from "short-id";
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
        id: generate(),
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
          id: generate(),
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
      <div>
        {emojiQueue.map(({ id, label, symbol, size, left, one, two }) => (
          <EmojiBubble
            key={id}
            label={label}
            symbol={symbol}
            size={size}
            left={left}
            one={one}
            two={two}
          />
        ))}
      </div>
    </div>
  );
};

export default EmojiBoard;

import styled from "styled-components";
import EmojiWrapper from "./EmojiWrapper";
import React, { PureComponent } from "react";

const Emoji = styled(EmojiWrapper)`
  font-size: ${({ size }) => (size ? size : "1rem")};
`;
export default Emoji;

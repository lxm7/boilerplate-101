import styled, { css } from "styled-components";

export const List = styled.ul`
  height: 20px;
  overflow: hidden;
  width: min-content;
  &.isOnHover {
    text-decoration: underline;
    cursor: pointer;
  }

  > li {
    list-style-type: circle;
  }
  > li.isOnHover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  &.open {
    height: auto;
    > li {
      list-style-type: disc;
    }
  }
`;

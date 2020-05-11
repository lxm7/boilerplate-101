import React, { ReactNode } from "react";
import styled from "styled-components";

/* Grid layout - https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/ */

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    flex: 1;
  }
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    flex: 1;
  }
`;

const Side = styled.div`
  flex: 0 0 12em;
  /* Put on left side */
  order: -1;

  @media (min-width: 768px) {
    /* 12em is the width of the columns */
    flex: 0 0 12em;
  }
`;

const Main = styled.div`
  flex: 1;
`;

type Props = {
  children: ReactNode;
};

const HolyGrail: React.SFC<Props> = ({ children }: Props) => (
  <Wrapper>
    <Body>{children}</Body>
  </Wrapper>
);

export const HolyGrailSide: React.SFC<Props> = ({ children }: Props) => (
  <Side>{children}</Side>
);

export const HolyGrailMain: React.SFC<Props> = ({ children }: Props) => (
  <Main>{children}</Main>
);

export default React.memo(HolyGrail);

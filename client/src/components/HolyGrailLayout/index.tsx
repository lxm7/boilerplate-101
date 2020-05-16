import React, { ReactNode } from "react";
import styled from "styled-components";

/* Grid layout CSS taken from https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/ */

interface SizeWidth {
  size: number | undefined;
}

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

const Side = styled("div")<SizeWidth>`
  flex: 0 0 ${props => props.size || 16}em;
  /* Put on left side */
  order: -1;

  @media (min-width: 768px) {
    /* props.size is the width of the side column */
    flex: 0 0 ${props => props.size || 16}em;
  }
`;

const Main = styled.div`
  flex: 1;
`;

type Props = {
  children: ReactNode;
  size?: number | undefined;
};

const HolyGrail: React.SFC<Props> = ({ children }: Props) => (
  <Wrapper>
    <Body>{children}</Body>
  </Wrapper>
);

export const HolyGrailSide: React.SFC<Props> = ({ size, children }: Props) => (
  <Side size={size}>{children}</Side>
);

export const HolyGrailMain: React.SFC<Props> = ({ children }: Props) => (
  <Main>{children}</Main>
);

export default React.memo(HolyGrail);

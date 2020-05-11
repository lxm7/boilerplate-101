import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { createGlobalStyle } from "styled-components";

const transitionClassName = "slide";
const duration = 200;
const slidePercent = 10;

const GlobalStyle = createGlobalStyle`
.${transitionClassName}-enter {
  opacity: 0;
  transform: translateX(${slidePercent}%);

  /* add flag for styled components for overlapp? */
  position: relative;
  z-index: 1;
}
.${transitionClassName}-enter-active {
  opacity: 1;
  transform: translateX(0%);
}
.${transitionClassName}-exit {
  opacity: 1;
  transform: translateX(0%);

  /* add flag for styled components for absolute overlapp? */
  position: absolute;
  top: 0;
  z-index: 0;

  /* keep page exactly the same whilst sliding out
  with full width and offset nav width on desktop */
  width: 100%;
  left: 192px;
}
.${transitionClassName}-exit-active {
  opacity: 0;
  transform: translateX(-${slidePercent}%);
}
.${transitionClassName}-enter-active,
.${transitionClassName}-exit-active {
  transition: all ${duration}ms cubic-bezier(0.390, 0.575, 0.565, 1.000); /* easeOutSine */
}
`;

const PageTransition = ({ pageKey, classNames, timeout, children }) => {
  return (
    <>
      <GlobalStyle />
      <TransitionGroup
        childFactory={child =>
          React.cloneElement(child, {
            classNames,
            timeout
          })
        }
      >
        <CSSTransition key={pageKey} addEndListener={() => null}>
          <div>{children}</div>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default PageTransition;

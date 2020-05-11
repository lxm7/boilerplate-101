import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./index.css";

const PageTransition = ({ pageKey, classNames, timeout, children }) => {
  return (
    <TransitionGroup
      childFactory={child =>
        React.cloneElement(child, {
          classNames,
          timeout
        })
      }
    >
      <CSSTransition key={pageKey} classNames={classNames} timeout={timeout}>
        <div>{children}</div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default PageTransition;

import React, { forwardRef, useRef } from "react";
import { createPortal } from "react-dom";

import {
  ContainerReturnType,
  ContainerType,
  PortalProps
} from "./ModalPropType";

const createContainer = (container?: ContainerType): ContainerReturnType => {
  if (typeof container === "string") {
    return document.querySelector(container) || document.body;
  }
  if (typeof container === "function") {
    return container();
  }
  return document.body;
};

export type TPortalRef = {
  destroy: () => void;
};

export const Portal = forwardRef<TPortalRef, PortalProps>(
  ({ visible, children, container }, ref) => {
    const targetContainer = createContainer(container);
    const containerRef = useRef<HTMLDivElement | null>(null);

    if (!visible || !children) {
      return null;
    }

    React.useImperativeHandle(ref, () => ({
      destroy: () => {
        console.log("destroy", containerRef.current);
        if (containerRef && containerRef.current)
          targetContainer.removeChild(containerRef.current);
      }
    }));

    return createPortal(
      <div className="ProtalWrapper" ref={containerRef}>
        {children}
      </div>,
      targetContainer
    );
  }
);

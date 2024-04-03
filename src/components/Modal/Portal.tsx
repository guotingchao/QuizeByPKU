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
  return null;
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
        if (containerRef && containerRef.current && targetContainer) {
          targetContainer.removeChild(containerRef.current);
        } else {
          containerRef.current?.remove();
        }
      }
    }));

    return createPortal(
      <div className="ProtalWrapper" ref={containerRef}>
        {children}
      </div>,
      targetContainer ?? document.body
    );
  }
);

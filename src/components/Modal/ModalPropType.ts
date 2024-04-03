import React, { HTMLAttributes, ReactNode } from "react";

// Modal
export type MaskProps = {
  mask?: boolean;
  maskClick?: (e: React.SyntheticEvent) => void;
};

export interface ModalWrapperProps
  extends Partial<HTMLAttributes<HTMLDialogElement>> {
  handleKeyDown?: (e: React.KeyboardEvent<HTMLDialogElement>) => void;
  ref: React.RefObject<HTMLDialogElement>;
  visible?: boolean;
}

export interface ModalContentProps {
  children?: any;
}

export interface ModalHeadProps {
  title?: ReactNode | string;
  onClose: VoidFunction;
}

export interface ModalProps {
  onClose?: () => void;
  container?: ContainerType;
  onOpen?: () => void;
  useEsc?: boolean; //是否可以使用esc键关闭
  open?: boolean; //是否打开
  title?: ReactNode;
  footer?: ReactNode;
  mask?: boolean;
  maskClose?: boolean; // 点击遮罩层是否关闭
  children?: any;
  destroyOnClose?: boolean; // 关闭时销毁
}

// Portal
export type ContainerReturnType = Element | DocumentFragment | null;
export type ContainerType = string | (() => ContainerReturnType);
export interface PortalProps {
  children: any;
  visible?: boolean;
  container?: ContainerType;
}

import { Transition } from "@headlessui/react";
import {
  FC,
  forwardRef,
  KeyboardEvent,
  useEffect,
  useRef,
  useState
} from "react";
import { Globals } from "src/common";

import { ModalContext } from "./ModalContext";
import {
  MaskProps,
  ModalContentProps,
  ModalProps,
  ModalWrapperProps
} from "./ModalPropType";
import { Portal, TPortalRef } from "./Portal";

// Mask
const Mask = forwardRef<any, MaskProps>(
  ({ mask, maskClick }: MaskProps, ref) => (
    <Transition
      show={mask}
      ref={ref}
      onClick={maskClick}
      enter="ease-out duration-300"
      enterFrom="opacity-0 scale-75"
      enterTo="opacity-100 scale-100"
      leave="ease-in duration-200 delay-50"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-75"
      className="fixed inset-0 bg-black/20 w-screen h-screen z-[1050]"
    />
  )
);

// ModalWrapper
const ModalWrapper = forwardRef<HTMLDialogElement, ModalWrapperProps>(
  ({ children, visible, onKeyDown }, ref) => (
    <Transition
      tabIndex={-1}
      as="dialog"
      open={visible}
      ref={ref}
      onKeyDown={onKeyDown}
      show={visible}
      enter="transform transition duration-300 ease-out delay-50"
      enterFrom="opacity-0 scale-0"
      enterTo="opacity-100 scale-100"
      leave="transform transition duration-400 ease-in-out"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-0"
      className="fixed inset-0 w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all z-[1050]"
    >
      {children}
    </Transition>
  )
);

// Content
const Content: FC<ModalContentProps> = ({ children }) => children;

// Modal
const Modal: FC<ModalProps> = (props) => {
  const {
    open = false,
    useEsc = true,
    mask = true,
    maskClose = true,
    onOpen,
    onClose,
    destroyOnClose = false,
    children
  } = props;

  const portalRef = useRef<TPortalRef>(null);
  const wrapperRef = useRef<HTMLDialogElement>(null);
  const maskVisible = open && mask;
  const [innerOpen, setInnerOpen] = useState(false);

  // warpper keydown event
  const handleWarpperKeyDown = (e: KeyboardEvent<HTMLDialogElement>) => {
    if ((useEsc && e.code === "Escape") || e.keyCode === 27) {
      setInnerOpen(false);
      props.onClose?.();
    }
  };

  // mask click event
  const handleMaskClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    if (maskClose) {
      setInnerOpen(false);
      onClose?.();
    }
  };

  useEffect(() => {
    if (open !== innerOpen) setInnerOpen(open);
    if (open) {
      onOpen?.();
    } else {
      onClose?.();
    }
  }, [open, useEsc]);

  useEffect(() => {
    console.log("wrapperRef", wrapperRef.current);
    if (useEsc && wrapperRef.current) {
      wrapperRef.current.focus();
    }
  }, [wrapperRef]);

  return (
    <ModalContext.Provider value={props}>
      <Portal visible ref={portalRef}>
        <Mask mask={maskVisible} maskClick={handleMaskClick} />
        <ModalWrapper
          ref={wrapperRef}
          visible={innerOpen}
          onKeyDown={handleWarpperKeyDown}
        >
          <Content>{children}</Content>
        </ModalWrapper>
      </Portal>
    </ModalContext.Provider>
  );
};

Modal.displayName = `${Globals.componenetPrefixName}_Modal`;

export default Modal;

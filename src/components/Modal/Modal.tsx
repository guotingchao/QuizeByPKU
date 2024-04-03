import { Transition } from "@headlessui/react";
import {
  FC,
  forwardRef,
  KeyboardEvent,
  useEffect,
  useRef,
  useState
} from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Globals } from "src/common";

import { ModalContext } from "./ModalContext";
import {
  MaskProps,
  ModalContentProps,
  ModalHeadProps,
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
      leave="ease-in duration-300 delay-50"
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
      leave="transform transition duration-300 ease-in-out"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-0"
      className="z-[1050] fixed translate-y-6 transform px-2 py-3 shadow-2xl transition-all rounded-xl"
    >
      {children}
    </Transition>
  )
);

// Content
const Content: FC<ModalContentProps> = ({ children }) => children;

// Head
const Head: FC<ModalHeadProps> = ({ title, onClose }) => (
  <div className="w-full flex justify-between px-2 py-3">
    <h1 className="font-sans font-black text-pretty">{title || "New Modal"}</h1>
    <AiOutlineCloseCircle
      onClick={onClose}
      className="text-gray-400 hover:text-gray-700 hover:cursor-pointer"
      size={22}
    />
  </div>
);

// Modal
const Modal: FC<ModalProps> = (props) => {
  const {
    title,
    open = false,
    useEsc = true,
    mask = true,
    maskClose = true,
    container,
    onOpen,
    onClose,
    destroyOnClose: _ = false,
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
      internalClose();
    }
  };

  // internel close event
  const internalClose = () => {
    setInnerOpen(false);
    onClose?.();
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
    if (useEsc && wrapperRef.current) {
      wrapperRef.current.focus();
    }
  }, [wrapperRef]);

  return (
    <ModalContext.Provider value={props}>
      <Portal visible ref={portalRef} container={container}>
        <div className="relative w-auto">
          <Mask mask={maskVisible} maskClick={handleMaskClick} />
          <ModalWrapper
            ref={wrapperRef}
            visible={innerOpen}
            onKeyDown={handleWarpperKeyDown}
          >
            <Head title={title} onClose={internalClose} />
            <Content>{children}</Content>
          </ModalWrapper>
        </div>
      </Portal>
    </ModalContext.Provider>
  );
};

Modal.displayName = `${Globals.componenetPrefixName}_Modal`;

export default Modal;

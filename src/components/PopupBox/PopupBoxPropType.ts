export interface PopupBoxProps {
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  onConfirm?: () => void;
  onCancel?: () => void;
  destroyOnClose?: boolean;
  mask?: boolean;
  maskClose?: boolean;
}

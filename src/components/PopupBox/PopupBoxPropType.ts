export interface PopupBoxProps {
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  onConfirm?: () => void;
  onCancel?: () => void;
  destroyOnClose?: boolean;
  mask?: boolean;
  maskClose?: boolean;
  categories?: CategoriesType[];
  title: string;
}
export interface PopupBoxAddItemProps {
  show: boolean;
  onModalClose: VoidFunction;
  onAddCategoriesSubItem: (data: any) => void;
}

export type CategoriesItem = {
  name: string;
  url: string;
  icon?: string;
};

export type CategoriesType = {
  name: string;
  index: number;
  items: CategoriesItem[];
};

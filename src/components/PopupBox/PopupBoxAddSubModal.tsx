import { Dialog, Transition } from "@headlessui/react";
import { FC, Fragment, memo, useEffect, useState } from "react";

import { PopupBoxAddItemProps } from "./PopupBoxPropType";

export const PopupBoxAddSubModal: FC<PopupBoxAddItemProps> = memo(
  ({ show, onModalClose, onAddCategoriesSubItem }: PopupBoxAddItemProps) => {
    const [isOpen, setIsOpen] = useState(show);

    const closeModal = () => {
      setIsOpen(false);
      onModalClose?.();
    };

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data: any = {};
      for (const [key, value] of formData.entries()) {
        data[key] = value as string;
      }
      onAddCategoriesSubItem(data);
      onModalClose();
    };

    useEffect(() => {
      setIsOpen(show);
    }, [show]);

    return (
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[1080]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-sm  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    增加分类
                  </Dialog.Title>
                  <form onSubmit={handleSubmit}>
                    <div className="mt-2 space-x-2">
                      <label>网站名称:</label>
                      <input
                        name="name"
                        required
                        placeholder="请输入网站名称"
                        title="网站名称"
                        className="ring"
                      />
                    </div>
                    <div className="mt-2 space-x-2">
                      <label>网站地址:</label>
                      <input
                        name="url"
                        required
                        type="url"
                        placeholder="请输入网站地址"
                        title="网站地址"
                        className="ring"
                      />
                    </div>

                    <div className="mt-4 flex justify-end">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        提交
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
  }
);

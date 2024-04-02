import { Modal } from "@components/Modal";
import { Tab } from "@headlessui/react";
import { FC, useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";

import { PopupBoxProps } from "./PopupBoxPropType";

export const PopupBox: FC<PopupBoxProps> = (props) => {
  const { open, ...reset } = props;
  const [show, setShow] = useState(open);

  useEffect(() => {
    setShow(open);
  }, [open]);

  return (
    <Modal {...reset} open={show} maskClose>
      <div className="w-full max-w-md">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            {Array.from(new Array(3)).map((_, index) => (
              <Tab
                key={index}
                className="text-blue-100 hover:bg-white/[0.12] hover:text-white w-full rounded-lg py-2.5 text-sm font-medium leading-5 ring-white/60 ring-offset-2"
              >
                Tab {index + 1}
              </Tab>
            ))}

            <Tab className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2">
              <AiFillPlusCircle />
            </Tab>
          </Tab.List>
          <Tab.Panel className="ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2">
            <p>Tab 1 Content</p>
          </Tab.Panel>
          <Tab.Panel>
            <p>Tab 2 Content</p>
          </Tab.Panel>
          <Tab.Panel>
            <p>Tab 3 Content</p>
          </Tab.Panel>
        </Tab.Group>
      </div>
    </Modal>
  );
};

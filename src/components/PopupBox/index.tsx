import { Modal } from "@components/Modal";
import { Tab, Transition } from "@headlessui/react";
import classNames from "classnames";
import { FC, Fragment, memo, useEffect, useRef, useState } from "react";
import {
  AiFillPlusCircle,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlinePlusSquare
} from "react-icons/ai";

import { PopupBoxAddSubModal } from "./PopupBoxAddSubModal";
import { CategoriesType, PopupBoxProps } from "./PopupBoxPropType";

type PopupBoxEditorType = "EDIT" | "REMOVE";

export const PopupBox: FC<PopupBoxProps> = (props) => {
  //props
  const { open, categories, ...reset } = props;
  // inner state
  const [show, setShow] = useState(open);
  const [editorIndex, setEditorIndex] = useState<number | null>(null);
  const [menuContextIndex, setMenuContextIndex] = useState<number | null>(null);
  const [positionCompensation, setPositionCompensation] = useState(0);
  const [currentEditValue, setCurrentEditValue] = useState<string>("");
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  // data state
  const [localCategories, setLocalCategories] = useState<CategoriesType[]>(
    categories || []
  );

  //ref
  const tabsRef = useRef<HTMLDivElement>(null);

  // handlers
  const handleShowContextMenu = (index: number, e: React.SyntheticEvent) => {
    e.preventDefault();
    setMenuContextIndex(index);
    setPositionCompensation(tabsRef.current?.scrollLeft || 0);
  };

  const closeMenuPopup = () => {
    setMenuContextIndex(null);
  };

  const removeCategory = (index: number) => {
    setLocalCategories((prev) => {
      const newCategories = [...prev];
      newCategories.splice(index, 1);
      return newCategories;
    });
  };

  const handlePopEditor = (action: PopupBoxEditorType) => {
    if (menuContextIndex === null) return;
    if (action === "REMOVE") {
      removeCategory(menuContextIndex);
    } else {
      setActiveTab(menuContextIndex);
      setEditorIndex(menuContextIndex);
      setCurrentEditValue(localCategories[menuContextIndex].name);
    }
  };

  const PopEditor = memo<{ show: boolean }>(({ show }: { show: boolean }) => (
    <Transition
      as={Fragment}
      show={show}
      appear
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 -translate-y-full"
      enterTo="opacity-100 translate-y-1"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 -translate-y-full"
      leaveTo="opacity-0  translate-y-1"
    >
      <div
        className="fixed inline-block  translate-y-l z-[1050] bg-white shadow-2xl rounded-md min-w-[80px] overflow-hidden"
        style={{
          translate: `-${positionCompensation + 20}px`
        }}
      >
        <div
          className=" p-2 flex items-center hover:bg-violet-500 hover:text-white w-full"
          onClick={() => handlePopEditor("EDIT")}
        >
          <AiOutlineEdit className="mr-2 text-violet-200 hover:text-violet-100" />
          编辑
        </div>

        <div
          className=" p-2 flex  items-center hover:bg-violet-500 hover:text-white w-full"
          onClick={() => handlePopEditor("REMOVE")}
        >
          <AiOutlineDelete className="mr-2 text-violet-200 hover:text-violet-100" />
          删除
        </div>
      </div>
    </Transition>
  ));

  const PopupBoxContent = () => (
    <Tab.Panels className="pt-5 min-h-72">
      {localCategories.map((categoriesItem, index) => (
        <Tab.Panel key={index} className="w-full flex flex-row flex-wrap">
          <div className="grid grid-cols-6 gap-5">
            {categoriesItem.items.map((item, index) => (
              <div
                key={`${item.name}_${index}`}
                onClick={() => window.open(item.url, "_blank")}
                className="text-center hover:border-b-blue-500 hover:cursor-pointer"
              >
                <img
                  src={item.icon}
                  className="p-3 rounded-md w-20 h-20 bg-gray-200 shadow hover:ring-1"
                />
                <p className="text-gray-700 py-2 text-sm font-semibold">
                  {item.name}
                </p>
              </div>
            ))}

            <div
              className="flex flex-col justify-center items-center text-center hover:border-b-blue-500 hover:cursor-pointer"
              onClick={() => {
                setAddModalVisible(true);
              }}
            >
              <AiOutlinePlusSquare className="rounded-md p-3 w-20 h-20 shadow text-gray-500 bg-gray-200" />
              <p className="text-gray-700 py-2 text-sm font-semibold">添加</p>
            </div>
          </div>
        </Tab.Panel>
      ))}
    </Tab.Panels>
  );

  const handleAddCategory = () => {
    setLocalCategories((prev) => {
      setCurrentEditValue("新分类");
      setActiveTab(prev.length);
      setEditorIndex(prev.length);
      return [
        ...prev,
        {
          name: "新分类",
          index: prev.length,
          items: []
        }
      ];
    });
  };

  const handleCategoryEdit = (index: number) => {
    setLocalCategories((prev) => {
      const newCategories = [...prev];
      newCategories[index].name = currentEditValue;
      return newCategories;
    });
    setEditorIndex(null);
    setCurrentEditValue("");
  };

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  const handleAddCategorySubItem = (data: any) => {
    setLocalCategories((prev) => {
      const newCategories = [...prev];
      newCategories[activeTab].items.push({
        ...data,
        icon: `${data.url}/favicon.ico`
      });
      return newCategories;
    });
  };

  useEffect(() => {
    if (menuContextIndex !== null) {
      window.addEventListener("click", closeMenuPopup);
    }
    return () => {
      window.removeEventListener("click", closeMenuPopup);
    };
  });

  useEffect(() => {
    if (localStorage && localCategories.length !== 0) {
      localStorage.setItem("categories", JSON.stringify(localCategories));
    }
  }, [localCategories]);

  useEffect(() => {
    setShow(open);
    setLocalCategories(categories || []);
  }, [open, categories]);
  return (
    <Modal
      {...reset}
      open={show}
      container={() => document.querySelector("#app")}
    >
      <div className="p-3 w-[626px] max-w-screen-md">
        <Tab.Group onChange={handleTabChange} selectedIndex={activeTab}>
          <div className="max-w-max flex justify-between items-center relative">
            <Tab.List
              className="flex flex-row space-x-2 overflow-x-scroll"
              ref={tabsRef}
            >
              {localCategories &&
                localCategories.map((categoriesItem, index) => (
                  <Tab
                    title={categoriesItem.name}
                    key={`${categoriesItem.name}_${index}`}
                    className={({ selected }) =>
                      classNames(
                        "bg-white text-gray-700  py-1 text-base font-medium leading-5 ring-0 outline-none border-b min-w-[100px] relative ",
                        selected
                          ? "border-b-blue-500 text-blue-400"
                          : "hover:bg-gray-200"
                      )
                    }
                  >
                    {index === editorIndex ? (
                      <input
                        type="text"
                        autoFocus
                        value={currentEditValue}
                        onBlur={() => {
                          handleCategoryEdit(index);
                        }}
                        className="w-full text-base font-medium truncate cursor-pointer ring-0 outline-none  h-full"
                        onChange={(v) =>
                          setCurrentEditValue(v.currentTarget.value)
                        }
                        onKeyUp={(e) => {
                          if (e.key === "Enter") {
                            handleCategoryEdit(index);
                          }
                        }}
                      />
                    ) : (
                      <div
                        className="w-full px-3 py-2 text-base font-medium truncate cursor-pointer"
                        onContextMenu={(e: React.SyntheticEvent) =>
                          handleShowContextMenu(index, e)
                        }
                        onDoubleClick={() => {
                          setEditorIndex(index);
                          setCurrentEditValue(categoriesItem.name);
                        }}
                      >
                        {categoriesItem.name}
                      </div>
                    )}
                    <PopEditor show={menuContextIndex === index} />
                  </Tab>
                ))}
            </Tab.List>
            {localCategories.length < 10 && (
              <div
                title="addCategory"
                className="float right-0 flex justify-center items-center text-gray-500  rounded-none text-base font-medium leading-5 ring-0 outline-none px-2 text-center hover:cursor-pointer hover:text-gray-800"
              >
                <AiFillPlusCircle
                  size={24}
                  onClick={() => handleAddCategory()}
                />
              </div>
            )}
          </div>
          <PopupBoxContent />
        </Tab.Group>
      </div>
      <PopupBoxAddSubModal
        onAddCategoriesSubItem={handleAddCategorySubItem}
        show={addModalVisible}
        onModalClose={() => setAddModalVisible(false)}
      />
    </Modal>
  );
};

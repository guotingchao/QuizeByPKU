import "./index.css";

import Button from "@components/Button";
import { PopupBox } from "@components/PopupBox";
import { CategoriesType } from "@components/PopupBox/PopupBoxPropType";
import { FC, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

const cacheKey = "categories";
const DemoData: CategoriesType[] = [
  {
    name: "新闻",
    index: 0,
    items: [
      {
        name: "南方周末",
        url: "https://www.infzm.com",
        icon: "https://www.infzm.com/favicon.ico"
      },
      {
        name: "澎湃",
        url: "https://www.thepaper.cn",
        icon: "https://www.thepaper.cn/favicon.ico"
      },
      {
        name: "搜狐",
        url: "https://www.sohu.com",
        icon: "https://statics.itc.cn/web/static/images/pic/sohu-logo/favicon.ico"
      },
      {
        name: "知乎",
        url: "https://www.zhihu.com",
        icon: "https://www.zhihu.com/favicon.ico"
      }
    ]
  },
  {
    name: "科技",
    index: 1,
    items: [
      {
        name: "36kr",
        url: "https://36kr.com",
        icon: "https://36kr.com/favicon.ico"
      },
      {
        name: "TechCrunch",
        url: "https://TechCrunch.com",
        icon: "https://TechCrunch.com/favicon.ico"
      },
      {
        name: "Wired",
        url: "https://wired.com",
        icon: "https://wired.com/favicon.ico"
      }
    ]
  },
  {
    name: "体育",
    index: 2,
    items: [
      {
        name: "NBA",
        url: "https://nba.com",
        icon: "https://nba.com/favicon.ico"
      }
    ]
  }
];
const App: FC = () => {
  const [visible, setVisible] = useState(true);
  const [cacheCategories, setCacheCategories] = useState<CategoriesType[]>();

  const handleClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const cache = localStorage.getItem(cacheKey);
      if (cache) {
        setCacheCategories(JSON.parse(cache));
      } else {
        setCacheCategories(DemoData);
      }
    };

    window.addEventListener("localStorageChange", handleStorageChange);

    // 初始化加载
    handleStorageChange();

    return () => {
      window.removeEventListener("localStorageChange", handleStorageChange);
    };
  }, []);

  return (
    <>
      <section
        id="app"
        className="relative bg-gradient-to-r from-sky-400 to-indigo-500 h-screen w-screen"
      >
        <Button
          loading={visible}
          onClick={() => {
            setVisible(!visible);
          }}
          className="btn m-10"
        >
          Click Me
        </Button>
      </section>
      <PopupBox
        open={visible}
        onClose={handleClose}
        title="新增网站分类"
        maskClose={false}
        categories={cacheCategories}
      />
    </>
  );
};

const root = createRoot(document.querySelector("#root")!);
root.render(<App />);

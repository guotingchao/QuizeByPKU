import "./index.css";

import Button from "@components/Button";
import { PopupBox } from "@components/PopupBox";
import { FC, useState } from "react";
import { createRoot } from "react-dom/client";

const App: FC = () => {
  const [visible, setVisible] = useState(false);

  const handleClose = () => {
    setVisible(false);
  };
  return (
    <>
      <section className="relative flex flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-sky-400 to-indigo-500 h-screen w-screen">
        <Button
          loading={visible}
          onClick={() => {
            setVisible(!visible);
          }}
        >
          Click Me
        </Button>
      </section>
      <PopupBox open={visible} onClose={handleClose} />
    </>
  );
};

const root = createRoot(document.querySelector("#root")!);
root.render(<App />);

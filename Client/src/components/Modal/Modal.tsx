import * as React from "react";
import Modal from "react-modal";

export interface IPopupProps {
  isModalOpen: boolean;
  closePopup: (isOpen: boolean) => void;
  children: JSX.Element;
}
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "80%",
  },
};

export default function Popup(props: IPopupProps) {
  const { isModalOpen, closePopup } = props;
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current!.contains(event.target)) {
        closePopup(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  return (
    <Modal isOpen={isModalOpen} style={customStyles}>
      <div style={{ width: "100%", height: "100%" }} ref={wrapperRef}>
        {props.children}
      </div>
    </Modal>
  );
}

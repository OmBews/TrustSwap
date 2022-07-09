import { Modal } from "react-bootstrap";
import style from "../styles/popup.module.scss";

const Popup = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  overlay = true,
  titleDivider = false,
  closeCross = false,
  loading,
  ...props
}) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={onClose}
      show={isOpen}
      className={style.popup}
    >
      {title ? (
        <div
          className={`${style.popupHeader} ${
            titleDivider ? style.borderBottom : ""
          }`}
        >
          <div className={style.title}>{title}</div>

          {closeCross && (
            <button onClick={onClose} className={style.closebtn}>
              <span>
                <img src="/cross.svg" />
              </span>
            </button>
          )}
        </div>
      ) : null}

      {description && (
        <>
          <Text fontSize={"lg"}>{description}</Text>
          <Spacer space={"lg"} />
        </>
      )}
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};
export { Popup };

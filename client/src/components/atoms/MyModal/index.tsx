import * as React from "react";
import { Modal, Button } from "reactstrap";

interface MyModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const MyModal: React.FC<MyModalProps> = ({
  open,
  onClose,
  title,
  children,
}) => {
  return (
    <Modal className="modal-dialog-centered" isOpen={open} toggle={onClose}>
      <div className="modal-header">
        <h3 className="modal-title" id="exampleModalLabel">
          {title}
        </h3>
        <button
          aria-label="Close"
          className="close"
          data-dismiss="modal"
          type="button"
          onClick={onClose}
        >
          <span aria-hidden={true}>×</span>
        </button>
      </div>
      <div className="modal-body">{children}</div>
      <div className="modal-footer">
        <Button
          color="secondary"
          data-dismiss="modal"
          type="button"
          onClick={onClose}
        >
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default MyModal;

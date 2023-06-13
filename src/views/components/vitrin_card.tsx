import {
  HTMLAttributes,
  memo,
  ReactElement,
  useCallback,
  MouseEvent,
  ChangeEvent,
  useState,
} from "react";
import "react-circular-progressbar/dist/styles.css";
import LoadingSpinner from "./loading_spinner";
// import ImageTest from '../../assets/images/profile-user.svg'; // with import
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  Input,
} from "reactstrap";
interface Props extends HTMLAttributes<HTMLElement> {
  details?: any;
  loadingPayment?: boolean;
  onClick?: any;
}

export function VitrinCard({
  details,
  loadingPayment,
  onClick,
}: Props): ReactElement {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <>
      <div className="vitrin-card">
      <Modal isOpen={modal} toggle={toggle} centered>
        <ModalHeader className="vitrin-card-modal-header" toggle={toggle}></ModalHeader>
        <ModalBody className="vitrin-card-modal-body">
          <InputGroup>
            <Button className="vitrin-card-modal-body-btn">اعمال کد تخفیف</Button>
            <Input className="vitrin-card-modal-body-input"/>
          </InputGroup>
        </ModalBody>
        <ModalFooter className="vitrin-card-modal-footer">
          <Button
            className="vitrin-card-modal-footer-btn handle-loading-btn"
            onClick={() => onClick()}
          >
            {loadingPayment ? <LoadingSpinner /> : "پرداخت"}
          </Button>{" "}
        </ModalFooter>
      </Modal>
       {/* <img src={ImageTest} /> */}
        {details?.features &&
              details?.features?.map((item: any) => {
                return (
                  <div className="option-list">
                  <div className="option-list-item">
                    <span className="option-list-item-circle"></span>
                    <span className="option-list-item-title">
                     {item}
                    </span>
                  </div>
                  </div>

                  )
              })}

        <button className="vitrin-card-btn" onClick={toggle}>
          حذف
        </button>
      </div>
    </>
  );
}
export default memo(VitrinCard);

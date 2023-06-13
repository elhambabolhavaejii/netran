import {
    HTMLAttributes,
    ReactElement,
    useState
    
  } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
  import "react-circular-progressbar/dist/styles.css";
  import MyButton from "./button";
  interface Props extends HTMLAttributes<HTMLElement> {
    icon:any;
    title:any;
    details: any;
    isOpen:boolean;
    onClick?: any;
    
  }

  export function SubmissionAlert({
    icon, 
    title,
    details,
    isOpen,
    onClick,
    
  }: Props): ReactElement {
    const [modal, setModal] = useState(isOpen);
    const handleClose = () => {
      setModal(false);
    };
    
    return (
        <Modal
        open={modal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="submission-alert">
          
        <div>
            {icon}
        </div>
      <h4 className="name-card-section" >
           {title}
      </h4>

      <span className="detail-card-section">
          {details}
      </span> 
      <div className="d-flex w-100">
          <MyButton
                    myStyle="submit-btn"
                    loading={false}
                    onClick={onClick}
                    title="بله مطمنم!"
                  />
                  <MyButton
                    myStyle="submit-btn"
                    loading={false}
                    onClick={handleClose}
                    title="انصراف"
                  />
        </div>
        </Box>
      </Modal>
    );
  }
  export default SubmissionAlert;
  
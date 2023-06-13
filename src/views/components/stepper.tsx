import {
    memo,
    ReactElement,
    useCallback,
    MouseEvent,
    ButtonHTMLAttributes
} from "react";
import { useNavigate } from "react-router-dom";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    step:number;
}

export function Stepper({ step  }: Props): ReactElement {

   

    return (
       <div className="stepper">

        <div className="d-flex flex-column align-items-center">
        <div className={step === 1 ? "step" : step > 1 ? "pre-step" : "next-step"}>
            1
        </div>
        <h2 className="title">
        اطلاعات شخصی
        </h2>
        </div>
        <span className="divider"></span>
        <div className="d-flex flex-column align-items-center">
        <div className={step === 2 ? "step" : step > 2 ? "pre-step" : "next-step"}>
            2
        </div>
        <h2 className="title">
            اپلود فایل 
        </h2>
        </div>
        <span className="divider"></span>
        <div className="d-flex flex-column align-items-center">
        <div className={step === 3 ? "step" : step > 3 ? "pre-step" : "next-step"}>
            3
        </div>
        <h2 className="title">
        اطلاعات بانکی
        </h2>
        </div>

       </div>
    )
}

export default memo(Stepper);
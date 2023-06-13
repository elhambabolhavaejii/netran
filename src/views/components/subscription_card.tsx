import { HTMLAttributes, memo, ReactElement, useCallback, MouseEvent, ChangeEvent, useState } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface Props extends HTMLAttributes<HTMLElement> {
    day: number;
    date:string;
    measure:number;
    title:string;
}

export function SubScriptionCard({ day, date , measure = 0 , title}: Props): ReactElement {

    return (
        <div className="subScription-card">
            <div className="d-flex flex-column justify-content-around align-items-start">
            <span className="subScription-card-title">
                {title ? title : "اشتراک ماهانه "}
            </span>
            <span className="subScription-card-day">
                 باقی مانده {day}
            </span>
            <span className="subScription-card-date">
                 اتمام : {date}
            </span>
            </div>
            <CircularProgressbar strokeWidth={5} value={measure} text={`${measure}% `} />
        </div>
    )
}
export default memo(SubScriptionCard);
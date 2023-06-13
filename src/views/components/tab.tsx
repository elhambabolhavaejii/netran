import { HTMLAttributes, memo, ReactElement } from "react";
import 'react-circular-progressbar/dist/styles.css';

interface Props extends HTMLAttributes<HTMLElement> {
    title:string;
    isActive:boolean;
    onClick:any
}

export function Tab({title,isActive,onClick}: Props): ReactElement {

    return (
        <div className={isActive ? "tab-active" : "tab"} onClick={onClick}>
           {title}
        </div>
    )
}
export default memo(Tab);
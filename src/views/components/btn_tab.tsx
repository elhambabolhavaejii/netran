import { HTMLAttributes, memo, ReactElement} from "react";

interface Props extends HTMLAttributes<HTMLElement> {
    title:string;
    isActive:boolean;
    icon:ReactElement;
    onClick:any
}

export function BtnTab({title,isActive,icon,onClick}: Props): ReactElement {

    return (
        <div className={isActive ? "btn-tab-active" : "btn-tab"} onClick={onClick}>
           {icon}
           {title}
        </div>
    )
}
export default memo(BtnTab);
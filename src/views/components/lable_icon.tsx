import { memo, ReactElement , HTMLAttributes,
} from "react";
import 'react-circular-progressbar/dist/styles.css';
import { TbDeviceDesktopAnalytics } from "react-icons/tb";

interface Props extends HTMLAttributes<HTMLElement> {
    title: string;
  }
  
  export function LableIcon({
    title,
  }: Props): ReactElement {
       
    return (
        <div className="lable-icon">
            <TbDeviceDesktopAnalytics />
           <span className="lable-icon-title">
            {title}
           </span>
        </div>
    )
}
export default memo(LableIcon);
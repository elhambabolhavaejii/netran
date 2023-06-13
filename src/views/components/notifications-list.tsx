import { HTMLAttributes, memo, ReactElement} from "react";
import { Link } from "react-router-dom";
import { ButtonOutline } from "./button_outline";
import { NotificationCard } from "./notification_card";

interface Props extends HTMLAttributes<HTMLElement> {
    title:string;
    link:string;
    icon?:ReactElement;
    onClick?:any;
    children?:any
}

export function notificationsList({title,link,icon,onClick,children}: Props): ReactElement {

    return (
        <div className="notifications-list col-md-6 col-12">
        <div className="notifications-list-header">
          <span className="title">
              {title}
          </span>
          <Link to={link}>
          <ButtonOutline title={"مشاهده همه"} />
          </Link>
        </div>
        <div className="notifications-list-children">
        {children}
        </div>
      </div>
    )
}
export default memo(notificationsList);
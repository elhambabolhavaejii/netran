import {
  HTMLAttributes,
  memo,
  ReactElement
} from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  title: string;
  description: string;
  date: string;
}

export function NotificationCard({
  title,
  description,
  date,
}: Props): ReactElement {
  return (
    <div className="notification-card">
      <div className="notification-card-content">
        <span className="notification-card-content-title">{title}</span>
        {/* <span className="notification-card-content-date">{date}</span> */}
      </div>
      <p className="notification-card-description">{description}</p>
    </div>
  );
}
export default memo(NotificationCard);

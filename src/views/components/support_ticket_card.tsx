import { HTMLAttributes, memo, ReactElement} from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  icon:ReactElement;
  title:string;
  onClick:any;
  number:number;
  selected:Boolean
}

export function SupportTicketCard ({icon, title, onClick, number, selected}: Props):ReactElement {
    return(
        <div className={`${selected ? "active" : ""} support-ticket-card`} onClick={onClick}>
        <section className="img-card-section">
            {icon}
        </section>
      <section className="name-card-section" >
           {title}
      </section>

      <section className="number-card-section">
          {number}
      </section>
      </div>
    )
}

export default memo(SupportTicketCard);
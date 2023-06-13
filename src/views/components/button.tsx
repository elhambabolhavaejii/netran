import {
  memo,
  ReactElement,
  useCallback,
  MouseEvent,
  ButtonHTMLAttributes,
} from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./loading_spinner";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?:any;
  route?:string;
  myStyle?:string;
  loading?:boolean
  disabled?:boolean
}

export function ButtonComponent({ onClick,loading, icon, title,route , myStyle , disabled}: Props): ReactElement {
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);
      if(route){
        navigate(route)
      }
    },
    [onClick]
  );

  return (
    <button
      className={`button-component handle-loading-btn  ${myStyle}`}
      onClick={handleOnClick}
      disabled={disabled}
    >
      <h3 className="button-component-text">
        {loading ? 
        <LoadingSpinner />
        :
        <div>
           {icon && icon}
           {title}  
       
        </div>
        
        
        }
      </h3>
    </button>
  )
}

export default memo(ButtonComponent);

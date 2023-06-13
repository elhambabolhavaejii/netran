import {
  memo,
  ReactElement,
} from "react";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineFolderOpen, AiOutlineHome, AiOutlineNotification, AiOutlineStar} from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdPayment } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";
interface IMyProps  { 
  details?:any;
  isActive?:string

}
export function Header({isActive }: IMyProps): ReactElement {
  return (
    <div className="header-responsive">
      <Link to="/home">
      {/* <img src={LogoDark} className="w-100"/> */}
      </Link>
      
     
      <Link to="/home" className={isActive === "isHome" ? "header-responsive-item active mt-4" : "header-responsive-item mt-4"} >
        <span className="header-responsive-item-text"><AiOutlineHome/> پیشخوان  </span>
      </Link>
      <Link to="/price-management" className={isActive === "isPriceList" ? "header-responsive-item active" : "header-responsive-item"} >
        <span className="header-responsive-item-text"><IoPricetagsOutline/> لیست قیمت  </span>
      </Link>
      <Link to="/orders" className={isActive === "isOrders" ? "header-responsive-item active" : "header-responsive-item"} >
        <span className="header-responsive-item-text"><IoPricetagsOutline/>سفارشات</span>
      </Link>
      <Link to="/faq" className={isActive === "isFaq" ? "header-responsive-item active" : "header-responsive-item"}>
        <span className="header-responsive-item-text"><FaRegComment/> سوالات متداول  </span>
      </Link>
      <Link to="/payments-list" className={isActive === "isPayment" ? "header-responsive-item active" : "header-responsive-item"}>
        <span className="header-responsive-item-text" > <MdPayment/> پرداخت ها   </span>
      </Link>
      <Link to="/subscription" className={isActive ===  "isSubscription" ? "header-responsive-item active" : "header-responsive-item"}>
        <span className="header-responsive-item-text"><AiOutlineStar/> ارتقا اشتراک  </span>
      </Link>
      <Link to="/subscription-management" className={isActive === "isSubscriptionManagement" ? "header-responsive-item active" : "header-responsive-item"}>
        <span className="header-responsive-item-text" > <AiOutlineFolderOpen/> مدیریت اشتراک   </span>
      </Link>

      <Link to="/notifications" className={isActive === "isNotifications" ? "header-responsive-item active" : "header-responsive-item"}>
        <span className="header-responsive-item-text" > <AiOutlineNotification/> اعلانات  </span>
      </Link>
    </div>
  );
}
export default memo(Header);

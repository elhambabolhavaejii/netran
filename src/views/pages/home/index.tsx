
import { ButtonOutline , Header, LableIcon, NotificationCard , SubScriptionCard, ButtonTab, NotificationsList } from "../../components";

import HomeController from '../../controllers/home_controller';
import { Link } from 'react-router-dom';
import Chart from "react-apexcharts";
import {TiDocumentText} from "react-icons/ti";
import  SupportTicketCard  from "../../components/support_ticket_card";
import {BiUser} from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai"
class Home extends HomeController {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const {step} = this.state
    return (
      <div className="home">
    
<Header isActive="isHome"  details="توضیحات"/>
            <h1 className="home-title">پیشخوان</h1>
   <div className="row">
       <div className="col-md-3 col-sm-12 p-2">
       <SupportTicketCard title="همه" number={20} 
      selected={step === 0}  
      icon={<AiOutlineShoppingCart className="iconSize"/>} 
      id={"0"} onClick={()=> this.handleSteps(0)}/>
       </div>

       <div className="col-md-3 col-sm-12 p-2">
       <SupportTicketCard title="همه" number={20} 
      selected={step === 0}  
      icon={<AiOutlineShoppingCart className="iconSize"/>} 
      id={"0"} onClick={()=> this.handleSteps(0)}/>
       </div>

       <div className="col-md-3 col-sm-12 p-2">
       <SupportTicketCard title="همه" number={20} 
      selected={step === 0}  
      icon={<AiOutlineShoppingCart className="iconSize"/>} 
      id={"0"} onClick={()=> this.handleSteps(0)}/>
       </div>

       <div className="col-md-3 col-sm-12 p-2">
       <SupportTicketCard title="همه" number={20} 
      selected={step === 0}  
      icon={<AiOutlineShoppingCart className="iconSize"/>} 
      id={"0"} onClick={()=> this.handleSteps(0)}/>
       </div>
     </div>




            {/* {loading ? (
          <LoadingSpinner />
        ) : ( */}
              <div className="row home-content-chart">
              <div className="col-md-6 col-12">
              <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
            />
              </div>
              <div className="col-md-6 col-12">
              <Chart
              options={this.state.options2}
              series={this.state.series2}
              type="donut"
            />
              </div>
           
              </div>
            {/* )} */}
            <LableIcon title={"اعلانات"} />
            <div className="notifications-list-container">
            <NotificationsList title="اعلانات" link={"/notifications"}>
              <NotificationCard
                      title="تست"
                      description="تست تست "
                      date="2022/01/01"
                    />
                    <NotificationCard
                      title="تست"
                      description="تست تست "
                      date="2022/01/01"
                    />

              </NotificationsList>

              <NotificationsList title="اعلانات" link={"/notifications"}>
              <NotificationCard
                      title="تست"
                      description="تست تست "
                      date="2022/01/01"
                    />
                    <NotificationCard
                      title="تست"
                      description="تست تست "
                      date="2022/01/01"
                    />

              </NotificationsList>


              <NotificationsList title="اعلانات" link={"/notifications"}>
              <NotificationCard
                      title="تست"
                      description="تست تست "
                      date="2022/01/01"
                    />
                    <NotificationCard
                      title="تست"
                      description="تست تست "
                      date="2022/01/01"
                    />

              </NotificationsList>

              <NotificationsList title="اعلانات" link={"/notifications"}>
              <NotificationCard
                      title="تست"
                      description="تست تست "
                      date="2022/01/01"
                    />
                    <NotificationCard
                      title="تست"
                      description="تست تست "
                      date="2022/01/01"
                    />

              </NotificationsList>
            </div>
      </div>
    );
  }
}

export default Home;

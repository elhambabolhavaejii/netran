import { BiUser } from 'react-icons/bi';
import { TiDocumentText } from 'react-icons/ti';
import { ButtonOutline, ButtonTab, CustomButton, Header, InputTextLabel, LableIcon, NotificationCard, VitrinCard , RadioSquare, SubScriptionCard, Tab } from "../../components";
import { InputIcon } from "../../components/input_icon";
import { MdDateRange } from 'react-icons/md';
import ComponentsController from '../../controllers/components_controller';

class SampleComponents extends ComponentsController {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="home">
 <Header isActive="isFaq" />
        <ButtonTab
            title="مشخصات عمومی"
            isActive={this.state.step === 0 ? true : false}
            icon={<BiUser />}
            onClick={() => this.setState({ step: 0 })}
          />
           <ButtonTab
            title="ارسال مدارک"
            icon={<TiDocumentText />}
            isActive={this.state.step === 1 ? true : false}
            onClick={() => this.setState({ step: 1 })}
          />

<div className="col-md-4 col-sm-12 pe-3">
                        <InputIcon
                          value=""
                          title={"تاریخ تولد"}
                          placeholder={"تاریخ تولد"}
                          type={"text"}
                          inBox={<MdDateRange />}
                          // errortext={this.state?.errorsList?.date}
                          onChange={
                            (event) => {}
                            // this.setState({ date: event.currentTarget.value })
                          }
                        />
                      </div>
                      <CustomButton onClick={()=>{this.handleLogin()}} title="ورود" />

                      <div className="tabs">
                      <Tab
                        title="نام"
                        isActive={this.state.step === 0 ? true : false}
                        onClick={() => this.setState({ step: 0 })}
                        //  selected={selectCatId === item.CatId ? true : false}
                      />

<Tab
                        title="نام"
                        isActive={this.state.step === 1 ? true : false}
                        onClick={() => this.setState({ step: 1 })}
                        //  selected={selectCatId === item.CatId ? true : false}
                      />

              <ButtonOutline title={"ثبت نام"} />

              <div className="register-modal-input-group-email">
              <InputTextLabel
                value={this.state.name}
                title={"نام"}
                placeholder={""}
                errortext=""
                type={"text"}
                onChange={(event: { currentTarget: { value: any; }; }) => {
                  this.setState({ name: event.currentTarget.value });
                }}
              />
            </div>

</div>

<RadioSquare
              title={"من قوانین را خوانده و قبول دارم."}
              onClick={this.activeCheckBox}
              isActive={this.state.activeCheckBox ? true : false}
              getActive={() => { }}
            />
            <LableIcon title="تست" />
            <VitrinCard details={"لورم ایسون"} 
                onClick={() => {}}
                loadingPayment={false}/>

<NotificationCard
                      title="تست"
                      description="تست تست "
                      date="2022/01/01"
                    />

                <SubScriptionCard title="تست تست تست " day={5} date="2002-01-20" measure={50} />

      </div>
    );
  }
}

export default SampleComponents;

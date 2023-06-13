import notificationController from "../../controllers/notification_controller";
import { Header } from "../../components/header";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Row, Col, Card } from "reactstrap";
import Select, {
  components,
} from "react-select";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { InputIcon } from "../../components/input_icon";

import { LoadingSpinner } from "../../components";
import MyButton from "../../components/button";
class Notification extends notificationController {
  componentDidMount() {
    // this.search()
    this.getPlatformListData();
    window.scrollTo(0, 0);
  }
  render() {
    

    const DropdownIndicator = (props: any) => {
      return (
        components.DropdownIndicator && (
          <components.DropdownIndicator
            style={{ color: "red" }}
            {...props}
          ></components.DropdownIndicator>
        )
      );
    };
    return (
      <div className="user-update">
        <h1 className="profile-title"> مدیریت اعلانات ها </h1>
        <Header isActive="isNotifications"/>
        <div className="custom-tabel">
        <Modal isOpen={this.state.modal} toggle={this.toggle} centered>
        <ModalHeader className="package-card-modal-header" toggle={this.toggle}> ارسال اعلان </ModalHeader>
        <ModalBody className="package-card-modal-body">
        <InputIcon
                          value={this.state.title}
                          title={"عنوان"}
                          placeholder={"عنوان"}
                          type={"text"}
                          onChange={(event) =>
                            this.setState({
                              title: event.currentTarget.value,
                            })
                          }
                        />
                         <InputIcon
                          value={this.state.text}
                          title={"متن"}
                          placeholder={"متن "}
                          type={"text"}
                          onChange={(event) =>
                            this.setState({
                              text: event.currentTarget.value,
                            })
                          }
                        />
        </ModalBody>
        <ModalFooter className="package-card-modal-footer">
          <Button
            className="package-card-modal-footer-btn handle-loading-btn"
            onClick={() => this.sendNotif()}
          >
            {this.state.notificationLoading ? <LoadingSpinner /> : "ارسال"}
          </Button>{" "}
        </ModalFooter>
      </Modal>
              <Row>
                <Col md="12">
                  <Card className="main-card mb-3">
                    <div className="tabel-header">
                    <span className="title">لیست دانشجویان</span>
                    </div>
                    
                        <div className="filter-select-container mb-5">
                          <div className="filter-select col-lg-3 col-md-4 col-sm-12 col-12">
                            <label className="filter-select-label">
                              پلتفرم
                            </label>
                            <div className="slick-container">
                              <Select
                                styles={{
                                  control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    boxShadow: state.isFocused
                                      ? "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                                      : "",
                                    borderWidth: "1px",
                                    backgroundColor: "#F3F3F3",
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right",
                                    borderRadius: "10px",
                                    height: "50px",
                                    transitionDuration: "1s",
                                    outline: "unset",
                                  }),
                                }}
                                onChange={(choice) =>
                                  this.platformSelected(choice)
                                }
                                components={{ DropdownIndicator }}
                                value={this.state.platformId}
                                isMulti={false}
                                closeMenuOnSelect={false}
                                options={this.state.platformList}
                                getOptionLabel={(option: any) => option.name}
                                getOptionValue={(option: any) => option.uuid}
                                placeholder="پلتفرم"
                                isClearable
                              />
                            </div>
                          </div>
                          <div className="filter-select col-lg-3 col-md-4 col-sm-12 col-12">
                            <label className="filter-select-label">
                              پکیج
                            </label>
                            <div className="slick-container">
                              <Select
                                styles={{
                                  control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    boxShadow: state.isFocused
                                      ? "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                                      : "",
                                    borderWidth: "1px",
                                    backgroundColor: "#F3F3F3",
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right",
                                    borderRadius: "10px",
                                    height: "50px",
                                    transitionDuration: "1s",
                                    outline: "unset",
                                  }),
                                }}
                                onChange={(choice) =>
                                  this.packageSelected(choice)
                                }
                                components={{ DropdownIndicator }}
                                value={this.state.packageId}
                                isMulti={false}
                                closeMenuOnSelect={false}
                                options={(this.state.platformList?.filter((i: any) => i.uuid === this.state.platformId?.uuid)[0]?.packages)}
                                getOptionLabel={(option: any) => option.name}
                                getOptionValue={(option: any) => option.uuid}
                                placeholder="پکیج"
                                isClearable
                              />
                            </div>
                          </div>
                          <div className="filter-select col-lg-3 col-md-4 col-sm-12 col-12">
                    <label className="filter-select-label">دانشجو</label>
                    <div className="slick-container">
                      <Select
                        styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,
                            boxShadow: state.isFocused
                              ? "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                              : "",
                            borderWidth: "1px",
                            backgroundColor: "#F3F3F3",
                            display: "flex",
                            flexDirection: "row-reverse",
                            textAlign: "right",
                            borderRadius: "10px",
                            height: "50px",
                            transitionDuration: "1s",
                            outline: "unset",
                          }),
                        }}
                        onChange={(choice) => this.userChoice(choice)}
                        components={{ DropdownIndicator }}
                        value={this.state.users}
                        isMulti
                        closeMenuOnSelect={false}
                        options={this.state.userList}
                        getOptionLabel={(option: any) => option.first_name}
                        getOptionValue={(option: any) => option.uuid}
                        placeholder="دانشجو"
                      />
                    </div>
                  </div>
                          
                          <div className="filter-select col-lg-3 col-md-4 col-sm-12 col-12">
                          <label className="filter-select-label">
                      تاریخ پکیج
                            </label>
                          <DatePicker 
                          placeholderText=" تاریخ پکیج"
      selectsRange={true}
      startDate={this.state.packageDateRange[0]}
      endDate={this.state.packageDateRange[1]}
      onChange={(update : any) => {
        this.setState({packageDateRange: update})
      }}
      isClearable={true}
    />
                          </div>

                          <div className="filter-select col-lg-3 col-md-4 col-sm-12 col-12">
                          <label className="filter-select-label">
                              تاریخ
                            </label>
                          <DatePicker 
                          placeholderText="تاریخ"
      selectsRange={true}
      startDate={this.state.dateRange[0]}
      endDate={this.state.dateRange[1]}
      onChange={(update : any) => {
        this.setState({dateRange: update})
      }}
      isClearable={true}
    />
                          </div>

                          
                  <div className="search-btn">
                  <MyButton
                  myStyle="stepper-save"
                  loading={false}
                  onClick={() => this.search()}
                  title="جستجو "
                />
                    </div>
                    <div className="search-btn">
                  
                <MyButton
                  myStyle="stepper-save"
                  loading={false}
                  onClick={() => this.toggle()}
                  title="ارسال اعلان "
                />
                    </div>
                  
                        </div>
                        {this.state.loading ? (
                      <div className="spinner-container">
                        <div className="loading-spinner"></div>
                      </div>
                    ) : (
                      <>
                        <div className="table-responsive">
                          <table className="align-middle mb-0 table table-borderless table-hover">
                            <thead>
                              <tr>
                                <th className="text-right">شناسه</th>
                                <th>نام و نام خانوادگی</th>
                                <th>ایمیل</th>

                                <th>شماره موبایل</th>

                              </tr>
                            </thead>
                            <tbody>
                            <tr>
                                        <td className="text-right text-muted">
                                          1
                                        </td>
                                        <td>
                                          <div className="widget-content p-0">
                                            <div className="widget-content-wrapper">
                                              <div className="widget-content-left flex2">
                                                <div className="widget-heading">
                                                  Elham
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="widget-content p-0">
                                            <div className="widget-content-wrapper">
                                              <div className="widget-content-left flex2">
                                                <div className="widget-heading">
                                                 test@gmail.com
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="widget-content p-0">
                                            <div className="widget-content-wrapper">
                                              <div className="widget-content-left flex2">
                                                <div className="widget-heading">
                                                  21364
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                            </tbody>
                          </table>
                        </div>
                      </>
                    )}
                  </Card>
                </Col>
              </Row>
            </div>

      </div>
    );
  }
}

export default Notification;

import ProfileControll from "../../controllers/profile_controller";
import { Header } from "../../components/header";
import { BsFillTrashFill } from "@react-icons/all-files/bs/BsFillTrashFill";
import { FaUpload } from "@react-icons/all-files/fa/FaUpload";
import { InputIcon } from "../../components/input_icon";
import { CustomButton, DropDownIcon, LoadingSpinner } from "../../components";
import { AppConstants } from "../../../core/constants";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
class Profile extends ProfileControll {
  componentDidMount() {
    
      this.getUserDetails();
    
    window.scrollTo(0, 0);
  }
  render() {
    const {setPasswordmodal  , errorsList , showPasswordOtp } = this.state ; 
    const isLogin = localStorage.getItem("token");
    return (
      <div className="profile">
        <Header details={this.state.details} />
        <h1 className="profile-title">  پروفایل کابری </h1>

        <div className="">
          {this.state.loading ? (
            <LoadingSpinner />
          ) : (
            <>
              <div className="profile-card">

                <div className="col-md-4 col-sm-12  pe-3">
                  <div className="upload-container">
                    <div className="upload-input">
                      <label htmlFor="1" className="upload-lable">
                        <input
                          name=""
                          type="file"
                          id="1"
                          hidden
                          accept="image/*"
                          onChange={(event) =>
                            this.handleProfileImageUpload(event)
                          }
                        />
                        <FaUpload />
                        <span className="mx-2">عکس پروفایل</span>
                      </label>
                    </div>
                    <span className="input-icon-error">
                      {this.state?.errorsList?.picture}
                    </span>
                  </div>
                  {this.state.profileImage ? (
                    <div className="image-upload-card">
                      <div
                        onClick={() => this.handleDeleteProfileImage()}
                      >
                        <BsFillTrashFill />
                      </div>
                      <img
                        src={this.state.profileImage}
                        className="img"
                      />
                    </div>
                  ) : null}
                  {this.state.availebleProfileImage ? (
                    <div className="image-upload-card">
                      <div
                        onClick={() => this.handleDeleteProfileImage()}
                      >
                        <BsFillTrashFill />
                      </div>
                      <img
                        src={`${AppConstants.base_url_api}/${this.state.availebleProfileImage}`}
                        className="img"
                      />
                    </div>
                  ) : null}
                </div>
                <>

                  <div className="row">

                  <div className="row">
                    <div className="col-md-4 col-sm-12 pe-3">
                      <InputIcon
                        value={this.state.mobile}
                        title={"موبایل "}
                        inBox={"موبایل"}
                        type={"text"}
                        disabled={true}
                        onChange={(event) =>
                          this.setState({
                            mobile: event.currentTarget.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-md-4 col-sm-12 pe-3">
                      <InputIcon
                        value={this.state.userRole
}
                        title={" نقش کاربری"}
                        inBox={" نقش کاربری"}
                        type={"text"}
                        disabled={true}
                        onChange={(event) =>
                          this.setState({
                            userRole: event.currentTarget.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-md-4 col-sm-12 pe-3">
                      <InputIcon
                        value={this.state.registeryDate
}
                        title={"تاریخ عضویت "}
                        inBox={"تاریخ عضویت "}
                        type={"text"}
                        disabled={true}
                        onChange={(event) =>
                          this.setState({
                            registeryDate: event.currentTarget.value,
                          })
                        }
                      />
                    </div>
                  </div>

                    <div className="col-md-4 col-sm-12 pe-3">
                      <InputIcon
                        value={this.state.firstName}
                        title={"نام "}
                        inBox={"نام  "}
                        type={"text"}
                        errortext={this.state?.errorsList?.first_name}
                        onChange={(event) =>
                          this.setState({
                            firstName: event.currentTarget.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-md-4 col-sm-12 pe-3">
                      <InputIcon
                        value={this.state.lastName}
                        title={"نام خانوادگی  "}
                        inBox={"نام خانوادگی  "}
                        errortext={this.state?.errorsList?.lastName}
                        type={"text"}
                        onChange={(event) =>
                          this.setState({
                            lastName: event.currentTarget.value,
                          })
                        }
                      />
                    </div>

                    <div className="col-md-4 col-sm-12 pe-3">
                    <DropDownIcon
                      value={this.state.gender}
                      title={"جنسیت "}
                      inBox={" جنسیت"}
                      type={"text"}
                      optionList={["زن", "مرد"]}
                      errortext={this.state?.errorsList?.postalcode}
                      onChange={(event) =>
                        this.setState({
                          gender: event.currentTarget.value,
                        })
                      }
                    />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4 col-sm-12 pe-3">
                      <InputIcon
                        value={this.state.email}
                        title={"ایمیل"}
                        inBox={"ایمیل"}
                        type={"text"}
                        errortext={this.state?.errorsList?.email}
                        onChange={(event) =>
                          this.setState({ email: event.currentTarget.value })
                        }
                      />
                    </div>

                    <div className="col-md-4 col-sm-12 pe-3">
                      <InputIcon
                        value={this.state.phone}
                        title={"تلفن "}
                        inBox={"تلفن "}
                        type={"text"}
                        errortext={this.state?.errorsList?.phone}
                        onChange={(event) =>
                          this.setState({ phone: event.currentTarget.value })
                        }
                      />
                    </div>

                    <div className="col-md-4 col-sm-12 pe-3">
                        <InputIcon
                          value=""
                          title={"تاریخ تولد"}
                          inBox={"تاریخ تولد"}
                          type={"text"}
                          // errortext={this.state?.errorsList?.postalcode}
                          onChange={
                            (event) => {}
                            // this.setState({ postalCode: event.currentTarget.value })
                          }
                        />
                      </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 col-sm-12 pe-3">
                      <InputIcon
                        value={this.state.companyName}
                        title={"نام شرکت "}
                        inBox={" نام شرکت "}
                        errortext={this.state?.errorsList?.national_id}
                        type={"text"}
                        onChange={(event) =>
                          this.setState({
                            companyName: event.currentTarget.value,
                          })
                        }
                      />
                    </div>
                    
                   <>
                    {/* <div className="col-md-4 col-sm-12 pe-3">
                    <DropDownIcon
                      value={this.state.automaticSave}
                      title={"ذخیره اتوماتیک"}
                      inBox={"ذخیره اتوماتیک"}
                      type={"text"}
                      optionList={["هر 5 دقیقه", "هر ده دقیقه"]}

                      errortext={this.state?.errorsList?.postalcode}
                      onChange={(event) =>
                        this.setState({
                          automaticSave: event.currentTarget.value,
                        })
                      }
                    />
                    </div>

                    <div className="col-md-4 col-sm-12 pe-3">
                      <InputIcon
                        value={this.state.localPassword}
                        title={"رمز محلی "}
                        inBox={"رمز محلی  "}
                        type={"text"}
                        errortext={this.state?.errorsList?.postalcode}
                        onChange={(event) =>
                          this.setState({
                            localPassword: event.currentTarget.value,
                          })
                        }
                      />
                    </div> */}
                   </>
                    
                   {!setPasswordmodal && 

                    <>
                    <div className="col-md-4 col-sm-12 pe-3">
                    <InputIcon
                        value={this.state.newPassword}
                        title={"رمز عبور جدید "}
                        inBox={"رمز عبور جدید  "}
                        type={"text"}
                        errortext={this.state?.errorsList?.newPassword}
                        onChange={(event) =>
                          this.setState({
                            newPassword: event.currentTarget.value,
                          })
                        }
                      />
                      </div>
                <div className="col-md-4 col-sm-12 pe-3">
                       <InputIcon
                        value={this.state.repeatPassword}
                        title={"تکرار رمز عبور "}
                        inBox={"تکرار رمز عبور  "}
                        type={"text"}
                        errortext={this.state?.errorsList?.repeatPassword}
                        onChange={(event) =>
                          this.setState({
                            repeatPassword: event.currentTarget.value,
                          })
                        }/>
                        </div>
                    </>
                    
                    }
                    
                    
                    
                  </div>
                  <hr className="profile-hr" />
                  <div className="row">
                    <div className="col-md-4 col-sm-12 pe-3">
                      <InputIcon
                        value={this.state.telegram}
                        title={"تلگرام "}
                        inBox={<FaTelegramPlane/>}
                        type={"text"}
                        onChange={(event) =>
                          this.setState({
                            telegram: event.currentTarget.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-md-4 col-sm-12 pe-3">
                      <InputIcon
                        value={this.state.whatsapp}
                        title={"واتس اپ "}
                        inBox={<BsWhatsapp/>}
                        type={"text"}
                        onChange={(event) =>
                          this.setState({
                            whatsapp: event.currentTarget.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-md-4 col-sm-12 pe-3">
                      <InputIcon
                        value={this.state.instagram}
                        title={"اینستاگرام   "}
                        inBox={<BsInstagram/>}
                        type={"text"}
                       
                        onChange={(event) =>
                          this.setState({
                            instagram: event.currentTarget.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </>


                <div className="d-flex justify-content-end mt-5">
                  <CustomButton
                    myStyle="stepper-save"
                    loading={this.state.uploadLoading}
                    onClick={() => this.updateCurrentUser()}
                    title="ذخیره "
                  />
                </div>

              </div>

            </>
          )}
        </div>


       
      <Modal
        open={setPasswordmodal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="submission-alert">
          {showPasswordOtp ? 
          

          <InputIcon
                          value={this.state.otpCode}
                          title={"رمز یک بار مصرف"}
                          placeholder={"رمز یک بار مصرف "}
                          type={"text"}
                    errortext={errorsList && errorsList?.filter((obj: any) => obj.path === "otpCode")[0]?.message}
                          onChange={(event) =>
                            this.setState({
                              otpCode: event.currentTarget.value,
                            })
                          }
                        />
        
          :
          
          
          <>
          
          <InputIcon
                          value={this.state.newPassword}
                          title={"رمز عبور جدید "}
                          placeholder={"رمز عبور جدید  "}
                          type={"text"}
                    errortext={errorsList && errorsList?.filter((obj: any) => obj.path === "newPassword")[0]?.message}
                          onChange={(event) =>
                            this.setState({
                              newPassword: event.currentTarget.value,
                            })
                          }
                        />
                         <InputIcon
                          value={this.state.repeatPassword}
                          title={"تکرار رمز عبور "}
                          placeholder={"تکرار رمز عبور  "}
                          type={"text"}
                          name="repeatPassword"
                    errortext={errorsList && errorsList?.filter((obj: any) => obj.path === "repeatPassword")[0]?.message}
                          onChange={(event) =>
                            this.setState({
                              repeatPassword: event.currentTarget.value,
                            })
                          }
                          />
          </>
        
        
        }

<div className="col-md-6 col-12">
<CustomButton
                    myStyle="stepper-save"
                    loading={this.state.uploadLoading}
                    onClick={() => showPasswordOtp ? this.handlePasswordOtp() : this.handleSetPassword()} 
                    title={showPasswordOtp ? " ارسال رمز "  : "ایجاد رمز عبور "}
                  />
</div>
        </Box>
      </Modal>

      </div>
    );
  }
}

export default Profile;
